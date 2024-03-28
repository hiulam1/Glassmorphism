import { useWindowDimensions } from "react-native";
import { Canvas, RoundedRect } from "@shopify/react-native-skia";
import {
  useImage,
  Image,
  Blur,
  Fill,
  Group,
  Paint,
  Shadow,
  BoxShadow,
  usePaintRef,
  rrect,
  DiffRect,
  rect,
  box,
} from "@shopify/react-native-skia";
import { useMemo } from "react";
export default function App() {
  const { width, height } = useWindowDimensions();
  const skwidth = 256;
  const skheight = 256;
  const x = width / 2 - skwidth / 2;
  const y = height / 2 - skheight / 2;
  const radius = 10;
  const color = "rgba(255, 255, 255, 0.3)";

  const image = useImage(require("./guille-pozzi-g3esK1uXCjM-unsplash.jpg"));
  const inner = rrect(rect(x, y, skwidth, skheight), 10, 10);
  const outer = rrect(rect(x - 1, y - 1, skwidth + 1, skheight + 1), 10, 10);
  return (
    <Canvas style={{ flex: 1 }}>
      <Image
        image={image}
        fit="cover"
        x={0}
        y={0}
        width={width}
        height={height}
      />
      <DiffRect inner={inner} outer={outer} color="white" />
      <Group clip={inner}>
        <Blur blur={2} />
        <Image
          image={image}
          fit="cover"
          x={0}
          y={0}
          width={width}
          height={height}
        />
      </Group>
      <Group>
        <RoundedRect
          x={x - 1}
          y={y - 1}
          width={skwidth + 2}
          height={skheight + 2}
          r={radius}
          color={color}
        >
          <Shadow dx={20} dy={20} blur={20} color="#293c45" />
          <Shadow dx={-20} dy={-20} blur={10} color="#939ca0" />
        </RoundedRect>
      </Group>
    </Canvas>
    // <Canvas style={{ width: 256, height: 256 }}>
    //   <Fill color="lightblue" />
    //   <RoundedRect
    //     x={32}
    //     y={32}
    //     width={192}
    //     height={192}
    //     r={32}
    //     color="lightblue"
    //   >
    //     <Shadow dx={12} dy={12} blur={25} color="#93b8c4" />
    //     <Shadow dx={-12} dy={-12} blur={25} color="#c7f8ff" />
    //   </RoundedRect>
    // </Canvas>
  );
}
