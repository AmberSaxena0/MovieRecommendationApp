import { icons } from "@/constants/icons";
import React from "react";
import { Image, TextInput, View } from "react-native";
interface SearchBarProps {
  onPress?: () => void;
  value: string;
  onChangeText?: (txt: string) => void;
  autoFocus?: boolean;
}

const SearchBar = ({
  onPress,
  value,
  onChangeText,
  autoFocus = false,
}: SearchBarProps) => {
  return (
    <View className="flex-row items-center bg-dark-200 rounded-full px-5 py-4">
      <Image
        source={icons.search}
        className="size-5"
        resizeMode="contain"
        tintColor={"#ab8bff"}
      />
      <TextInput
        autoFocus={autoFocus}
        onPress={onPress}
        placeholder="Search"
        value={value}
        onChangeText={onChangeText}
        placeholderTextColor={"#a8b5db"}
        className="flex-1 ml-2 text-white"
      />
    </View>
  );
};

export default SearchBar;
