import React from "react";
import { Dimensions, Text, View } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { useSharedValue, useAnimatedStyle, withTiming } from "react-native-reanimated";

const { width } = Dimensions.get("window");

const data = [
  {
    id: 1,
    title: "First Item",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vitae ultricies lacinia, nunc nisl aliquet nisl, eget aliquam nunc nisl eu lectus. Sed euismod, nisl vitae ultricies lacinia, nunc nisl aliquet nisl, eget aliquam nunc nisl eu lectus.",
  },
  {
    id: 2,
    title: "Second Item",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vitae ultricies lacinia, nunc nisl aliquet nisl, eget aliquam nunc nisl eu lectus. Sed euismod, nisl vitae ultricies lacinia, nunc nisl aliquet nisl, eget aliquam nunc nisl eu lectus.",
