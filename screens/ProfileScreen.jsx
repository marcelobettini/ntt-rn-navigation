import { View, Text, TouchableHighlight } from 'react-native'
import SearchBar from '../component/SearchBar'

const ProfileScreen = ({ navigation, route }) => {


  return (
    <View>
      <SearchBar />
      <Text>ProfileScreen for user: {route.params.name} </Text>
      <TouchableHighlight onPress={() => navigation.navigate("Home")}>
        <Text>Home</Text>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => navigation.navigate("Config")}>
        <Text>Config</Text>
      </TouchableHighlight>
    </View>
  )
}

export default ProfileScreen