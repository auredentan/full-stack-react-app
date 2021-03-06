import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { test } from "@gg/common";

export default function App() {
  const testText = test();
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app! {testText}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
