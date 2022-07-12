import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import ImageDetail from "../component/ImageDetail";

const ImageScreen = () => {
  const items = [
    {
      title: "Forest",
      source: require("../../assets/forest.jpg"),
      score: Math.ceil(Math.random() * 10),
    },
    {
      title: "Beach",
      source: require("../../assets/beach.jpg"),
      score: Math.ceil(Math.random() * 10),
    },
    {
      title: "Mountain",
      source: require("../../assets/mountain.jpg"),
      score: Math.ceil(Math.random() * 10),
    },
  ];
  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        renderItem={({ item }) => <ImageDetail key={item.title} {...item} />}
      ></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
});
export default ImageScreen;
