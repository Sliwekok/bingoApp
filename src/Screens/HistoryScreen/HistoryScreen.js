import { View, Text, TouchableOpacity } from "react-native";
import React, { useCallback, useState } from "react";
import UserBackground from "../../Components/Backgrounds/UserBackground";
import ScreenTitle from "../../Components/Elements/ScreenTitle";
import i18n from "../../../I18n";
import RegularText from "../../Components/Text/RegularText";
import styles from "./HistoryScreen.style";
import BoldText from "../../Components/Text/BoldText";
import UseFetch from "../../Hooks/useFetch";
import { useFocusEffect } from "@react-navigation/native";
import SearchPicker from "../../Components/Picker/SearchPicker";

const GameScreen = () => {
    const { fetchData } = UseFetch();

    const [game, setGame] = useState();
    const [previousGames, setPreviousGames] = useState();
    const [loading, setLoading] = useState(true);

    useFocusEffect(
        useCallback(() => {
            setLoading(true);
            fetchData(
                (res) => {
                    setGame(res.selectedGame);
                    setPreviousGames(res.previousGames);
                    setLoading(false);
                },
                "history"
            );
        }, [])
    );

    const changeDate = async(week) => {
        if (week === null) return;
        try {
            await fetchData(
                (res) => {
                    setLoading(true);
                    fetchData(
                        (resGame) => {
                            setGame(res.selectedGame);
                            setPreviousGames(res.previousGames);
                            setLoading(false);
                        },
                        "history"
                    );
                },
                'history',
                {week: week},
            )
        } catch (err) {
            console.error(err);
        }
    };

    if (loading || !game) {
        return (
            <UserBackground noPadding={true}>
                <ScreenTitle title={i18n.t("HISTORY_SCREEN_NAME")} withBack={true} />
                <RegularText>Loading...</RegularText>
            </UserBackground>
        );
    }

    return (
        <UserBackground noPadding={true}>
            <ScreenTitle title={i18n.t("HISTORY_SCREEN_NAME")} withBack={true} />

            <View style={styles.showWin}>
                <BoldText>{i18n.t("HISTORY_GAME_DESCRIPTION")}</BoldText>
            </View>

            <View style={styles.board.table}>
                {game.content.map((row, rowIndex) => (
                    <View key={rowIndex} style={styles.board.row}>
                        {row.map((col, colIndex) => {
                            const isFree = col.title === "FREE";
                            const isSelected = col.checked || isFree;
                            const isDisabled = false;

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
            </View>
            <View style={styles.category.container}>
                <RegularText style={styles.category.header}>{i18n.t("HISTORY_DATE")}</RegularText>
                <SearchPicker
                    items={previousGames}
                    onValueChange={(date) => changeDate(date)}
                    labelField="date-range"
                    valueField="week"
                    placeholder="Wybierz datę..."
                />
            </View>
        </UserBackground>
    );
};

export default GameScreen;
