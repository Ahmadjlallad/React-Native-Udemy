import { useState } from "react";
import { StyleSheet, View, Pressable, Text, FlatList } from "react-native";
const generateRand255 = () =>
  `rgb(${Math.ceil(Math.random() * 255)}, ${Math.ceil(
    Math.random() * 255
  )}, ${Math.ceil(Math.random() * 255)})`;
const ColorScreen = () => {
  const [color, setColor] = useState<ReturnType<typeof generateRand255>[]>([
    generateRand255(),
  ]);
  return (
    <View style={styles.wrapper}>
      <Pressable
        onPress={() => {
          setColor([...color, generateRand255()]);
        }}
        style={{
          ...styles.button,
          backgroundColor: color[color.length - 1] ?? "#000",
        }}
      >
        <Text style={styles.text}>Add a color</Text>
      </Pressable>
      <Pressable
        onPress={() => {
          setColor([]);
        }}
        style={{
          ...styles.button,
          backgroundColor: "#000",
        }}
      >
        <Text style={styles.text}>Reset Colors</Text>
      </Pressable>
      <FlatList
        keyExtractor={(item) => item}
        numColumns={3}
        data={color}
        renderItem={({ item }) => {
          return (
            <View
              style={{
                ...styles.genColorContainer,
                backgroundColor: item,
              }}
            ></View>
          );
        }}
      ></FlatList>
    </View>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    padding: 20,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "black",
    marginVertical: 10,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
  genColorContainer: {
    width: 100,
    height: 100,
    margin: 10,
    alignSelf: "center",
  },
});
export default ColorScreen;
