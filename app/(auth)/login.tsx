import { View, Text, StyleSheet } from "react-native";
import { Button, Input } from "@rneui/themed";
import React from "react";
import { useRouter } from "expo-router";

export default function login() {
  const router = useRouter();

  const [email, setEmail] = React.useState("user@email.com");
  const [password, setPassword] = React.useState("123456");

  return (
    <View>
      <Text style={styles.title}>Login</Text>

      <Input
        label="Email"
        inputStyle={styles.input}
        labelStyle={styles.inputLabel}
        inputContainerStyle={styles.inputContainer}
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <Input
        label="Senha"
        inputStyle={styles.input}
        labelStyle={styles.inputLabel}
        inputContainerStyle={styles.inputContainer}
        value={password}
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
      />

      <View style={styles.buttonsContainer}>
        <Button
          buttonStyle={styles.button}
          titleStyle={styles.buttonText}
          title="Entrar"
          onPress={() => router.push("/")}
        />
        <Button
          buttonStyle={styles.buttonOutline}
          titleStyle={styles.buttonOutlineText}
          title="Cadastre-se"
          type="outline"
          onPress={() => router.push("/(auth)/register")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    color: "black",
    textAlign: "center",
    marginBottom: 20,
  },
  inputContainer: {
    borderBottomWidth: 0,
    paddingHorizontal: 0,
  },
  input: {
    marginBottom: 10,
    borderColor: "#D9D9D9",
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
    fontSize: 16,
  },
  inputLabel: {
    fontWeight: "normal",
    color: "black",
  },
  buttonsContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: 110,
    backgroundColor: "#9d81d6",
    borderRadius: 5,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 16,
  },
  buttonOutline: {
    borderColor: "#9d81d6",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonOutlineText: {
    color: "#9d81d6",
    fontSize: 16,
  },
});
