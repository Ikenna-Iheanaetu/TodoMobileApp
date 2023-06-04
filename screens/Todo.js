import React, { useState } from "react";
import { useEffect } from "react";
import { View, SafeAreaView, StatusBar, Platform } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import TodoHead from "../components/todoComponents/TodoHead";

import Draweranimationwrapper from "../components/Draweranimationwrapper";

export let userName;
export let updateData;

export default function Todo({ onLayout, navigation, route }) {
  const [user, setUser] = useState("");
  const [greet, setGreet] = useState("");

  userName = user;
  updateData = update;

  async function update(name, setButtonPress, navigation) {
    if (name.trim().length >= 0) {
      setButtonPress(true);
    }

    if (name.trim().length > 0) {
      try {
        console.log(name);

        const value = await AsyncStorage.getItem("user");
        console.log(value);
        const item = { name: name.trim() };

        await AsyncStorage.setItem("user", JSON.stringify(item));

        userName = name;
        setUser(name);
        const toTodoScreen = () => navigation.navigate("Home");

        toTodoScreen();
      } catch (error) {
        console.error("error: " + error);
      }
    }
  }

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("user");
      if (value !== null) {
        // value previously stored
        const name = JSON.parse(value);
        console.log(value);
        setUser(name.name);
      }
    } catch (e) {
      // error reading value
    }
  };

  const greeting = () => {
    const hours = new Date().getHours();
    if (hours === 0 || hours < 12) {
      return setGreet("Good morning");
    } else if (hours === 1 || hours < 17) {
      return setGreet("Good afternoon");
    } else {
      return setGreet("Good evening");
    }
  };

  useEffect(() => {
    getData();
    greeting();
  }, []);

  const MyStatusBar = () => (
    <SafeAreaView
      style={{
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      <StatusBar translucent backgroundColor="transparent" />
    </SafeAreaView>
  );

  return (
    <Draweranimationwrapper>
      <View style={{ flex: 1, backgroundColor: "#161722" }} onLayout={onLayout}>
        <MyStatusBar />
        <TodoHead greet={greet} user={user} navigation={navigation} />
      </View>
    </Draweranimationwrapper>
  );
}
