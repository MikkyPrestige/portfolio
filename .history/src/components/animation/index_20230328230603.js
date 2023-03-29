import React from "react";
import { Dimensions, Text, View } from "react-native";
import Carousel from "react-native-reanimated-carousel";

function Index() {
  const width = Dimensions.get('window').width;

  return (
    <View style={{ flex: 1, backgroundColor: "black" }}>
      <Carousel
        loop
        width = {width}
        height = {width / 2}
        autoPlay = {true}
        data={[...new Array(6).keys()]}
        scrollAnimationDuration={1000}
        onSnapToItem={(index) => console.log('current index:', index)}
        renderItem={({ index }) => {
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              borderWidth: 1,
              backgroundColor: "black",
            }}
          >
            <Text style={{ color: "white", textAlign: 'center', fontSize: 30 }}>{index}</Text>
          </View>
        }}
      />
    </View>
  )
}

export default Index;