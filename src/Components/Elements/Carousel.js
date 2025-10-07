import { ScreenWidth } from "@rneui/base";
import { CaretLeft, CaretRight } from "phosphor-react-native";
import React, { useEffect, useState } from "react";
import {
  View,
  Image,
  Button,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";

const { width } = Dimensions.get("window");

export default function Carousel({ images }) {
  const [index, setIndex] = useState(0);
  const translateX = useSharedValue(0);

  useEffect(() => {
    setIndex(0);
    translateX.value = withTiming(0, { duration: 0 });
  }, [images]);

  const updatePosition = (newIndex) => {
    setIndex(newIndex);
    translateX.value = withTiming(-newIndex * width, { duration: 500 });
  };

  const nextImage = () => {
    const newIndex = (index + 1) % images.length;
    updatePosition(newIndex);
  };

  const prevImage = () => {
    const newIndex = (index - 1 + images.length) % images.length;
    updatePosition(newIndex);
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX.value }],
    };
  });

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.imageContainer,
          { width: width * images.length },
          animatedStyle,
        ]}
      >
        {images.map((img, i) => (
          <Image
            key={i}
            source={{
              uri: img,
            }}
            style={styles.image}
            resizeMode="contain"
          />
        ))}
      </Animated.View>

      {images.length > 1 && (
        <>
          <TouchableOpacity style={styles.leftButton} onPress={prevImage}>
            <CaretLeft size={32} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.rightButton} onPress={nextImage}>
            <CaretRight size={32} />
          </TouchableOpacity>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    width: ScreenWidth * 0.95,
  },
  imageContainer: {
    flexDirection: "row",
  },
  image: {
    width: width,
    height: 200,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
  leftButton: {
    position: "absolute",
    left: 10,
    alignSelf: "center",
    opacity: 0.6,
  },
  rightButton: {
    position: "absolute",
    right: 10,
    alignSelf: "center",
    opacity: 0.6,
  },
});
