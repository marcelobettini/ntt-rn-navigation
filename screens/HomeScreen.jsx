import { View, Text, FlatList, Image, TouchableNativeFeedback } from 'react-native'
import useFetch from '../hooks/useFetch';
import NewsItem from '../component/NewsItem';

import { styles } from "../styles/styles";
const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=5ff475ea07084b96bc8176a66872ce46'

const HomeScreen = ({ navigation }) => {
  const [data, error, isLoading] = useFetch(url)

  return isLoading ?
    (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Reading feed...</Text>
      </View>
    ) :
    error ? (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>{error}</Text>


      </View>
    ) :
      (
        <View style={[styles.pad, styles.container]}>
          <FlatList
            data={data.articles}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={
              <Text style={[styles.heading, styles.mb3]}>Breaking News</Text>

            }
            keyExtractor={item => item.publishedAt} //no es necesario ser explícito en este caso...
            renderItem={({ item }) => <NewsItem key={item.publishedAt} item={item} />}
          />
          <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-around' }}>
            <TouchableNativeFeedback onPress={() => navigation.navigate("Profile", { user: 'Count Duckula' })}>
              <Image
                style={styles.tabIcon}
                source={require('../assets/profile.png')}
              />
            </TouchableNativeFeedback>
            <TouchableNativeFeedback onPress={() => navigation.navigate("Config")}>

              <Image
                style={styles.tabIcon}
                source={require('../assets/config.png')}
              />
            </TouchableNativeFeedback>
          </View>


        </View>



      )

}

export default HomeScreen