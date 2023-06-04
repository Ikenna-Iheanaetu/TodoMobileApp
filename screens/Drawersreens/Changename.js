import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  TextInput,
  Pressable,
} from "react-native";
import React, { useState, useEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Ionicons from "@expo/vector-icons/Ionicons";

import { updateData } from "../Todo";

export default function Changename({ onLayout, navigation }) {
  const [name, setName] = useState("");
  const [buttonPress, setButtonPress] = useState(false);

  useEffect(() => {
    setButtonPress(false);
  }, [name.trim().length <= 0]);



  function submit(){
    updateData(name, setButtonPress, navigation)
  }

  // const submit = async () => {
  //   if (name.trim().length >= 0) {
  //     setButtonPress(true);
  //   }

    // if (name.trim().length > 0) {
    //   try {
    //     console.log(name);

    //     const value = await AsyncStorage.getItem("user");
    //     // let userName = []
    //     console.log(value);

    //     // if (value !== null) userName = JSON.parse(value)
    //     // if (value !== null) userName.push(value)

    //     // const newUserName = userName.filter(change => {
    //     //   if (change.id == 1) change.name = name.trim()
    //     //   return change
    //     // })

    //     // await AsyncStorage.removeItem('user')

    //     const item = { name: name.trim() }

    //     await AsyncStorage.mergeItem("user", JSON.stringify(item))

    //     // const newValue = await AsyncStorage.getItem("user");
    //     // console.log(newValue);


    //     const toTodoScreen = () => navigation.navigate("Home");

    //     toTodoScreen();
    //   } catch (error) {
    //     console.error("error: " + error);
    //   }
    // }
  // };

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
        <Text style={styles.todoText}>Update your name</Text>
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
          <Pressable onPress={() => submit()}>
            <LinearGradient
              // Button Linear Gradient
              colors={["#57DDFF", "#C058F3"]}
              style={styles.press}
            >
              <Ionicons name="checkmark-outline" size={30} color="white" />
            </LinearGradient>
          </Pressable>
        </View>
        {buttonPress == true && name.trim().length <= 0 ? (
          <Text
            style={{
              color: "#DE0F0F",
              marginTop: 15,
              fontFamily: "Josefin400",
            }}
          >
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
    fontSize: 25,
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
    fontFamily: "Josefin400",
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
