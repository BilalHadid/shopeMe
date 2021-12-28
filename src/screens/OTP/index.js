import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Alert,
  ActivityIndicator,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  StatusBar,
  TextPropTypes,
  ToastAndroid,
} from "react-native";
import { Toast, Root } from "native-base";

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

const index = ({ navigation }) => {
  return (
    <Root>
      {/* <StatusBar barStyle={"green"}> */}

      <ScrollView style={{}}>
        <View style={styles.container}>
          <View style={styles.box}>
            <Image
              source={require("../../assets/logo.png")}
              style={{
                // height: 330,
                // width: 350,
                height: height - 430,
                width: width + 30,
                marginTop: 10,
                marginLeft: 10,
              }}
            />
            <View
              style={{
                borderWidth: 3,
                // padding: 30,
                alignItems: "center",
                borderColor: "white",
                backgroundColor: "white",
                // height: height,
                borderTopLeftRadius: 30,
                borderTopRightRadius: 30,
                flex: 1,
              }}
            >
              <View style={{}}>
                <Text
                  style={{
                    fontSize: 25,
                    fontWeight: "bold",
                    color: "#430064",
                    marginTop: 30,
                  }}
                >
                  Enter your 4 digit Code here
                </Text>
              </View>
              <View style={{ flexDirection: "row", margin: 70 }}>
                <TextInput
                  maxLength={1}
                  style={{
                    borderColor: "black",
                    backgroundColor: "#430064",
                    color: "white",

                    padding: 15,
                    borderWidth: 1,
                    margin: 5,
                    borderRadius: 10,
                    fontSize: 39,

                    textAlign: "center",
                    marginLeft: 40,
                  }}
                />
                <TextInput maxLength={1} style={styles.styleOTP} />
                <TextInput maxLength={1} style={styles.styleOTP} />
                <TextInput maxLength={1} style={styles.styleOTP} />
                <TextInput maxLength={1} style={styles.styleOTP} />
                <TextInput
                  maxLength={1}
                  style={{
                    borderColor: "black",
                    backgroundColor: "#430064",
                    color: "white",

                    padding: 15,
                    borderWidth: 1,
                    marginRight: 40,
                    margin: 5,
                    borderRadius: 10,
                    fontSize: 39,

                    textAlign: "center",
                  }}
                />
              </View>
              <TouchableOpacity
                onPress={() =>
                  Toast.show({
                    text: "Wrong password!",
                    position: "bottom",
                    type: "danger",
                  })
                }
                // onPress={() => {
                //   Toast.show({
                //     text: "Wrong password!",
                //     buttonText: "Okay",
                //   });

                //   // ToastAndroid.showWithGravity(
                //   //   "sucessfull",
                //   //   ToastAndroid.SHORT,
                //   //   ToastAndroid.TOP
                //   // );
                //   // navigation.navigate("Profile");
                // }}
              >
                <View
                  style={{
                    borderWidth: 3,
                    borderColor: "white",
                    padding: 20,
                    borderRadius: 20,
                    // backgroundColor: "#430064",
                    backgroundColor: "#FF7100",
                  }}
                >
                  <Text
                    style={{
                      marginLeft: 40,
                      fontSize: 19,
                      fontWeight: "bold",
                      marginRight: 40,
                      color: "white",
                    }}
                  >
                    Verify
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* </StatusBar> */}
    </Root>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  box: {
    backgroundColor: "#430064",
    width: width,
    height: height,
  },
  styleOTP: {
    borderColor: "black",
    backgroundColor: "#430064",
    color: "white",

    padding: 15,
    borderWidth: 1,
    margin: 5,
    borderRadius: 10,
    fontSize: 39,

    textAlign: "center",
  },
});
