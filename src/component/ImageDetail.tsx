import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageSourcePropType,
} from "react-native";

interface Props {
  title: string;
  source: ImageSourcePropType;
  score: number;
}

const ImageDetail = ({ title, source, score }: Props) => {
  return (
    <View>
      <Image source={source} />
      <Text>{title}</Text>
      <Text>Image score - {score}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});
export default ImageDetail;
