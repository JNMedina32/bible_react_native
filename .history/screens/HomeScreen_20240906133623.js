import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { useGlobalState } from "../hooks/GlobalStateContext";
import PillButton from "../components/PillButton";
import SearchBar from "../components/SearchBar";
import MenuButton from "../components/MenuButton";
import {useNotes}

export default function HomeScreen({ navigation }) {
  const { fontSize, theme } = useGlobalState();
  const { colors, header } = theme;

  const navigationHandler = (screen) => {
    navigation.navigate(screen);
  };

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
            Welcome to the Bible App
          </Text>
          <SearchBar placeholder="Search a verse, book, chapter, or keyword" />
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
          <PillButton text="Notes" onPress={() => navigationHandler("NotesScreen")} />
          <PillButton
            text="Settings"
            onPress={() => navigationHandler("Settings")}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  menuButton: {
    position: "absolute",
    left: 10,
    top: 10,
  },
  inner: {
    padding: 16,
    height: "100%",
    justifyContent: "space-around",
    alignItems: "center",
  },
  headerSection: {
    alignItems: "center",
    top: 10,
  },
  mainContent: {
    width: "100%",
    alignItems: "center",
  },
});