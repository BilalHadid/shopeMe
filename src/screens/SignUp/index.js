import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  Image,
  Alert,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Wrapper from "../../component/Wrapper/index";
import LogoName from "../../component/LogoName/index";
import Button from "../../component/Button/index";
import { useState, version } from "react/cjs/react.development";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";

import API from "../../api/Api";
import firestore from "@react-native-firebase/firestore";
import firebase from "../../../firebaseConfig";

import {
  username,
  userEmail,
  phone,
  Password,
  psConform,
} from "../../redux/signupSlice";

const index = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phones, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [pasconform, setPsconform] = useState("");

  // console.log("username,", name);
  // console.log("username,", email);
  // console.log("phoneNumber==>", phones);
  const dispatch = useDispatch();

  const SignUp = async (name, email, phones, password) => {
    dispatch(username(name));
    dispatch(userEmail(email));
    dispatch(phone(phones));
    dispatch(Password(password));
    dispatch(psConform(pasconform));

    // const dbh = firebase.firestore();

    // await dbh.collection("users").doc("login").set({
    //   username: name,
    //   password: password,
    // });

    let dataitem = {
      name: name,
      email: email,
      phone: phones,
      password: password,
      userType: "passenger",
    };

    console.log("data ===>", name, email, phones, password);

    await fetch(`${API.BASE_URL}/auth/passenger/register`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataitem),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log("SIGNUP===>", result);
        dispatch(username(result.data.name));
        dispatch(userEmail(result.data.email));
        navigation.navigate("Login");
      })
      .catch((err) => Alert.alert(err));

    // await dbh.collection("users").doc("login").get().then((doc)=>{
    //   if (doc.exists) {
    //     console.log("Document data",doc.data().username,doc.data().password);

    //   }
    //   else{
    //     console.log("no such document")
    //   }

    // }).catch((error)=>{
    //   console.log("document get Error",error)
    // })
  };

  // const sendItem= async ()=>{
  //   await AsyncStorage.setItem("username","haiderali",(error)=>{
  //     console.log(error)
  //   })
  // }

  //   const getItem= async()=>{

  //    const dataItem= await AsyncStorage.getItem("username",(error)=>{
  //     console.log(dataItem)
  //   })
  //   console.log(dataItem)
  //   return dataItem
  // }

  return (
    <>
      <ScrollView>
        <LogoName />

        <View style={styles.container}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Image
              source={require("../../assets/arrowb.png")}
              style={{ height: 20, width: 30 }}
            />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 23,
              fontWeight: "bold",
              color: "#430064",
              textAlign: "center",
              marginBottom: 5,
            }}
          >
            <Text>SIGN UP</Text>
          </Text>

          <ScrollView showsVerticalScrollIndicator={false}>
            <View>
              <View style={styles.box}>
                <Text style={{ fontWeight: "bold", fontSize: 15 }}>Name</Text>
                <TextInput
                  style={{ fontSize: 15 }}
                  placeholder="Enter your name"
                  onChangeText={(text) => {
                    setName(text);
                  }}
                />
              </View>
            </View>
            <View>
              <View style={styles.box}>
                <Text style={{ fontWeight: "bold", fontSize: 15 }}>Email</Text>
                <TextInput
                  style={{ fontSize: 15 }}
                  placeholder="altaf@gmail"
                  onChangeText={(text) => {
                    setEmail(text);
                  }}
                />
              </View>
            </View>
            <View>
              <View style={styles.box}>
                <Text style={{ fontWeight: "bold", fontSize: 15 }}>phone</Text>
                <TextInput
                  style={{ fontSize: 15 }}
                  placeholder="+92 3493480304"
                  onChangeText={(text) => {
                    setPhone(text);
                  }}
                />
              </View>
            </View>
            <View>
              <View style={styles.box}>
                <Text style={{ fontWeight: "bold", fontSize: 15 }}>
                  Password
                </Text>
                <TextInput
                  secureTextEntry={true}
                  style={{ fontSize: 15 }}
                  placeholder="Enter your name"
                  onChangeText={(text) => {
                    setPassword(text);
                  }}
                />
              </View>
            </View>
            <View>
              <View style={styles.box}>
                <Text style={{ fontWeight: "bold", fontSize: 15 }}>
                  Conform Password
                </Text>
                <TextInput
                  secureTextEntry={true}
                  style={{ fontSize: 15 }}
                  placeholder="Enter your name"
                  onChangeText={(text) => {
                    setPsconform(text);
                  }}
                />
              </View>
            </View>
            <TouchableOpacity
            // onPress={() => {
            //   navigation.navigate("Login");
            // }}
            >
              <TouchableOpacity
                onPress={() => SignUp(name, email, phones, password)}
              >
                <Button name="SIGN UP" />
              </TouchableOpacity>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </ScrollView>
    </>
  );
};

const BoxDetails = ({ heading, plhoder, ps, func }) => {
  console.log(plhoder, heading);
  return (
    <View>
      <View style={styles.box}>
        <Text style={{ fontWeight: "bold", fontSize: 15 }}>{heading}</Text>
        <TextInput
          secureTextEntry={ps}
          style={{ fontSize: 15 }}
          placeholder={plhoder}
          onChangeText={func}
        />
      </View>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    padding: 30,
    backgroundColor: "yellow",
    // alignItems:"center",
    backgroundColor: "white",
    width: "100%",
    height: "80%",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  box: {
    borderRadius: 7,
    borderColor: "gray",
    borderWidth: 1,
    padding: 9,
    margin: 6,
    backgroundColor: "#FFFEFF",
  },
});
