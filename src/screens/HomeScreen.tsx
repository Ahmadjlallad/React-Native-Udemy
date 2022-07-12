import { NavigationProp } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";
import { RootStackParamList } from "../../App";
interface HomeProps
  extends NativeStackScreenProps<RootStackParamList, "Home"> {}

const HomeScreen = ({ navigation }: HomeProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hi there!</Text>
      <View style={styles.innerContainer}>
        <TouchableOpacity
          style={styles.innerContainer}
          onPress={() => navigation.navigate("Components")}
        >
          <Text style={styles.textItem}>Go to Components Demo</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.innerContainer}
          onPress={() => navigation.navigate("List")}
        >
          <Text style={styles.textItem}>Go to List Demo</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.innerContainer}
          onPress={() => navigation.navigate("ImageScreen")}
        >
          <Text style={styles.textItem}>Go to Image Screen List</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.innerContainer}
          onPress={() => navigation.navigate("Counter")}
        >
          <Text style={styles.textItem}>Go to Counter Screen</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.innerContainer}
          onPress={() => navigation.navigate("ColorScreen")}
        >
          <Text style={styles.textItem}>Go to Color Screen</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.innerContainer}
          onPress={() => navigation.navigate("SquareScreen")}
        >
          <Text style={styles.textItem}>Go to Square Screen</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.innerContainer}
          onPress={() => navigation.navigate("TextInputScreen")}
        >
          <Text style={styles.textItem}>Go to Input Screen</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
  container: {
    paddingEnd: 10,
    paddingStart: 10,
    paddingTop: 10,
  },
  innerContainer: {
    paddingTop: 10,
    elevation: 5,
    padding: 10,
  },
  items: {
    paddingVertical: 10,
    color: "red",
  },
  textItem: {
    backgroundColor: "#03a0ff",
    padding: 10,
    textAlign: "center",
    borderRadius: 5,
    color: "#fff",
  },
});

export default HomeScreen;
