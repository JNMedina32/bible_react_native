import {
  View,
  Text,
  TextInput,
  Dimensions,
  PixelRatio,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from "react-native";
import { useTheme } from "../hooks/ThemeContext";
import PillButton from "../components/PillButton";
import { EvilIcons } from "@expo/vector-icons";
import * as SQLite from "expo-sqlite";


export default function HomeScreen({ navigation }) {
  const { colors, isDarkTheme } = useTheme();

  const navigationHandler = (screen) => {
    navigation.navigate(screen);
  }



  return (
    <KeyboardAvoidingView
      style={[styles.container, { backgroundColor: colors.background }]}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      enabled={false}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} > 
        <View style={[styles.inner, { backgroundColor: colors.background }]}>
          <View style={styles.headerSection}>
            <Text
              style={{
                color: colors.text,
                margin: 15,
                fontSize: 20,
                fontWeight: "bold",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              Welcome to the Bible App

            </Text>
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
          <View style={styles.mainContent}>
            <PillButton text="The Holy Bible" onPress={() => navigationHandler("Bible")} />
            <PillButton
              text="Continue Reading: "
              onPress={() => alert("Button pressed!")}
            />
            <PillButton
              text="Bookmarks"
              onPress={() => navigationHandler("Bookmarks")}
            />
            <PillButton text="Notes" onPress={() => alert("Button pressed!")} />
            <PillButton
              text="Settings"
              onPress={() => alert("Button pressed!")}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const db = await SQLite.openDatabaseAsync('bible.db');

const allRows = await db.getAllAsync('SELECT DISTINCT book_name FROM bible WHERE id <= 39');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    padding: 16,
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
  },
  SearchBar: {
    flexDirection: "row",
    alignItems: "center",
  },
  headerSection: {
    // position: "absolute",
    alignItems: "center",
    top: 10,
  },
  mainContent: {
    width: "100%",
    alignItems: "center",
  },
});
