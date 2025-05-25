import { View, StyleSheet } from "react-native";
import React from "react";
import { GLOBAL_COLORS } from "@/constants/Colors";

type propsType = {
  children?: React.ReactNode;
};

export default function FloatContainer({ children }: propsType) {
  return (
    <View>
      <View style={styles.purpleArea}></View>
      <View style={styles.rootContainer}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  purpleArea: {
    backgroundColor: GLOBAL_COLORS.PRIMARY,
    height: 120,
    width: "100%",
  },
  rootContainer: {
    position: "absolute",
    top: 10,
    left: 0,
    paddingHorizontal: 20,
    width: "100%",
  },
});
