import { icons } from "@/constants/icons";
import React from "react";
import { Image, Text, View } from "react-native";

const Saved = () => {
  return (
    <View className="flex-1 bg-primary justify-center items-center gap-5">
      <Image source={icons.save} className="size-10" />
      <Text className="text-white">Save</Text>
    </View>
  );
};

export default Saved;
