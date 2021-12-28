import React from "react";
import { StyleSheet, Text, View, Image, Alert, Dimensions } from "react-native";
import styels, { logo } from "../../theme/theme";
import Button from "../../component/Button/index";
import { TouchableOpacity } from "react-native-gesture-handler";
const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

const index = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={logo}
        style={{ height: 200, width: 340, marginTop: 135 }}
      />
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Login");
        }}
      >
        <Button name="Get Started" />
      </TouchableOpacity>
      {/* <SignIn /> */}
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 20,
        }}
      >
        <TouchableOpacity
          onPress={() => {
            // navigation.navigate("SignUp");
            navigation.navigate("Speach");
          }}
        >
          <Text
            style={{
              fontSize: 20,
              color: "white",
              fontWeight: "bold",
            }}
          >
            SIGN UP
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// const SignIn=({navigation})=>{
//     return(

//     )
// }

export default index;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#430064",
    height: height,
  },
});
