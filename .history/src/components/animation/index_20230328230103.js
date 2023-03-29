import React from "react";
import { Dimensions, Text, View } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { useSharedValue, useAnimatedStyle, withTiming } from "react-native-reanimated";

const { width } = Dimensions.get("window");


function Index() {
  const width = Dimensions.get('window').width;
  // const height = Dimensions.get('window').height;

  return (
    <View style={{ flex: 1, backgroundColor: "black" }}>
      <Carousel
        loop
        width = {width}
        height = {width / 2}
        autoPlay = {true}
        // autoPlayInterval = {5000}
        data={[...new Array(6).keys()]}
        scrollAnimationDuration={1000}
        onSnapToItem={(index) => console.log('current index:', index)}
  )
}
