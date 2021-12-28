import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { Constants } from "expo";
import SMSVerifyCode from "react-native-otp-verify";

// You can import from local files

// or any pure javascript modules available in npm
// Version can be specified in package.json

const index = () => {
  const blur = () => this.verifycode.blur();

  const reset = () => this.verifycode.reset();

  const onInputCompleted = (text) => {
    Alert.alert(
      text,
      "本次输入的验证码",
      [
        {
          text: "确定",
        },
      ],
      { cancelable: false }
    );
  };
  return (
    <View style={styles.container}>
      <SMSVerifyCode
        ref={(ref) => (verifycode = ref)}
        onInputCompleted={onInputCompleted}
        // verifyCodeLength={5}
        // containerPaddingVertical={10}
        // containerPaddingHorizontal={50}
        // containerBackgroundColor={'#8DC647'}
        // codeBorderColor={'#000000'}
        // codeFocusedBorderColor={'#0000FF'}
        // codeBorderWidth={3}
        // codeBorderRadius={16}
        // codeFontSize={20}
        // codeFontColor={'#D784EB'}
        // secureTextEntry
      />
      <TouchableOpacity onPress={reset} style={styles.button} activeOpcity={0}>
        <Text style={styles.welcome}>Reset</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={blur} style={styles.button} activeOpcity={0}>
        <Text style={styles.welcome}>blur</Text>
      </TouchableOpacity>
    </View>
  );
};

// blur = () => this.verifycode.blur();

// reset = () => this.verifycode.reset();

// onInputCompleted = (text) => {
//   Alert.alert(
//     text,
//     "本次输入的验证码",
//     [
//       {
//         text: "确定",
//       },
//     ],
//     { cancelable: false }
//   );
// };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#FEFFFE",
    paddingTop: 30,
  },
  welcome: {
    color: "#191E24",
    fontSize: 25,
    textAlign: "center",
    margin: 10,
  },
  button: {
    justifyContent: "center",
    backgroundColor: "#1193F6",
    paddingHorizontal: 25,
    borderRadius: 10,
    marginTop: 40,
  },
});

export default index;
