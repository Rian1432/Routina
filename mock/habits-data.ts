export type Habit = {
  id: number;
  name: string;
  count: number;
}

const habits: Habit[] = [
  {
    id: 1,
    name: "Correr",
    count: 10,
  },
  {
    id: 2,
    name: "Ler",
    count: 20,
  },
  // {
  //   id: 3,
  //   name: "Ler",
  //   count: 20,
  // },
  // {
  //   id: 4,
  //   name: "Ler",
  //   count: 20,
  // }
];

export default habits;
