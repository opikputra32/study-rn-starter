import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const TextScreen = () => {
  const [password, setPassword] = useState("");

  return (
    <View>
      <Text>Enter password: </Text>
      <TextInput
        style={styles.textInputStyle}
        autoCapitalize="none"
        autoCorrect={false}
        value={password}
        onChangeText={(newValue) => setPassword(newValue)}
      />
      {password.length < 4 ? (
        <Text>Password must be longer than 4 character</Text>
      ) : null}
      {/* <Text>my password is {password}</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  textInputStyle: {
    margin: 20,
    borderColor: "black",
    borderWidth: 1,
  },
});

export default TextScreen;
