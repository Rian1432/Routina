import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import { GLOBAL_COLORS } from "@/constants/Colors";
import { CheckBox, Icon } from "@rneui/themed";

type propsType = {
  item: string;
};

export default function TaskItem({item}: propsType) {
  const [check1, setCheck1] = useState(false);

  return (
    <View key={item} style={styles.taskContainer}>
      <CheckBox
        iconType="material-community"
        checkedIcon="checkbox-marked"
        uncheckedIcon="checkbox-blank-outline"
        containerStyle={{ padding: 0, margin: 0 }}
        checkedColor={GLOBAL_COLORS.PRIMARY}
        size={20}
        checked={check1}
        onPress={() => setCheck1(!check1)}
      />
      <Icon
        name="check"
        type="entypo"
        color={GLOBAL_COLORS.PRIMARY}
        size={20}
        style={{ position: "absolute", right: 10 }}
      />
      <Text numberOfLines={1}>{item}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  taskContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 5,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: "#D9D9D9",
    borderRadius: 8,
    marginVertical: 5,
  },
})
