import { icons } from "@/constants/icons";
import React from "react";
import { Image, StyleSheet, TextInput, View } from "react-native";

interface Props {
  placeholder: string;
  onPress?: () => void;
}

const SearchBox = ({ onPress, placeholder }: Props) => {
  return (
    <View className="flex-row items-center gap-2">
      <Image
        source={icons.search}
        className="size-5"
        resizeMode="contain"
        tintColor={"#ab8bff"}
      ></Image>
      <TextInput
        placeholder={placeholder}
        onFocus={onPress}
        value=""
        onChange={() => {}}
        placeholderTextColor={"#a8b5db"}
        className="flex-1 text-white"
      ></TextInput>
    </View>
  );
};

export default SearchBox;

const styles = StyleSheet.create({});
