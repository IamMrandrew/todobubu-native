import React, { useState } from "react";
import { Modal, StyleSheet, Text, TextInput, View } from "react-native";

import colors from "../../config/colors";
import Button from "../Button";

export default function AddTodo({ addTodoHandler, addTodo }) {
  return (
    <View style={styles.modalContainer}>
      <Modal animationType="slide" transparent={true} visible={addTodo}>
        <View style={styles.modal}>
          <View style={styles.fieldWrapper}>
            <TextInput
              style={styles.modal__textInput}
              placeholder="Sleep all day? Fail to wake ..."
              multiline={true}
            ></TextInput>
          </View>
          <View style={[styles.fieldWrapper, { flexDirection: "row" }]}>
            <View style={styles.modal__field}>
              <Text style={styles.modal__label}>When to start?</Text>
              <TextInput
                style={styles.modal__timeInput}
                placeholder="1800"
              ></TextInput>
            </View>
            <View style={styles.modal__field}>
              <Text style={styles.modal__label}>When to end?</Text>
              <TextInput
                style={styles.modal__timeInput}
                placeholder="2000"
              ></TextInput>
            </View>
          </View>
          <View style={styles.fieldWrapper}>
            <Text style={styles.modal__label}>Descriptions</Text>
            <TextInput
              style={[styles.modal__textInput, { height: 150 }]}
              placeholder="Apple, Banana, Carrot ..."
              multiline={true}
            ></TextInput>
          </View>
          <Button action={addTodoHandler} text="Cancel" />
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    width: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    position: "absolute",
    zIndex: 10,
    bottom: 0,
    left: 0,
    width: "100%",
    paddingVertical: 35,
    paddingHorizontal: 20,
    // height: "100%",
    backgroundColor: colors.white,
  },
  fieldWrapper: {
    width: "100%",
    marginBottom: 25,
  },
  modal__field: {
    flexBasis: "50%",
  },
  modal__label: {
    color: colors.monoSecnodary,
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 6,
  },
  modal__textInput: {
    fontSize: 18,
    fontWeight: "600",
    backgroundColor: colors.background,
    borderRadius: 20,
    padding: 20,
    paddingTop: 20,
    width: "100%",
    height: 80,
  },
  modal__timeInput: {
    maxWidth: 80,
    fontSize: 18,
    fontWeight: "600",
    backgroundColor: colors.background,
    borderRadius: 10,
    paddingVertical: 6,
    paddingHorizontal: 15,
    width: "100%",
  },
});
