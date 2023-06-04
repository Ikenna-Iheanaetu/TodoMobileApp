import { View, Text, SafeAreaView, StatusBar, StyleSheet } from "react-native";
import React from "react";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { userName } from "../screens/Todo";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Entypo from "@expo/vector-icons/Entypo";

export default function Customdrawer(props) {
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
    <View style={{ flex: 1 }}>
      <MyStatusBar />
      <View style={{ alignItems: "center", marginTop: 20 }}>
        <Text style={{ ...styles.header, fontSize: 23 }}>TO-DO</Text>
      </View>
      <View style={{ marginLeft: 20, marginRight: 20 }}>
        <Text
          style={{
            fontFamily: "Josefin400",
            color: "hsl(236, 33%, 92%)",
            fontSize: 16,
          }}
        >
          {userName} what would you like to do
        </Text>
      </View>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <View>
        <View style={{ alignItems: "center", marginTop: 20 }}>
          <Text style={{ fontSize: 18, ...styles.header }}>Theme</Text>
        </View>
        <View style={{ alignItems: "center", marginBottom: 100 }}>
          <View
            style={{
              marginTop: 10,
              marginBottom: 10,
              ...styles.themeBodyStyles,
            }}
          >
            <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
              <MaterialCommunityIcons name="white-balance-sunny" />
              <Text>Light</Text>
            </View>
          </View>
          <View style={styles.themeBodyStyles}>
            <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
              <Entypo name="moon" />

              <Text>Dark</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    fontFamily: "Josefin700",
    color: "hsl(236, 33%, 92%)",
  },
  themeBodyStyles: {
    color: "#fff",
    backgroundColor: "#fd0000",
    paddingVertical: 12,
    paddingHorizontal: 92,
    borderRadius: 4,
  },
});
