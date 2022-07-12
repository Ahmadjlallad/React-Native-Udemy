import { useReducer, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import SquareScreenDetails from "../component/squareScreenDetails";
const COLOR_MOD = 50;
const SquareScreen = () => {
  const [red, setRed] = useState(0);
  const [blue, setBlue] = useState(0);
  const [green, setGreen] = useState(0);
  return (
    <View>
      <Text style={{ fontSize: 32 }}>Square Screen</Text>
      <SquareScreenDetails
        color={red}
        setColor={setRed}
        title={"Red"}
        COLOR_MOD={COLOR_MOD}
      />
      <SquareScreenDetails
        color={blue}
        setColor={setBlue}
        title={"Blue"}
        COLOR_MOD={COLOR_MOD}
      />
      <SquareScreenDetails
        color={green}
        setColor={setGreen}
        title={"Green"}
        COLOR_MOD={COLOR_MOD}
      />
      <View
        style={{
          ...styles.square,
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
        }}
      ></View>
    </View>
  );
};
export default SquareScreen;
const styles = StyleSheet.create({
  square: {
    width: 200,
    height: 200,
    alignSelf: "center",
  },
});
