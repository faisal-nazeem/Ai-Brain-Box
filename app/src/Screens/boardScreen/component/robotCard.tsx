import { StyleSheet, Text, View, Image, ImageSourcePropType } from 'react-native'
import React from 'react'
import Label from '@/app/src/component/label';

interface RobotCardProps {
  imageSource: ImageSourcePropType;
  labelText: string;
  onClickStyle?: object;
  Text: string;
}

const RobotCard: React.FC<RobotCardProps> = ({ imageSource, labelText, onClickStyle, Text }) => {
  return (
    <View style={styles.container}>
      <View>
        <Image source={imageSource} style={styles.image} />
      </View>
      <View style={[styles.click, onClickStyle]} />
      <View style={styles.textContainer}>
        <Label text={labelText} fontSize={33} fontWeight={"bold"} />
        <Label text={Text} fontSize={16} fontWeight={'200'} />
      </View>
    </View>
  )
}

export default RobotCard

const styles = StyleSheet.create({
  container: {
 
    justifyContent: 'center',
    alignItems: 'center',
  },
  click: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: 'black',
  },
  image: {
    resizeMode: 'contain',
  },
  textContainer: {
    alignItems: 'center', 
  },
  labelText: {
    textAlign: 'center',
  },
});