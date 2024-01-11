import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

export default function About({navigation}) {
  return (
    <View style={{flex:1, alignItems: 'center', justifyContent:'center',}}>
          <Text>About Screen </Text>
          <Button title="Go to About" onPress={() => navigation.navigate("Home",)} />
          <Button title="Go back" onPress={()=> navigation.goBack()} />
    </View>
  )
}

const styles = StyleSheet.create({})