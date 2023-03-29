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
  },
  {
    id: 3,
    title: "Third Item",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vitae ultricies lacinia, nunc nisl aliquet nisl, eget aliquam nunc nisl eu lectus. Sed euismod, nisl vitae ultricies lacinia, nunc nisl aliquet nisl, eget aliquam nunc nisl eu lectus.",
  },
  {
    id: 4,
    title: "Fourth Item",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vitae ultricies lacinia, nunc nisl aliquet nisl, eget aliquam nunc nisl eu lectus. Sed euismod, nisl vitae ultricies lacinia, nunc nisl aliquet nisl, eget aliquam nunc nisl eu lectus.",
  },
  {
    id: 5,
    title: "Fifth Item",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vitae ultricies lacinia, nunc nisl aliquet nisl, eget aliquam nunc nisl eu lectus. Sed euismod, nisl vitae ultricies lacinia, nunc nisl aliquet nisl, eget aliquam nunc nisl eu lectus.",
  },
];

const CarouselComponent = () => {
  const index = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: withTiming(index.value * -width) }],
    };
  });

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <Carousel
          data={data}
          renderItem={({ item }) => (
            <View style={{ width, justifyContent: "center", alignItems: "center" }}>
              <Text style={{ fontSize: 32 }}>{item.title}</Text>
              <Text style={{ fontSize: 16, marginVertical: 16, textAlign: "center" }}>{item.description}</Text>
            </View>
          )}
          keyExtractor={(item) => item.id.toString()}
          onIndexChange={(i) => (index.value = i)}
          animatedStyle={animatedStyle}
        />
      </View>
    </View>
  );
}

export default CarouselComponent;
