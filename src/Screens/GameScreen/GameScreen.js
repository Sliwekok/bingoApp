import { View, Text, TouchableOpacity } from "react-native";
import React, { useCallback, useState } from "react";
import UserBackground from "../../Components/Backgrounds/UserBackground";
import ScreenTitle from "../../Components/Elements/ScreenTitle";
import i18n from "../../../I18n";
import RegularText from "../../Components/Text/RegularText";
import styles from "./GameScreen.style";
import BoldText from "../../Components/Text/BoldText";
import UseFetch from "../../Hooks/useFetch";
import { useFocusEffect } from "@react-navigation/native";
import SearchPicker from "../../Components/Picker/SearchPicker";
import {isDisabled} from "react-native/Libraries/LogBox/Data/LogBoxData";

const GameScreen = () => {
    const { fetchData } = UseFetch();

    const [game, setGame] = useState();
    const [categories, setCategories] = useState();
    const [options, setOptions] = useState();
    const [selectedItem, setSelectedItem] = useState(null);
    const [loading, setLoading] = useState(true);
    const [checked, setChecked] = useState(true);

    useFocusEffect(
        useCallback(() => {
            setLoading(true);
            fetchData(
                (res) => {
                    setGame(res.data.game);
                    setCategories(res.data.categories);
                    setOptions(res.data.options);
                    setLoading(false);
                },
                "game"
            );
        }, [])
    );

    const changeCategory = async(categoryId) => {
        if (categoryId === null) return;
        try {
            await fetchData(
                (res) => {
                    setLoading(true);
                    fetchData(
                        (resGame) => {
                            setGame(resGame.data.game);
                            setCategories(resGame.data.categories);
                            setOptions(resGame.data.options);
                            setLoading(false);
                        },
                        "game"
                    );
                },
                'changeCategory',
                '',
                {category: categoryId},
            )
        } catch (err) {
            console.error(err);
        }
    };

    const setAsChecked = async (optionId) => {
        setSelectedItem(optionId);
        try {
            await fetchData(
                (res) => {
                    if (res.checked === true) {
                        setGame((prevGame) => {
                            const newContent = prevGame.content.map((row) =>
                                row.map((col) =>
                                    col.option === optionId
                                        ? {
                                            ...col,
                                            checked: !col.checked,
                                            title: res.title,
                                        }
                                        : col
                                )
                            );

                            if (res.status == 'finished') {
                                return { ...prevGame, status: 'finished'};
                            }

                            return { ...prevGame, content: newContent };
                        });
                    }

                    setOptions(prevOptions =>
                        prevOptions.filter(option => option.id !== optionId)
                    );

                    setChecked(res.checked);

                },
                "toggleOption/" + optionId,
                {},
            );
        } catch (err) {
            console.error("Error toggling option:", err);
        }
    };

    if (loading || !game) {
        return (
            <UserBackground noPadding={true}>
                <ScreenTitle title={i18n.t("SCREEN_NAME_GAME")} withBack={true} />
                <RegularText>Loading...</RegularText>
            </UserBackground>
        );
    }

    return (
        <UserBackground noPadding={true}>
            <ScreenTitle title={i18n.t("SCREEN_NAME_GAME")} withBack={true} />

            <View style={styles.category}>
                {
                    game.status === "finished" ?
                        <BoldText styles={styles.showWin}>{i18n.t("GAME_WIN_MESSAGE")}</BoldText>
                    :
                        <SearchPicker
                            items={options}
                            selected={selectedItem}
                            onValueChange={(optionId) => setAsChecked(optionId)}
                            labelField="option"
                            valueField="id"
                            placeholder="Wybierz opcję..."
                        />
                }
            </View>

            <View style={styles.board.table}>
                {game.content.map((row, rowIndex) => (
                    <View key={rowIndex} style={styles.board.row}>
                        {row.map((col, colIndex) => {
                            const isFree = col.title === "FREE";
                            const isSelected = col.checked || isFree;
                            const isDisabled = game.status === "finished";

                            return (
                                <TouchableOpacity
                                    key={colIndex}
                                    activeOpacity={0.7}
                                    disabled={isDisabled || isFree}
                                    style={[
                                        styles.board.cell,
                                        isFree && styles.board.free,
                                        isSelected && styles.board.selected,
                                        isDisabled && styles.board.disabled,
                                    ]}
                                >
                                    <Text style={styles.board.text}>
                                        {isFree ? "FREE" : col.title}
                                    </Text>
                                </TouchableOpacity>
                            );
                        })}
                    </View>
                ))}
                {!checked && <BoldText style={styles.showWin}>{i18n.t("GAME_OPTION_NO_CHECKED")}</BoldText>}
            </View>
            <View style={styles.category.container}>
                <RegularText style={styles.category.header}>{i18n.t("GAME_CHANGE_CATEGORY")}</RegularText>
                <SearchPicker
                    items={categories}
                    onValueChange={(categoryId) => changeCategory(categoryId)}
                    labelField="title"
                    valueField="id"
                    placeholder="Wybierz kategorię..."
                />
            </View>
        </UserBackground>
    );
};

export default GameScreen;
