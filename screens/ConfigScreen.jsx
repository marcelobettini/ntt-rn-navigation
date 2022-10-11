import { View, Text, TouchableHighlight } from 'react-native'
import React from 'react'

const ConfigScreen = ({ navigation }) => {
  return (
    <View>
      <Text>ConfigScreen</Text>
      <TouchableHighlight onPress={() => navigation.navigate("Home")}>
        <Text>Home</Text>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => navigation.navigate("Profile", { name: "Tancredo" })}>
        <Text>profile</Text>
      </TouchableHighlight>
    </View>
  )
}

export default ConfigScreen