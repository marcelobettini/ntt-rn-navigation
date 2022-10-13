import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'

const SearchBar = () => {
  const [num, setNum] = useState('')
  return (
    <View >
      <Text>search bar a mano</Text>
      <TextInput
        style={{ backgroundColor: 'cyan', width: 250 }}
        placeholder='mete algo, woman'
        placeholderTextColor='tomato'
        keyboardType='numeric'
        onChangeText={text => setNum(prev => prev = text)}
        value={num}
      />

      <Text>estado del input: {num}</Text>
    </View>
  )
}

export default SearchBar