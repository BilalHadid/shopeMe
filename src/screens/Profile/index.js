import React, { useEffect } from "react";
import { StyleSheet, Text, View, Image, Alert } from "react-native";
import {
  State,
  TextInput,
  TouchableOpacity,
} from "react-native-gesture-handler";
import { Profile } from "../../theme/theme";
import Button from "../../component/Button/index";
// import ImagePicker from "react-native-image-picker";
import { useSelector } from "react-redux";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react/cjs/react.development";

const index = () => {
  const [image, setImage] = useState(null);
  // const state = useSelector((state) => state.login.username);

  const state = useSelector((state) => state.signup.username);
  const email = useSelector((state) => state.signup.userEmail);

  console.log("name===>", state);
  console.log("number===>", email);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          Alert.alert(
            "Sorry, we need camera roll permissions to make this work!"
          );
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      //   allowsEditing: true,
      //   aspect: [4, 3],
      //   quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <View
      style={{
        backgroundColor: "#430064",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text style={{ fontSize: 40, color: "white" }}>Hello {state}</Text>
      <Text style={{ fontSize: 20, fontWeight: "100", color: "white" }}>
        {/* Welcome to ShopeMe{" "} */}
        {email}
      </Text>
      <View style={{ alignItems: "center", backgroundColor: "#430064" }}>
        {image ? (
          <Image
            source={{ uri: image }}
            style={{
              height: 150,
              width: 150,
              marginTop: 10,
              borderRadius: 100,
            }}
            resizeMode="cover"
          />
        ) : (
          <Image
            source={Profile}
            style={{ height: 150, width: 150, marginTop: 10 }}
          />
        )}
      </View>

      <View>
        <Button name="Chagne Profile Picture" />
      </View>
      <View style={{ padding: 10 }}>
        <TouchableOpacity onPress={pickImage}>
          <Button name="UPLOAD PICTURE" />
        </TouchableOpacity>
      </View>
      <TouchableOpacity>
        <Text style={{ fontSize: 22, color: "white" }}>SKIP</Text>
      </TouchableOpacity>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({});
