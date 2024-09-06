import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { useGlobalState } from "../hooks/GlobalStateContext";
import MenuButton from "../components/MenuButton";

export default function NotesScreen({ navigation }) {

  const { fontSize, theme } = useGlobalState();
  const { colors, header } = theme;

  return (
    <TouchableWithoutFeedback
      onPress={Keyboard.dismiss}
      style={[styles.container, { backgroundColor: colors.background }]}
    >
      <View style={[styles.inner, { backgroundColor: colors.background }]}>
        <View style={styles.menuButton}>
          <MenuButton />
        </View>
        <View style={styles.headerSection}>
          <Text
            style={{
              color: colors.text,
              margin: 15,
              fontSize: fontSize + header.h1,
              fontWeight: "bold",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Notes
          </Text>
        </View>
        <ScrollView style={styles.mainContent}>
          <Text style={{ color: colors.text, fontSize: fontSize }}>
            This is the Notes screen.
          </Text>
        </ScrollView>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
});