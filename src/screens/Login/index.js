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
  Dimensions,
} from "react-native";
import LogoName from "../../component/LogoName/index";
import Button from "../../component/Button/index";
import { State, TouchableOpacity } from "react-native-gesture-handler";
import { useState } from "react";
import { color, event } from "react-native-reanimated";
import { useEffect } from "react/cjs/react.development";
import { useDispatch, useSelector } from "react-redux";
import { Password, Username } from "../../redux/loginSlice";
import LinearGradient from "react-native-linear-gradient";
import firestore from "@react-native-firebase/firestore";
import firebase from "../../../firebaseConfig";
import { username } from "../../redux/signupSlice";
import Api from "../../api/Api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Toast, Root } from "native-base";

const index = ({ navigation }) => {
  const [userName, setuserName] = useState("");
  const [password, setPassword] = useState("");
  const [load, setload] = useState(false);

  const loginUsername = useSelector((state) => state.signup.username);
  const loginPassword = useSelector((state) => state.signup.Password);

  console.log("username==>", loginUsername);

  const dispatch = useDispatch();

  const login = async (userName, password) => {
    setload(true);

    console.log("Login", userName, password);
    let item = {
      email: userName,
      password: password,
    };
    await fetch(`${Api.BASE_URL}/auth/login`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    })
      .then((res) => res.json())
      .then((result) => {
        setload(false);
        if (result.success == true) {
          Toast.show({
            text: "Sucess",
            position: "bottom",
            type: "success",
          });
          setTimeout(() => {
            navigation.navigate("Profile");
          }, 1000);

          // Alert.alert(result.data.name);
        } else {
          Toast.show({
            text: result.msg,
            position: "bottom",
            type: "danger",
          });
          // Alert.alert(result.msg);
        }
        console.log("Result", result);
      });
  };

  return (
    <Root>
      <ScrollView>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#430064",
            height: "100%",
          }}
        >
          <View
            style={{
              marginTop: 100,
              marginLeft: -330,
              alignItems: "flex-start",
              justifyContent: "flex-start",
            }}
          >
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}
            >
              <Image
                source={require("../../assets/arrow.png")}
                style={{ height: 20, width: 30, marginTop: 70 }}
              />
            </TouchableOpacity>
          </View>
          <Image
            source={require("../../assets/logo.png")}
            style={{ height: 330, width: 350, marginTop: 10 }}
          />

          <View
            style={{
              backgroundColor: "white",
              padding: 40,
              height: "60%",
              borderRadius: 50,
            }}
          >
            <View
              style={{
                backgroundColor: "white",
                width: 320,
                padding: 10,
                alignItems: "center",
                borderRadius: 20,
              }}
            >
              <TextInput
                value={userName}
                placeholderTextColor="white"
                style={{
                  fontSize: 19,
                  padding: 20,
                  color: "white",
                  width: 330,
                  // textAlign: "center",s
                  borderRadius: 20,
                  // backgroundColor: "#430064",
                  backgroundColor: "gray",
                }}
                placeholder="Username"
                onChangeText={(text) => setuserName(text)}
              />
            </View>
            <View
              style={{
                backgroundColor: "white",
                width: 320,
                padding: 10,
                alignItems: "center",
                borderRadius: 20,
              }}
            >
              <TextInput
                style={{
                  fontSize: 19,
                  padding: 20,
                  color: "white",
                  width: 330,
                  // textAlign: "center",s
                  borderRadius: 20,
                  // backgroundColor: "#430064",
                  backgroundColor: "gray",
                }}
                placeholder="password"
                placeholderTextColor="white"
                value={password}
                secureTextEntry={true}
                onChangeText={(text) => setPassword(text)}
              />
            </View>

            <View
              style={{
                // flexDirection: "row",
                margin: 10,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <TouchableOpacity
                // style={{  }}
                onPress={() => {
                  login(userName, password);
                }}
              >
                <View
                  style={{
                    marginTop: 20,
                    margin: 5,
                    borderRadius: 10,
                    borderWidth: 1,
                    padding: 10,
                    width: 140,

                    backgroundColor: "#7400FF",
                  }}
                >
                  {load ? (
                    <ActivityIndicator size={"large"} color="white" />
                  ) : (
                    <Text
                      style={{
                        justifyContent: "center",
                        marginLeft: 30,
                        fontSize: 22,
                        color: "white",
                        borderColor: "#3E0583",
                        fontWeight: "bold",
                      }}
                    >
                      Login
                    </Text>
                  )}
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate("OTP")}>
                <View style={{ marginTop: 30 }}>
                  <Text style={{ fontSize: 17 }}>Forgot Password?</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </Root>
  );
};

export default index;

const styles = StyleSheet.create({});
