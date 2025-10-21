import { View, Text, ImageBackground, Image } from "react-native";
import React, {useCallback, useEffect, useState} from "react";
import UserBackground from "../../Components/Backgrounds/UserBackground";
import ScreenTitle from "../../Components/Elements/ScreenTitle";
import i18n from "../../../I18n";
import RegularText from "../../Components/Text/RegularText";
import styles from "./HomeScreen.style";
import UseFetch from "../../Hooks/useFetch";
import {useFocusEffect} from "@react-navigation/native";

const HomeScreen = () => {
    const { fetchData } = UseFetch();
    const [game, setGame] = useState();
    const [ranking, setRanking] = useState();
    const [category, setCategory] = useState();
    const [userRank, setUserRank] = useState();
    const [winner, setWinner] = useState();
    const [userRanking, setUserRanking] = useState();

    useEffect(() => {
        fetchData((res) => {
            setGame(res.data.game);
            setRanking(res.data.ranking);
            setCategory(res.data.category);
            setUserRank(res.data.userRank);
            setWinner(res.data.winner);
        }, "home");
    }, []);

    return (
      <UserBackground noPadding={true} >
        <ScreenTitle title={i18n.t("SCREEN_NAME_HOME")} withBack={false}/>
          <View>
            <View style={styles.gamesContainer}>
                <RegularText style={styles.textLeft}>{i18n.t("CURRENT_WEEK")}</RegularText>
                <RegularText style={styles.textRight}>{game?.week ?? '-'}</RegularText>
            </View>
            <View style={styles.gamesContainer}>
                <RegularText style={styles.textLeft}>{i18n.t("GAME_WINNER")}</RegularText>
                <RegularText style={styles.textRight}>{winner?.name ?? "do rozstrzygnięcia"}</RegularText>
            </View>
            <View style={styles.rankingContainer}>
                <RegularText style={styles.textLeft}>{i18n.t("RANK_CATEGORY")}</RegularText>
                <RegularText style={styles.textRight}>{category?.title ?? '-'}</RegularText>
            </View>
            <View style={styles.gamesContainer}>
                <RegularText style={styles.textLeft}>{i18n.t("RANK_POSITION")}</RegularText>
                <RegularText style={styles.textRight}>{userRank ?? '-'}</RegularText>
            </View>
            <View style={styles.gamesContainer}>
                <RegularText style={styles.textLeft}>{i18n.t("RANK_GAMES_QTY")}</RegularText>
                <RegularText style={styles.textRight}>{ranking && ranking[userRank - 1] ? ranking[userRank - 1].games_count : 0}</RegularText>
            </View>
              <View style={styles.gamesContainer}>
                  <RegularText style={styles.textLeft}>{i18n.t("RANK_POINTS")}</RegularText>
                  <RegularText style={styles.textRight}>{ranking && ranking[userRank - 1] ? ranking[userRank - 1].points : 0}</RegularText>
              </View>
          </View>
      </UserBackground>
    );
};


export default HomeScreen;
