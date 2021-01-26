import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
import {
  useFonts,
  Barlow_600SemiBold,
  Barlow_700Bold,
} from "@expo-google-fonts/barlow";

import Button from "./components/Button";
import AddTodo from "./components/popups/AddTodo";
import Status from "./components/Status";
import Timeslot from "./components/Timeslot";

import colors from "./config/colors";

export default function App() {
  let [fontsLoaded] = useFonts({
    Barlow_600SemiBold,
    Barlow_700Bold,
  });

  // if (!fontsLoaded) {
  //   return <AppLoading />;
  // }

  const [addTodo, setAddTodo] = useState(false);
  const addTodoHandler = () => {
    setAddTodo(!addTodo);
  };
  return (
    <SafeAreaView style={styles.safeContainer}>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <Status />
        <ScrollView style={styles.scrollView}>
          <Timeslot />
        </ScrollView>
        <View style={styles.addTodoContainer}>
          <Button action={addTodoHandler} text="Add Todo" />
        </View>
        <AddTodo addTodo={addTodo} addTodoHandler={addTodoHandler} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#fff",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 60,
    fontFamily: "Barlow_600SemiBold", //Not working for now
  },
  scrollView: {
    flex: 1,
    width: "100%",
  },
  addTodoContainer: {
    width: "100%",
    position: "absolute",
    bottom: 18,
    zIndex: 1,
  },
});
