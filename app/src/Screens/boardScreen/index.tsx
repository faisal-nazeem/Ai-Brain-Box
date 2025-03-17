import { Image, StyleSheet, Text, View } from 'react-native'
import RobotCard from './component/robotCard'


const index = () => {
  return (
  <View style={styles.container}>
      <RobotCard
      imageSource={require('../../../../assets/images/robot.png')}
      labelText="Unlock the Power Of  Future AI"
      Text='Chat with the smartest AI Future Experience power of AI with us'
      
    />
    
  </View>
  )
}

export default index

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
   
   
  }
})