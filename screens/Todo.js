import { View, Text } from 'react-native'
import React from 'react'

export default function Todo({ onLayout }) {
  return (
    <View style={{flex: 1, justifyContent: "center", alignItems: "center"}} onLayout={onLayout}>
      <Text>Todo Page</Text>
    </View>
  )
}