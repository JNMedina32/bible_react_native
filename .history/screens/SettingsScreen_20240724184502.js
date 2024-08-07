import { useState } from "react";
import {View, Text, ScrollView, StyleSheet, TouchableOpacity} from "react-native";
import { useTheme } from "../hooks/ThemeContext";
import { useSQLiteContext } from "expo-sqlite";
import PillButton from "../components/PillButton";

export default function BookmarksScreen({ navigation }) {

  return (
    <View sty>
      <Text>Bookmarks Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});