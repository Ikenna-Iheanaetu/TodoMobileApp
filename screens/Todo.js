import React, { useState } from "react";
import { useEffect } from "react";
import { View, Text,SafeAreaView, StatusBar, ImageBackground, Platform } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Todo({ onLayout }) {
  const [user, setUser] = useState("");
  const [greet, setGreet] = useState("")

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
    const hours = new Date().getHours()
    if(hours === 0 || hours < 12) {
      return setGreet("Good morning")
    } else if (hours === 1 || hours < 17) {
      return setGreet("Good afternoon")
    } else{
      return setGreet("Good evening")
    }
  }

  useEffect(() => {
    getData();
    greeting()
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
    <View style={{ flex: 1, backgroundColor: "#161722" }} onLayout={onLayout}>
      <MyStatusBar />
      <ImageBackground source={require("../assets/img/bg-mobile-dark.jpg")} style={{flex : .28}}>
        <View>
          <Text style={{color: "#fff", fontSize: 23}}>{greet}, {user}</Text>
        </View>
      </ImageBackground>
    </View>
  );
}
