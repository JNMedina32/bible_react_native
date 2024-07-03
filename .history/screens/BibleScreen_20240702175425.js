import { useState, useEffect } from "react";
import PillButton from "../components/PillButton";
import { useTheme } from "../hooks/ThemeContext";
import { View, Text, TextInput, FlatList } from "react-native";
import * as SQLite from "expo-sqlite";

export default function BibleScreen({ navigation }) {
const { colors } = useTheme();



return (
  <View>

  </View>
 );
};

const styles = StyleSheet.create({
container: {
flex: 1,
alignItems: "center",
justifyContent: "center",
},
