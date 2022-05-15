import { StyleSheet, Text, View, Image, Button, Pressable } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import {
  useFonts,
  Montserrat_100Thin,
  Montserrat_400Regular,
  Montserrat_600SemiBold,
} from "@expo-google-fonts/montserrat";

const WelcomePage = ({ navigation }) => {
  let [fontsLoaded] = useFonts({
    Montserrat_100Thin,
    Montserrat_400Regular,
    Montserrat_600SemiBold,
  });

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  } else {
    return (
      <View style={styles.container}>
        <Image
          source={require("../assets/images/logoWelcome.png")}
          style={styles.logoWelcome}
        />
        <SafeAreaView style={styles.textContainer}>
          <Text style={styles.title}>Farto de perder o metro?</Text>
          <Text style={styles.subtitle}>
            Tens aqui a melhor solução para ti. Aqui damos te os horarios de
            partida da tua estação.
          </Text>
          <Pressable style={styles.startButton} onPress={() => navigation.navigate("Homepage")}>
            <Text style={styles.startButton.text}>Começar</Text>
          </Pressable>
        </SafeAreaView>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: "#212121",
    color: "#fff",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  logoWelcome: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  textContainer: {
    position: "absolute",
    height: "100%",
    width: "100%",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  title: {
    fontFamily: "Montserrat_600SemiBold",
    color: "#fff",
    fontSize: 45,
    marginHorizontal: "2%",
    top: "5%",
    letterSpacing: 1,
  },
  subtitle: {
    fontFamily: "Montserrat_400Regular",
    color: "#fff",
    fontSize: 20,
    marginHorizontal: "2%",
    marginTop: "2%",
    top: "5%",
    letterSpacing: 2,
  },
  startButton: {
    marginTop: "50%",
    backgroundColor: "rgba(255,255,255,0.6)",
    borderRadius: 10,
    padding: 10,
    marginHorizontal: "30%",
    text: {
      fontFamily: "Montserrat_600SemiBold",
      color: "#000",
      fontSize: 20,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
    },
  },
});

export default WelcomePage;
