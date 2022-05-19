import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";

const Button = ({ text, onPress }) => {
  return (
    <Pressable onPress={onPress} style={styles.button}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#212121",
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
    shadowColor: "#000",
  },
  text:{
      color: "white"
  }
});

export default Button;
