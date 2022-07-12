import { Dispatch, SetStateAction } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
interface SquareDetailsProps {
  setColor: Dispatch<SetStateAction<number>>;
  title: "Green" | "Red" | "Blue";
  color: number;
  COLOR_MOD: number;
}
const SquareScreenDetails = (props: SquareDetailsProps) => {
  function getColor() {
    if (props.title === "Red") {
      return [props.color, 0, 0];
    } else if (props.title === "Green") {
      return [0, props.color, 0];
    }
    return [0, 0, props.color];
  }
  return (
    <View style={styles.btnsContainer}>
      <Text style={{ ...styles.title, color: `rgb(${getColor()})` }}>
        {props.title}
      </Text>
      <TouchableOpacity
        style={{ ...styles.btn, backgroundColor: `rgb(${getColor()})` }}
        onPressIn={() => {
          if (props.color < 255) props.setColor(props.color + props.COLOR_MOD);
        }}
      >
        <Text style={styles.btnText}>Increase {props.title}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ ...styles.btn, backgroundColor: `#000` }}
        onPressIn={() => {
          if (props.color > 0) props.setColor(props.color - props.COLOR_MOD);
        }}
      >
        <Text style={styles.btnText}>Decrease {props.title}</Text>
      </TouchableOpacity>
    </View>
  );
};
export default SquareScreenDetails;
const styles = StyleSheet.create({
  btnsContainer: {
    padding: 10,
  },
  btn: {
    padding: 15,
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 5,
    marginVertical: 5,
  },
  title: {
    fontSize: 23,
  },
  btnText: {
    fontSize: 17,
    color: "#fff",
  },
});
