import { GLOBAL_COLORS } from "@/constants/Colors";
import { Icon } from "@rneui/themed";
import { Stack, useRouter } from "expo-router";
import React from "react";
import { Image, TouchableOpacity } from "react-native";

export default function RootLayout() {
  const router = useRouter();

  return (
    <Stack
      screenOptions={{
        headerRight: () => (
          <TouchableOpacity onPress={() => router.push("/login")}>
            <Icon
              color="#fff"
              name="exit-outline"
              type="ionicon"
              size={30}
            />
          </TouchableOpacity>
        ),
        headerTitle: () => (
          <Image
            source={require("../../assets/images/logo.png")}
            style={{ height: 45, width: 45, marginLeft: 5 }}
          />
        ),
        headerShadowVisible: false,
        headerStyle: {
          backgroundColor: GLOBAL_COLORS.PRIMARY,
        },
        headerTintColor: GLOBAL_COLORS.PRIMARY,
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    />
  );
}
