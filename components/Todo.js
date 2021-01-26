import React from "react";
import { StyleSheet, Text, View } from "react-native";

import colors from "../config/colors";

export default function Todo() {
  return (
    <View style={styles.todo}>
      <View style={styles.wrapper}>
        <Text style={styles.todo__title}>Play chess</Text>
        <Text style={styles.todo__desc}>4.5 season</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  todo: {
    width: "100%",
    paddingVertical: 18,
    paddingHorizontal: 20,
    backgroundColor: colors.background,
    borderRadius: 18,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  wrapper: {
    minWidth: "75%",
  },
  todo__title: {
    color: colors.primaryShaded,
    fontWeight: "600",
    fontSize: 18,
    marginBottom: 5,
  },
  todo__desc: {
    color: colors.primaryMuted,
    fontWeight: "600",
    fontSize: 15,
  },
});
