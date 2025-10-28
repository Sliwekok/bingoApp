import { View} from "react-native";
import React, { useCallback, useState } from "react";
import UserBackground from "../../Components/Backgrounds/UserBackground";
import ScreenTitle from "../../Components/Elements/ScreenTitle";
import i18n from "../../../I18n";
import RegularText from "../../Components/Text/RegularText";
import styles from "./RankingScreen.style";
import BoldText from "../../Components/Text/BoldText";
import { useFocusEffect } from "@react-navigation/native";
import UseFetch from "../../Hooks/useFetch";

const RankingScreen = () => {
    const { fetchData } = UseFetch();
    const [ranking, setRanking] = useState([]);
    const [userRank, setUserRank] = useState();
    const [user, setUser] = useState();
    const [category, setCategory] = useState();
    const [categories, setCategories] = useState();

    useFocusEffect(
        useCallback(() => {
          let response = fetchData((res) => {
            setRanking(res.data.ranking);
            setUserRank(res.data.userRank);
            setUser(res.data.user);
            setCategory(res.data.category);
            setCategories(res.data.categories);
          }, "ranking");
        }, [])
    );

  return (
    <UserBackground noPadding={true}>
      <ScreenTitle title={i18n.t("SCREEN_NAME_RANKING")} withBack={true}/>
        <View style={styles.category}>
            <BoldText style={[{flex: 0.5, textAlign: "left"}]}>
                {i18n.t("RANK_CATEGORY")}:
            </BoldText>
            <BoldText style={[{flex: 0.5, textAlign: "right"}]}>
                {category?.title ?? '-'}
            </BoldText>
        </View>
      <View>
          <View style={styles.tableHeader}>
              <View style={[styles.headerCell, { flex: 0.15 }]}>
                  <BoldText style={styles.headerCellText}>{i18n.t("RANK_LP")}</BoldText>
              </View>
              <View style={[styles.headerCell, { flex: 0.9 }]}>
                  <BoldText style={styles.headerCellText}>{i18n.t("RANK_USER")}</BoldText>
              </View>
              <View style={[styles.headerCell, { flex: 0.4 }]}>
                  <BoldText style={styles.headerCellText}>{i18n.t("RANK_POINTS_VAL")}</BoldText>
              </View>
              <View style={[styles.headerCell, { flex: 0.4 }]}>
                  <BoldText style={styles.headerCellText}>{i18n.t("RANK_GAMES_PLAYED")}</BoldText>
              </View>
          </View>
        <View style={styles.tableData}>
          {ranking.map((userRow, index) => {
            return (
              <RankingRow
                pos={index + 1}
                userLogin={userRow.login}
                points={userRow.points}
                userRank = {userRank}
                gamesCount = {userRow.games_count}
              />
            );
          })}
        </View>
      </View>
    </UserBackground>
  );
};

const RankingRow = ({ pos, userLogin, points, userRank, gamesCount }) => {
    const isCurrentUser = pos === userRank;
    const isTop3 = pos <= 3;

    return (
        <View style={styles.rankingRow.container}>
            <View style={[styles.rankingRow.cell, styles.rankingRow.colPos]}>
                <BoldText
                    style={[
                        styles.rankingRow.posText,
                        isTop3 && styles.rankingRow.posTextTop3,
                        isCurrentUser && styles.rankingRow.posTextCurrentUser,
                    ]}
                >
                    #{pos}
                </BoldText>
            </View>

            <View style={[styles.rankingRow.cell, styles.rankingRow.colUser]}>
                <RegularText
                    style={[styles.rankingRow.cellText, isCurrentUser && styles.rankingRow.posTextCurrentUser]}
                    numberOfLines={1}
                >
                    {userLogin}
                </RegularText>
            </View>

            <View style={[styles.rankingRow.cell, styles.rankingRow.colPoints]}>
                <BoldText style={styles.rankingRow.cellText}>{points ?? 0}</BoldText>
            </View>

            <View style={[styles.rankingRow.cell, styles.rankingRow.colGames]}>
                <BoldText style={styles.rankingRow.cellText}>{gamesCount ?? 0}</BoldText>
            </View>
        </View>
    );
};

export default RankingScreen;
