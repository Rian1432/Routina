import { GLOBAL_COLORS } from "@/constants/Colors";
import { Slot } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default function AuthLayout() {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.header}>
        <Image source={require('../../assets/images/logo.png')} />
      </View>

      <View style={styles.content}>
        <Slot />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: GLOBAL_COLORS.PRIMARY,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    height: 200,
  },
  content: {
    paddingTop: 30,
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});
