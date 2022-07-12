import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from "./src/screens/ComponentsScreen";
import ListScreen from "./src/screens/ListScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ImageScreen from "./src/screens/ImageScreen";
import Counter from "./src/screens/Counter";
import ColorScreen from "./src/screens/Colorscreen";
import SquareScreen from "./src/screens/SquareScreen";
import TextInputScreen from "./src/screens/TextInputScreen";

export type RootStackParamList = {
  Home: undefined;
  List: undefined;
  Components: undefined;
  ImageScreen: undefined;
  Counter: undefined;
  ColorScreen: undefined;
  SquareScreen: undefined;
  TextInputScreen: undefined;
};
const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="List" component={ListScreen} />
        <Stack.Screen name="Components" component={ComponentsScreen} />
        <Stack.Screen name="ImageScreen" component={ImageScreen} />
        <Stack.Screen name="Counter" component={Counter} />
        <Stack.Screen name="ColorScreen" component={ColorScreen} />
        <Stack.Screen name="SquareScreen" component={SquareScreen} />
        <Stack.Screen name="TextInputScreen" component={TextInputScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
