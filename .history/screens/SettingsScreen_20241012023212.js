import { useState, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
  Pressable,
} from "react-native";
import PillButton from "../components/PillButton";
import ThemeToggleButton from "../components/ThemeToggleButton";
import MenuButton from "../components/MenuButton";
import DisplayText from "../components/DisplayText";
import {
  useGlobalState,
  useGlobalDispatch,
} from "../helpers/GlobalStateContext";
import { FontAwesome } from "@expo/vector-icons";
import { getVerses } from "../services/readQueries";
import { saveSettings } from "../services/writeQueries";
import { useSQLiteContext } from "expo-sqlite";
import ModalComponent from "../components/Modal";

export default function SettingsScreen() {
  const db = useSQLiteContext();
  const [settingsChanged, setSettingsChanged] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalType, setModalType] = useState("");
  const {
    font_size,
    theme,
    bible_translation,
    notifications,
    notification_time,
    notification_days,
    user_id,
  } = useGlobalState();
  const dispatch = useGlobalDispatch();
  const { colors, header } = theme;
  const [selectedState, setSelectedState] = useState({
    font_size: 16,
    bible_translation: "American Standard Version",
    notifications: false,
    notification_time: "12:00",
    notification_days: ["M", "T", "W", "Th", "F", "Sa", "Su"],
    user_id: 1,
  });
  const [bookText, setBookText] = useState({});
  const testText = {
    book: "Matthew",
    chapter: 6,
    fromVerse: 9,
    toVerse: 12,
  };

  const handleFontSizeChange = (size) => {
    let selectedFontSize = selectedState.font_size;
    if (size === "increase") {
      if (selectedFontSize >= 30) return 30;
      setSelectedState({ ...selectedState, font_size: selectedFontSize + 1 });
    } else {
      if (selectedFontSize <= 10) return 10;
      setSelectedState({ ...selectedState, font_size: selectedFontSize - 1 });
    }
  };

  const handleModal = (setting) => {
    setModalVisible(false);
    setModalType(setting);
    setModalVisible(true);
  };

  const handleSave = () => {
    saveSettings(db, selectedState, dispatch);
    setSettingsChanged(false);
  };

  const handleCancel = () => {
    setSelectedState({
      font_size: font_size,
      bible_translation: bible_translation,
      notifications: notifications,
      notification_time: notification_time,
      notification_days: notification_days,
      user_id: user_id,
    });
    setSettingsChanged(false);
  };

  useEffect(() => {
    const getTestVerse = async () => getVerses(
      db,
      testText.book,
      testText.chapter,
      selectedState.bible_translation,
      testText.fromVerse,
      testText.toVerse
    );
    getTestVerse().then((result) => setBookText(result));
  }, [selectedState.bible_translation]);

  useEffect(() => {
    if (
      selectedState.font_size !== font_size ||
      selectedState.bible_translation !== bible_translation ||
      selectedState.notifications !== notifications
    ) {
      setSettingsChanged(true);
    } else {
      setSettingsChanged(false);
    }
  }, [selectedState]);

  useEffect(() => {
    setSelectedState({
      bible_translation: bible_translation,
      font_size: font_size,
      notifications: notifications,
      notification_days: notification_days,
      notification_time: notification_time,
      user_id: user_id,
    });
  }, []);

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <ModalComponent
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        selectedState={selectedState}
        setSelectedState={setSelectedState}
        modalType={modalType}
      />
      <View style={styles.menuButton}>
        <MenuButton />
      </View>
      <Text
        style={[
          styles.header,
          { color: colors.text, fontSize: 16 + header.h1 },
        ]}
      >
        Settings
      </Text>
      <ThemeToggleButton />
      <View style={styles.settingsContainer}>
        <Text
          style={[
            styles.settingsText,
            { color: colors.text, fontSize: 16 + header.h4 },
          ]}
        >
          Reading Font Size:
        </Text>
        <View style={{ flexDirection: "row" }}>
          <View style={{ marginRight: 20 }}>
            <FontAwesome
              name="minus-circle"
              size={30}
              color={colors.text}
              onPress={() => handleFontSizeChange("decrease")}
            />
          </View>
          <View style={{ marginLeft: 20 }}>
            <FontAwesome
              name="plus-circle"
              size={30}
              color={colors.text}
              onPress={() => handleFontSizeChange("increase")}
            />
          </View>
        </View>
      </View>
      <View style={styles.settingsContainer}>
        <Text
          style={[
            styles.settingsText,
            { color: colors.text, fontSize: 16 + header.h4 },
          ]}
        >
          Translation:
        </Text>
        <Pressable onPress={() => handleModal("translation")}>
          <Text
            style={[
              styles.settingsText,
              { color: colors.text, fontSize: 16 + header.h4 },
            ]}
          >
            {selectedState.bible_translation}
          </Text>
        </Pressable>
      </View>
      <View style={styles.settingsContainer}>
        <Text
          style={[
            styles.settingsText,
            { color: colors.text, fontSize: 16 + header.h4 },
          ]}
        >
          Notifications:
        </Text>
        <TouchableWithoutFeedback onPress={() => handleModal("notifications")}>
          <Text
            style={[
              styles.settingsText,
              { color: colors.text, fontSize: 16 + header.h4 },
            ]}
          >
            {selectedState.notifications ? "On" : "Off"}
          </Text>
        </TouchableWithoutFeedback>
      </View>
      
      {settingsChanged && (
        <View style={styles.saveContainer}>
          <View>
            <PillButton text="Save" onPress={() => handleSave()} />
          </View>
          <View>
            <PillButton text="Cancel" onPress={() => handleCancel()} />
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  menuButton: {
    position: "absolute",
    left: 10,
    top: 10,
  },
  header: {
    fontWeight: "bold",
    margin: 20,
    textAlign: "center",
  },
  chapter: {
    fontWeight: "bold",
    margin: 10,
    textAlign: "center",
  },
  mainContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  saveContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  settingsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginBottom: 20,
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },
  settingsText: {
    paddingLeft: 10,
    paddingRight: 10,
  },
});
