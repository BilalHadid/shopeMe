import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Splash from "./src/screens/splash";
import MainScreen from "./src/screens/MainScreen/index";
import SignUp from "./src/screens/SignUp/index";
import Profile from "./src/screens/Profile/index";
import Login from "./src/screens/Login/index";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./src/navigations/RootNavigator";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";
import Backarrow from "./src/component/Backarrow/index";
import OTP from "./src/screens/OTP/index";
import CheckOTP from "./src/screens/CheckOTP/index";

export default function App() {
  return (
    <>
      {/* <CheckOTP /> */}
      {/* <OTP /> */}
      {/* <Login /> */}

      <Provider store={store}>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </Provider>

      {/* <StatusBar style="auto" /> */}

      {/* <View style={styles.container}> */}
      {/* <Splash /> */}
      {/* <MainScreen /> */}
      {/* <SignUp /> */}
      {/* <Profile /> */}

      {/* </View> */}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#430064",
    alignItems: "center",
    justifyContent: "center",
  },
});
