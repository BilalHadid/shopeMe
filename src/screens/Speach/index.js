import * as React from "react";
import { View, StyleSheet, Button, Text } from "react-native";
import * as Speech from "expo-speech";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function App() {
  const speak = () => {
    const turnLeft = "بائیں مڑو";
    const turnRight = "دائیں مڑیں";
    const turnBack = "پیچھے مڑو";
    const turnForward = "آگے بڑھیں";
    const Thanks = "شکریہ";

    // Speech.speak(thingToSay);
    setTimeout(() => {
      Speech.speak(turnLeft, { languge: "ur" });
    }, 5000);

    setTimeout(() => {
      Speech.speak(turnRight, { language: "ur" });
    }, 10000);
    setTimeout(() => {
      Speech.speak(turnBack, { language: "ur" });
    }, 15000);

    setTimeout(() => {
      Speech.speak(turnForward, { language: "ur" });
    }, 2000);
    setTimeout(() => {
      Speech.speak(Thanks, { language: "ur" });
    }, 25000);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={speak}>
        <Text>Click me</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
