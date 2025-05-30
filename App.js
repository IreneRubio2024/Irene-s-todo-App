import * as React from "react";
import { createStaticNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./Home";
import DetailsScreen from "./Details";
import ModalScreen from "./Modal";

const RootStack = createNativeStackNavigator({
  initialRouteName: "Home",
  screenOptions: {
    headerStyle: {
      backgroundColor: "#3F49DD",
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold",
    },
  },
  screens: {
    Home: {
      screen: HomeScreen,
      options: {
        title: "My Todo-App",
      },
    },
    Details: {
      screen: DetailsScreen,
      options: {
        title: "Details",
      },
    },
    Modal: {
      screen: ModalScreen,
      options: {
        presentation: "modal",
      },
    },
  },
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return <Navigation />;
}