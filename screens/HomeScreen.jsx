import { View, Text, TouchableHighlight, FlatList } from 'react-native'
import useFetch from '../hooks/useFetch';
const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=5ff475ea07084b96bc8176a66872ce46'

const HomeScreen = ({ navigation }) => {
  const [data, error, isLoading] = useFetch(url)

  return isLoading ?
    (
      <View>
        <Text>Reading feed...</Text>
      </View>

    ) :
    error ? (
      null
    ) :
      (
        <View>

          <TouchableHighlight onPress={() => navigation.navigate("Config")}>
            <Text>config</Text>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => navigation.navigate("Profile")}>
            <Text>profile</Text>
          </TouchableHighlight>
        </View>
      )

}

export default HomeScreen