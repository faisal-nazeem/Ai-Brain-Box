import { Image, StyleSheet, View } from 'react-native';
import React, { useEffect } from 'react';
import Label from './src/component/label';
import { useRouter } from 'expo-router';

const Index = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/src/Screens/boardScreen');
    }, 2000);
  })

  return (
    <View style={styles.container}>
      <View style={styles.contact}>
        <Image 
          source={require('../assets/images/Logo.png')} 
          style={styles.logo} 
        />
        <View style={styles.textContainer}>
          <Label text='BrainBox' fontSize={35} fontWeight="500" />
          <Label text='Version 10' fontSize={15} fontWeight="300" />
        </View>
      </View>
    </View>
  );
}

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center',
  },
  contact: {
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  textContainer: {
    marginTop: 20, // Small spacing instead of a large margin
  },
});
