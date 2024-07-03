import { useState } from "react";
import { View, Text, StyleSheet, FlatList, TextInput, Alert } from "react-native";

import { useTheme } from "../hooks/ThemeContext";

import PillButton from "../components/PillButton";

export default function BookmarksScreen() {
  