import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from "react-native";
import { useTheme } from "../hooks/ThemeContext";
import PillButton from "../components/PillButton";
import { EvilIcons } from "@expo/vector-icons";

export default function HomeScreen({ navigation }) {
  const { colors } = useTheme();

  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'} >
      <TouchableWithoutFeedback>

      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
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
  },
  mainContent: {
    width: "100%",
    alignItems: "center",
  },
});
