import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";

import colors from "./config/colors";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.status__title}>Today</Text>
        <Text style={styles.status__tasks}>0 tasks remaining</Text>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  wrapper: {
    // flex: 1,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  status__title: {
    color: colors.monoPrimary,
    fontWeight: "700",
    fontSize: 42,
  },
  status__tasks: {
    color: colors.monoTinted,
    fontWeight: "600",
    fontSize: 18,
  },
});
