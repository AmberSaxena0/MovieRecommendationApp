import { icons } from "@/constants/icons";
import React from "react";
import { Image, Text, View } from "react-native";

const Profile = () => {
  return (
    <View className="flex-1 bg-primary justify-center items-center gap-5">
      <Image source={icons.person} className="size-10" />
      <Text className="text-white">Profile</Text>
    </View>
  );
};

export default Profile;
