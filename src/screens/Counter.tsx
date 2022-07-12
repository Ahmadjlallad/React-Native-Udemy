import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  return (
    <View style={wrapper}>
      <Button
        title="Increase"
        onPress={() => {
          setCounter((prev) => prev + 1);
        }}
      ></Button>
      <Button
        title="Decrease"
        onPress={() => {
          setCounter((prev) => {
            if (prev > 0) {
              return prev - 1;
            }
            return prev;
          });
        }}
      ></Button>
      <Text style={text}>Current Count: {counter}</Text>
    </View>
  );
};
export default Counter;

const { text, wrapper } = StyleSheet.create({
  text: {
    padding: 10,
    fontSize: 32,
  },
  wrapper: {
    justifyContent: "space-between",
    height: 100,
  },
});
