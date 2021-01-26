import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Todo from "./Todo";

import colors from "../config/colors";

export default function Timeslot() {
  return (
    <View style={styles.timeslot}>
      <View style={styles.timeslot__time}>
        <Text style={styles.timeslot__start}>1245</Text>
        <Text style={styles.timeslot__end}>1315</Text>
      </View>
      <View>
        <Todo />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  timeslot: {
    width: "100%",
  },
  timeslot__time: {
    flexDirection: "row",
    marginBottom: 5,
  },
  timeslot__start: {
    fontSize: 18,
    fontWeight: "600",
    color: colors.monoSecondary,
    minWidth: 45,
    textAlign: "center",
    marginRight: 4,
  },
  timeslot__end: {
    fontSize: 18,
    fontWeight: "600",
    color: colors.monoTinted,
    minWidth: 45,
    textAlign: "center",
  },
});
