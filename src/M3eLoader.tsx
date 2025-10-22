import Animated, {
   Easing,
   useAnimatedStyle,
   useSharedValue,
   withRepeat,
   withTiming,
} from "react-native-reanimated";
import React, { useEffect, useState } from "react";
import { StyleProp, View, ViewStyle } from "react-native";
import Svg, { Polygon } from "react-native-svg";

import { SHAPES } from "./shapes";

export interface M3eLoaderProps {
   /** Loader size (outer circle diameter if contained) */
   size?: number;
   /** Primary fill color of the shape */
   color?: string;
   /** Duration (ms) for a full rotation */
   duration?: number;
   /** Interval (ms) between shape morphing */
   shapeInterval?: number;
   /** Background color for `variant="contained"` */
   backgroundColor?: string;
   /** Variant of the loader: 'contained' | 'uncontained' */
   variant?: "contained" | "uncontained";
   /** Custom styles for the container */
   style?: StyleProp<ViewStyle>;
}

const shapeNames = Object.keys(SHAPES);

export const M3eLoader: React.FC<M3eLoaderProps> = ({
   size = 60,
   color = "#6750A4",
   duration = 5000,
   shapeInterval = 700,
   backgroundColor = "#BBDEFB",
   variant = "uncontained",
   style,
}) => {
   const rotation = useSharedValue(0);
   const [shapeIndex, setShapeIndex] = useState(0);

   // Infinite rotation
   useEffect(() => {
      rotation.value = withRepeat(
         withTiming(360, { duration, easing: Easing.linear }),
         -1
      );
   }, [duration]);

   // Shape morphing
   useEffect(() => {
      const interval = setInterval(() => {
         setShapeIndex((prev: number) => (prev + 1) % shapeNames.length);
      }, shapeInterval);
      return () => clearInterval(interval);
   }, [shapeInterval]);

   const animatedStyle = useAnimatedStyle(() => ({
      transform: [{ rotate: `${rotation.value}deg` }],
   }));

   const currentShape = SHAPES[shapeNames[shapeIndex]];

   // Determine inner shape size to make both variants visually same
   const innerSize = variant === "contained" ? size * 0.85 : size;

   return (
      <View
         style={[
            variant === "contained"
               ? {
                  width: size,
                  height: size,
                  backgroundColor,
                  borderRadius: size / 2,
                  alignItems: "center",
                  justifyContent: "center",
               }
               : {},
            style,
         ]}
      >
         <Animated.View
            style={[
               { width: innerSize, height: innerSize },
               animatedStyle,
            ]}
         >
            <Svg width="100%" height="100%" viewBox="0 0 100 100">
               <Polygon points={currentShape} fill={color} />
            </Svg>
         </Animated.View>
      </View>
   );
};

export default M3eLoader;
