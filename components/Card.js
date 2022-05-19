import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Card = ({ info }) => {
  const styles = StyleSheet.create({
    card: {
      height: "160px",
      width: "260px",
      boxShadow: "0px 0px 10px #000",
      backgroundColor: CardColor(info.typeCard),
      display: "flex",
      marginHorizontal: "10px",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "15px",
    },
  });

  return (
    <View style={styles.card}>
      <Text>{info.nameCard}</Text>
      <Text>{info.numberCard}</Text>
      <Text>{info.typeCard}</Text>
    </View>
  );
};

const CardColor = (typeCard) => {
    switch (typeCard) {
        case "VISA":
            return "#00BFFF";
        case "MasterCard":
            return "#FFD700";
        case "American Express":
            return "#FF0000";
        default:
            return "#000";
    }
};


export default Card;
