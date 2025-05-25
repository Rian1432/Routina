import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import { CheckBox } from "@rneui/themed";
import { GLOBAL_COLORS } from "@/constants/Colors";
import { Habit } from "@/mock/habits-data";

type propsType = {
  item: Habit;
}

export default function HabitItem({item}: propsType) {
  const [selectedIndex, setIndex] = useState(false);

  return (
    <View style={styles.habitBox}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-end",
          width: "100%",
        }}
      >
        <CheckBox
          checked={selectedIndex}
          onPress={() => setIndex(!selectedIndex)}
          checkedIcon="dot-circle-o"
          uncheckedIcon="circle-o"
          checkedColor={GLOBAL_COLORS.PRIMARY}
          containerStyle={{ padding: 0, margin: 0 }}
        />
      </View>
      <Text style={{ fontSize: 18 }}>{item.name}</Text>
      <Text style={{ fontSize: 40, fontWeight: "bold" }}>{item.count}</Text>
      <Text>Execuções</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    habitBox: {
    width: "48%",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: GLOBAL_COLORS.GRAY,
    borderRadius: 8,
    paddingVertical: 10,
  },
});