import { StyleSheet, Text, View , Button} from 'react-native'
import React from 'react'

export default function Home({ navigation, route }) {
    // const {id,name} = route.params
  return (
    <View style={{flex:1, alignItems: 'center', justifyContent:'center',}}>
         
          <Button title='About Screen' onPress={() => navigation.navigate('About')} style={styles.button}/>
          <Button title='Settings Screen' onPress={() => navigation.navigate('Settings')}/>
          
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    
  }
})