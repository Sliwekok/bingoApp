import React, { useContext } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import RankingScreen from "../Screens/RankingScreen/RankingScreen";
import GameScreen from "../Screens/GameScreen/GameScreen";
import HomeScreen from "../Screens/HomeScreen/HomeScreen";


const AuthStack = () => {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator>
        <Drawer.Screen name={"Start"} options={{ title: "Start" }}>
            {(props) => <HomeScreen {...props} />}
        </Drawer.Screen>
        <Drawer.Screen name={"Game"} options={{ title: "Game" }}>
            {(props) => <GameScreen {...props} />}
        </Drawer.Screen>
        <Drawer.Screen name={"Ranking"} options={{ title: "Ranking" }}>
            {(props) => <RankingScreen {...props} />}
        </Drawer.Screen>
    </Drawer.Navigator>
  );
};

export default AuthStack;
