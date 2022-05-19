import { View, Text, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import Card from "../components/Card";

const Homepage = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Homepage</Text>
      <ScrollView
        style={styles.cards}
        horizontal={true}
        decelerationRate={0}
        snapToInterval={260}
        snapToAlignment={"center"}
      >
        <Card
          info={{
            nameCard: "Rafael Martins",
            numberCard: "2323 1221 1221 1221",
            typeCard: "VISA",
          }}
        />
        <Card
          info={{
            nameCard: "Rafael Martins",
            numberCard: "1232 5433 4323 34343",
            typeCard: "MasterCard",
          }}
        />
        <Card
          info={{
            nameCard: "Rafael Martins",
            numberCard: "2324 7657 23423 4234",
            typeCard: "American Express",
          }}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#202020",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  cards: {
    position: "absolute",
    width: "100%",
    paddingHorizontal: "10px",
    paddingVertical: "20px",
  },
});

export default Homepage;
