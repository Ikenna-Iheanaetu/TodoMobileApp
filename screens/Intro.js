import { View, Text, SafeAreaView, StatusBar, StyleSheet, TextInput } from "react-native";
import React from "react";

export default function Intro({ onLayout }) {
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
    <View style={{flex: 1, backgroundColor: '#161722' }} onLayout={onLayout}>
        <MyStatusBar />
        <View style={styles.todo}>
            <Text style={styles.todoText}>TO-DO</Text>
        </View>
        <View style={{marginTop: "25%", alignItems: "center"}}>
            <Text style={styles.text}>Kindly enter your name to continue</Text>
            <TextInput style={styles.textInput} placeholder="Enter your name here" />
        </View>
    </View>
  );
}


const styles = StyleSheet.create({
    todo: {
        marginTop: "5%",
        marginLeft: "4%"
    },
    todoText: {
        fontFamily: "Josefin700",
        color: "#fff",
        fontSize: 40
    },
    text: {
        fontFamily: "Josefin400",
        color: "#CACDE8",
        marginBottom: 10
    },
    textInput: {
        width: "85%",
        padding: 10,
        borderRadius: 7,
        backgroundColor: "#777A92",
        color: "#eee",
        fontSize: 16
    }
})