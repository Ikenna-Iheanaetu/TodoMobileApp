import React, { useState } from "react";
import { useEffect } from "react";
import { View, Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Todo({ onLayout }) {
  const [user, setUser] = useState("");

  useEffect(() => {
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
    getData();
  }, []);

  return (
    <View
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      onLayout={onLayout}
    >
      <Text>{user} Todo Page</Text>
    </View>
  );
}
