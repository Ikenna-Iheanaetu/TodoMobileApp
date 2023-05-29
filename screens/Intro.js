import React from "react";
import { useState, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  TextInput,
  Pressable,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Intro({ onLayout }) {
  const [name, setName] = useState("")
  const [buttonPress, setButtonPress] = useState(false)


  useEffect(() => {
    setButtonPress(false)
  }, [name.trim().length <= 0])

  const submit = () => {
   setButtonPress(true)
  };

  const MyStatusBar = () => (
    <SafeAreaView
      style={{
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      <StatusBar translucent backgroundColor="#4D5066" />
    </SafeAreaView>
  );

  return (
    <View style={{ flex: 1, backgroundColor: "#161722" }} onLayout={onLayout}>
      <MyStatusBar />
      <View style={styles.todo}>
        <Text style={styles.todoText}>TO-DO</Text>
      </View>
      <View
        style={{
          marginTop: "25%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={styles.text}>Kindly enter your name to continue</Text>
        <View
          style={{
            flexDirection: "row",
            marginLeft: 20,
            marginRight: 20,
            gap: 10,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TextInput
            style={styles.textInput}
            placeholder="Enter your name here"
            onChangeText={setName}
            value={name}
          />
          <Pressable onPress={submit}>
            <LinearGradient
              // Button Linear Gradient
              colors={["#57DDFF", "#C058F3"]}
              style={styles.press}
            >
              <Ionicons name="checkmark-outline" size={30} color="white" />
            </LinearGradient>
          </Pressable>
        </View>
        {buttonPress == true && name.trim().length <= 0  ? (
          <Text style={{ color: "#DE0F0F", marginTop: 15, fontFamily: "Josefin400" }}>
            Kindly enter your name before you continue
          </Text>
        ) : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  todo: {
    marginTop: "5%",
    marginLeft: "4%",
  },
  todoText: {
    fontFamily: "Josefin700",
    color: "#fff",
    fontSize: 40,
  },
  text: {
    fontFamily: "Josefin400",
    color: "#CACDE8",
    marginBottom: 10,
  },
  textInput: {
    width: "80%",
    padding: 10,
    borderRadius: 7,
    backgroundColor: "#777A92",
    color: "#eee",
    fontSize: 16,
    marginTop: 10,
  },
  press: {
    marginTop: 10,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 1000,
    width: 50,
    height: 50,
    alignItems: "center",
  },
});
