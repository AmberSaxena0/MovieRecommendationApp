import { icons } from "@/constants/icons";
import { Link } from "expo-router";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

const MovieCard = ({
  id,
  poster_path,
  title,
  vote_average,
  release_date,
}: Movie) => {
  return (
    <Link href={`movies/${id}`} asChild>
      <TouchableOpacity className="w-[30%] mb-5">
        <Image
          source={{
            uri: poster_path
              ? `${process.env.EXPO_PUBLIC_MOVIE_IMAGE_URL}${poster_path}`
              : process.env.EXPO_PUBLIC_MOVIE_IMAGE_PLACEHOLDER_URL,
          }}
          className="w-full h-52 rounded-lg"
          resizeMode="cover"
        />
        <Text numberOfLines={1} className="text-white text-sm font-bold mt-2">
          {title}
        </Text>
        <View className="flex-row  items-center gap-x-1">
          <Image source={icons.star} className="size-4" />
          <Text className="text-white text-xs font-bold uppercase">
            {Math.round(vote_average / 2)}
          </Text>
        </View>
        <View className="flex-row justify-between items-center mt-1">
          <Text className="text-xs text-light-300">
            {release_date?.split("-")[0]}
          </Text>
          <Text className="text-xs text-light-300 font-medium ">Movie</Text>
        </View>
      </TouchableOpacity>
    </Link>
  );
};

export default MovieCard;
