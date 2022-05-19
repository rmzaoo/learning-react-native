import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  ScrollView,
} from "react-native";
import React, { useEffect, useRef } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  useFonts,
  Montserrat_100Thin,
  Montserrat_400Regular,
  Montserrat_600SemiBold,
} from "@expo-google-fonts/montserrat";
import Button from "../components/Button";

const WelcomePage = ({ navigation }) => {
  let [fontsLoaded] = useFonts({
    Montserrat_100Thin,
    Montserrat_400Regular,
    Montserrat_600SemiBold,
  });

  if (!fontsLoaded) {
    return <></>;
  } else {
    return (
      <View style={styles.container}>
        <Image
          source={require("../assets/images/wallpaperWelcome.png")}
          style={styles.image}
        />
        <View style={styles.containerStart}>
          <Text style={styles.title}> Welcome to SubwayTime </Text>
          <Button
            text={`START`}
            onPress={() => navigation.navigate("Homepage")}
          />
        </View>
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
    justifyContent: "flex-end",
    height: "100%",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  containerStart: {
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)",
    width: "100%",
    height: "20%",
    padding: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  title: {
    fontFamily: "Montserrat_400Regular",
    letterSpacing: 3,
    fontSize: 18,
  },
});

export default WelcomePage;
