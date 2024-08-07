import {
  View,
  Text,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from "react-native";
import { useTheme } from "../hooks/ThemeContext";
import PillButton from "../components/PillButton";
import SearchBar from "../components/SearchBar";
import { FontAwesome } from "@expo/vector-icons";

export default function HomeScreen({ navigation }) {
  const { colors, isDarkTheme } = useTheme();

  const navigationHandler = (screen) => {
    navigation.navigate(screen);
  };

  return (
    <KeyboardAvoidingView
      style={[styles.container, { backgroundColor: colors.background }]}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
            
          </View>
          <View style={styles.mainContent}>
            <PillButton
              text="American Standard Version Bible"
              onPress={() => navigationHandler("BibleBookSelection")}
            />
            <PillButton
              text="Continue Reading: "
              onPress={() => alert("Button pressed!")}
            />
            <PillButton
              text="Bookmarks"
              onPress={() => navigationHandler("Bookmarks")}
            />
            <PillButton 
              text="Notes" 
              onPress={() => alert("Button pressed!")} />
            <PillButton
              text="Settings"
              onPress={() => navigationHandler("Settings")}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

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
