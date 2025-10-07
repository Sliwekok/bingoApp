import { View, Text, ImageBackground, Image } from "react-native";
import React, { useCallback, useState } from "react";
import UserBackground from "../../Components/Backgrounds/UserBackground";
import ScreenTitle from "../../Components/Elements/ScreenTitle";
import i18n from "../../../I18n";
import RegularText from "../../Components/Text/RegularText";
import styles from "./RankingScreen.style";
import BoldText from "../../Components/Text/BoldText";
import icons from "../../Assets/Icons";
import { useFocusEffect } from "@react-navigation/native";
import UseFetch from "../../Hooks/useFetch";

const RankingScreen = () => {
  const { fetchData } = UseFetch();

  const [ranking, setRanking] = useState([]);
  const [myRank, setMyRank] = useState();

  useFocusEffect(
    useCallback(() => {
      let response = fetchData((res) => {
        setRanking(res.data.ranking);
        setMyRank(res.data.my_rank);
      }, "ranking");
    }, [])
  );

  return (
    <UserBackground noPadding={true}>
      <ScreenTitle title={i18n.t("RNK_Ranking")} withBack={true}/>
      <View style={styles.introContainer}>
        <View style={styles.myPosConatiner}>
          <View style={styles.myPostContainerLeftPart}>
            <BoldText style={styles.myPostContainerLeftText}>
              {i18n.t("RNK_My_position")}
            </BoldText>
          </View>
          <View style={styles.myPostContainerRightPart}>
            <ImageBackground
              source={icons.rankBgImage}
              style={styles.backgroundImageContainer}
            >
              <View style={styles.currPostContainer}>
                {myRank && (
                  <BoldText style={styles.myPosText}>{myRank}</BoldText>
                )}
              </View>
            </ImageBackground>
          </View>
        </View>

        <RegularText style={styles.introText}>
          {i18n.t("RNK_Intro")}
        </RegularText>
      </View>

      <View>
        <View style={styles.tableHeader}>
          <View style={styles.headerCell}>
            <BoldText style={styles.headerCellText}>
              {i18n.t("RNK_User")}
            </BoldText>
          </View>
          <View style={styles.headerCell}>
            <BoldText style={styles.headerCellText}>
              {i18n.t("RNK_Points_val")}
            </BoldText>
          </View>
        </View>
        <View style={styles.tableData}>
          {ranking.map((user, index) => {
            return (
              <RankingRow
                pos={index + 1}
                avatar={{ uri: user.avatar }}
                user={user.initials}
                points={user.points}
              />
            );
          })}
        </View>
      </View>
    </UserBackground>
  );
};

const RankingRow = ({ pos, avatar, user, points }) => {
  return (
    <View style={styles.rankingRow.container}>
      <View style={styles.rankingRow.left}>
        <BoldText style={styles.rankingRow.posText}>{pos}.</BoldText>{" "}
        <Image source={avatar} style={{ height: 45, aspectRatio: 1 }} />
        <RegularText>{user}</RegularText>
      </View>
      <View style={styles.rankingRow.right}>
        <BoldText>
          {points} {i18n.t("RNK_Points_shortcut")}
        </BoldText>
      </View>
    </View>
  );
};

export default RankingScreen;
