import FloatContainer from "@/components/layout/containers/FloatContainer";
import TaskItem from "@/components/tasks/TaskItem";
import { GLOBAL_COLORS } from "@/constants/Colors";
import { Icon } from "@rneui/themed";
import { FlatList, ScrollView, TouchableOpacity } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import tasks from "@/mock/tasks-data";
import habits from "@/mock/habits-data";
import HabitItem from "@/components/habits/HabitItem";

export default function App() {
  const weekDays = ["22", "23", "24", "25", "26", "27", "28"];

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
          <Text
            style={{ textAlign: "center", marginTop: 10, color: "#A0A0A0" }}
          >
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

        <ScrollView style={{ maxHeight: 300, marginTop: 15 }}>
          <View style={styles.habitsList}>
            {habits.map((item) => (
              <HabitItem item={item} key={item.id} />
            ))}

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
        </ScrollView>
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
    borderColor: GLOBAL_COLORS.GRAY,
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
    borderColor: GLOBAL_COLORS.GRAY,
    justifyContent: "center",
    alignItems: "center",
  },
});
