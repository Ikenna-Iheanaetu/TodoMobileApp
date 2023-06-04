import { View, Text, ImageBackground, Pressable, StyleSheet } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export default function TodoHead({ greet, user, navigation }) {
  return (
    <ImageBackground
          source={require("../../assets/img/bg-mobile-dark.jpg")}
          style={{ flex: 0.28 }}
        >
          <View style={styles.flex}>
            <Pressable onPress={() => navigation.toggleDrawer()} style={{marginRight: 20}}>
              <MaterialCommunityIcons name="text" size={33} color="#E4E5F1" />
            </Pressable>
            <Text
              style={{
                color: "#E4E5F1",
                fontSize: 20,
                fontFamily: "Josefin700",
              }}
            >
              {greet}, {user}
            </Text>
          </View>
        </ImageBackground>
  )
}

const styles = StyleSheet.create({
  flex: {
    marginTop: 20,
    flexDirection: "row",
    // justifyContent: "center",
    gap: 2,
    marginLeft: 15,
    marginRight: 19,
    alignItems: "center",
  },
});