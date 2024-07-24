import { View, Text, StyleSheet, TextInput } from "react-native";
import { useTheme } from "../hooks/ThemeContext";
import PillButton from "../components/PillButton";
import { EvilIcons } from '@expo/vector-icons';

export default function HomeScreen({ navigation }) {
  const { colors } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={{ color: colors.text }}>Welcome to the Bible App</Text>
      <View>
      
      </View>
      <PillButton text="Bible: Continue Reading " onPress={() => alert("Button pressed!")} />
      <PillButton text="Bookmarks" onPress={() => alert("Button pressed!")} />
      <PillButton text="Notes" onPress={() => alert("Button pressed!")} />
      <PillButton text="Settings" onPress={() => alert("Button pressed!")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
});