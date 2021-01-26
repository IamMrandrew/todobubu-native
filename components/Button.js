import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";

import colors from "../config/colors";

export default function Button({ action, text }) {
  return (
    <TouchableHighlight
      underlayColor={colors.primaryMuted}
      style={styles.button}
      onPress={action}
    >
      <Text style={styles.button__text}>{text}</Text>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.primary,
    padding: 17,
    borderRadius: 18,
  },
  button__text: {
    color: colors.white,
    fontSize: 18,
    fontWeight: "600",
  },
});
