import React from "react";
import { StyleSheet, Text, View } from "react-native";

import colors from "../config/colors";

export default function Status() {
  return (
    <View style={styles.status}>
      <Text style={styles.status__title}>Today</Text>
      <Text style={styles.status__tasks}>0 tasks remaining</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  status: {
    // flex: 1,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 30,
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
