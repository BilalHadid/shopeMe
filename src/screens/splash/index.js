import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Alert,
  Dimensions,
  ActivityIndicator,
} from "react-native";
import { useEffect, useState } from "react/cjs/react.development";
import { logo } from "../../theme/theme";
import * as Progress from "react-native-progress";
import LinearGradient from "react-native-linear-gradient";

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

// import AnimatedLoader from "react-native-animated-loader";
// import { bounce } from 'react-native/Libraries/Animated/src/Easing';

const index = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("StackNavigation");
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={logo}
        style={{
          height: height,
          width: width,

          justifyContent: "center",
        }}
      />

      {/* <Progress.Bar
         style={{marginTop:130}}
          progress={0.1}
           width={200}
           animated={true}
           borderWidth={1}
        animationType="timing"
           borderColor="white"
           color="rgba(0, 122, 255, 1)" /> */}
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "black",
    height: "100%",
  },
  colorcode: {
    color: "yellow",
  },
});
