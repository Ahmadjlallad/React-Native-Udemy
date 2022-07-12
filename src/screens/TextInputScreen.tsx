import { TextInput, View } from "react-native";

const TextInputScreen = () => {
  return (
    <View>
      <TextInput
        editable
        style={{
          width: 111,
          height: 111,
          borderColor: "black",
          borderWidth: 1,
        }}
      />
    </View>
  );
};
export default TextInputScreen;
