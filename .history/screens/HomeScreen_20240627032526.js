import { View, Text, StyleSheet, TextInput } from "react-native";
import { useTheme } from "../hooks/ThemeContext";
import PillButton from "../components/PillButton";
import { EvilIcons } from "@expo/vector-icons";
import { SearchBar } from "react-native-screens";

export default function HomeScreen({ navigation }) {
  const { colors } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.headerSection} >
        <Text style={{ color: colors.text, margin: 15, font }}>Welcome to the Bible App</Text>
        <View style={styles.SearchBar}>
          <TextInput
            style={{
              height: 40,
              width: "80%",
              borderColor: colors.secondary,
              borderWidth: 1,
              color: colors.text,
              placeholderTextColor: colors.text,
            }}
            placeholder="Search for a verse"
          />
          <EvilIcons name="search" size={24} color="black" />
        </View>
      </View>
      <View>
        <PillButton
          text="Bible: Continue Reading "
          onPress={() => alert("Button pressed!")}
        />
        <PillButton text="Bookmarks" onPress={() => alert("Button pressed!")} />
        <PillButton text="Notes" onPress={() => alert("Button pressed!")} />
        <PillButton text="Settings" onPress={() => alert("Button pressed!")} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  SearchBar: {
    flexDirection: "row",
    alignItems: "center",
  },
  headerSection: {
    position: "absolute",
    alignItems: "center",
    top: 10,
  }
});
