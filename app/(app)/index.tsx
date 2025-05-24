import FloatContainer from "@/components/layout/containers/FloatContainer";
import TaskItem from "@/components/tasks/TaskItem";
import { GLOBAL_COLORS } from "@/constants/Colors";
import { CheckBox, Icon } from "@rneui/themed";
import { FlatList, TouchableOpacity } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import tasks from "@/mock/tasks-data";
import { useState } from "react";

export default function App() {
  const weekDays = ["22", "23", "24", "25", "26", "27", "28"];
  const [selectedIndex, setIndex] = useState(false);

  return (
    <FloatContainer>
      <View style={styles.progressContainer}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text style={styles.title}>Progresso da semana</Text>

          <TouchableOpacity style={{ borderRadius: 100 }}>
            <Icon
              name="circle-with-plus"
              type="entypo"
              color={GLOBAL_COLORS.PRIMARY}
              size={30}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.weekDaysContainer}>
          {weekDays.map((item) => (
            <View key={item} style={styles.dayNumbers}>
              <Text>{item}</Text>
            </View>
          ))}
        </View>

        {tasks.length === 0 ? (
          <Text style={{ textAlign: "center", marginTop: 10, color: "#A0A0A0" }}>
            Você não tem tarefas para hoje!
          </Text>
        ) : (
          <FlatList
            style={{ maxHeight: 160 }}
            data={tasks}
            renderItem={({ item }) => {
              return <TaskItem item={item} />;
            }}
          />
        )}
      </View>

      <View style={styles.habitsContainer}>
        <Text style={styles.title}>Seus hábitos</Text>

        <View style={styles.habitsList}>
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
            <Text style={{ fontSize: 18 }}>Correr</Text>
            <Text style={{ fontSize: 40, fontWeight: "bold" }}>20</Text>
            <Text>Execuções</Text>
          </View>
          <View style={styles.habitBox}>
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: 106,
              }}
            >
              <Icon
                name="circle-with-plus"
                type="entypo"
                color={GLOBAL_COLORS.PRIMARY}
                size={30}
              />
            </View>
          </View>
        </View>
      </View>
    </FloatContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  progressContainer: {
    flexDirection: "column",
    rowGap: 12,
    backgroundColor: "white",
    width: "100%",
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  habitsContainer: {
    backgroundColor: "white",
    width: "100%",
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  habitsList: {
    marginTop: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10,
    flexWrap: "wrap",
  },
  habitBox: {
    width: "48%",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#D9D9D9",
    borderRadius: 8,
    paddingVertical: 10,
    
  },
  weekDaysContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  dayNumbers: {
    flexDirection: "column",
    padding: 5,
    paddingHorizontal: 7,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#D9D9D9",
    justifyContent: "center",
    alignItems: "center",
  },
});
