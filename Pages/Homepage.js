import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';

const Homepage = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Escolhe as tua opçoes:</Text>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000',
        height: '100%',
        color: '#1f1f1f',
    },
    text: {
        color: '#fff',
    }
});

export default Homepage