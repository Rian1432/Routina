import { View, Text, StyleSheet } from "react-native";
import { Button, Input } from "@rneui/themed";
import React from "react";
import { useRouter } from "expo-router";
import { GLOBAL_COLORS } from "@/constants/Colors";

export default function Login() {
  const router = useRouter();

  const [email, setEmail] = React.useState("user@email.com");
  const [password, setPassword] = React.useState("123456");

  return (
    <View style={{flex: 1, alignItems: "center", justifyContent: "flex-start"}}>
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
    width: 270,
    borderBottomWidth: 0,
    paddingHorizontal: 0,
  },
  input: {
    width: 270,
    marginBottom: 10,
    borderColor: GLOBAL_COLORS.GRAY,
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
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: 110,
    backgroundColor: GLOBAL_COLORS.PRIMARY,
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
    borderColor: GLOBAL_COLORS.PRIMARY,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonOutlineText: {
    color: GLOBAL_COLORS.PRIMARY,
    fontSize: 16,
  },
});
