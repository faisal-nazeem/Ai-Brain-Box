import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function robotCard() {
  return (
    <View style={styles.container}>
    <Image source={require('../../../../../assets/images/robot.png')} />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        
    }
})