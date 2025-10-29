import React, { useContext } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import RankingScreen from "../Screens/RankingScreen/RankingScreen";
import GameScreen from "../Screens/GameScreen/GameScreen";
import HomeScreen from "../Screens/HomeScreen/HomeScreen";
import HistoryScreen from "../Screens/HistoryScreen/HistoryScreen";
import {AuthContext} from "../Contexts/AuthContext";


const AuthStack = () => {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator>
        <Drawer.Screen name={"Start"} options={{ title: "Start" }}>
            {(props) => <HomeScreen {...props} />}
        </Drawer.Screen>
        <Drawer.Screen name={"Gra"} options={{ title: "Gra" }}>
            {(props) => <GameScreen {...props} />}
        </Drawer.Screen>
        <Drawer.Screen name={"Ranking"} options={{ title: "Ranking" }}>
            {(props) => <RankingScreen {...props} />}
        </Drawer.Screen>
        <Drawer.Screen name={"Historia"} options={{ title: "Historia" }}>
            {(props) => <HistoryScreen {...props} />}
        </Drawer.Screen>
        <Drawer.Screen name="Wyloguj" options={{ title: "Wyloguj" }}>
            {() => {
                const { logout } = useContext(AuthContext);
                logout();
                return null;
            }}
        </Drawer.Screen>
    </Drawer.Navigator>
  );
};

export default AuthStack;
