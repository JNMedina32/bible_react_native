import {
  Modal,
  Pressable,
  Text,
  View,
  StyleSheet,
  TextInput,
  FlatList,
} from "react-native";
import { useGlobalState } from "../helpers/GlobalStateContext";
import { useSQLiteContext } from "expo-sqlite";
import { useState, useEffect } from "react";
import { getBibleTranslations } from "../services/readQueries";

const ModalComponent = ({
  modalVisible,
  setModalVisible,
  selectedState,
  setSelectedState,
  modalType,
}) => {
  const { theme, notification_time, notification_days } =
    useGlobalState();
  const { colors } = theme;
  // const db = useSQLiteContext();
  const [time, setTime] = useState("12:00");
  const [selectedDays, setSelectedDays] = useState([]);
  const [bibleTranslations, setBibleTranslations] = useState([]);

  useEffect(() => {
    if (modalType === "translation") {
      getBibleTranslations(db, setBibleTranslations);
    }
  }, [modalType]);


  const toggleDay = (day) => {
    setSelectedDays((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
    );
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
    >
      <View
        style={styles.centeredView}
      >
        <View style={styles.modalView}>
          {modalType === "translation" && (
            <>
              <Text style={styles.modalText}>Select Bible Translation</Text>
              <FlatList
                data={bibleTranslations}
                keyExtractor={(item) => item.version_name}
                renderItem={({ item }) => (
                  <Pressable
                    style={[
                      styles.button,
                      selectedState.bible_translation === item.version_name &&
                        styles.selectedButton,
                    ]}
                    onPress={() =>
                      setSelectedState({
                        ...selectedState,
                        bible_translation: item.version_name,
                      })
                    }
                  >
                    <Text style={styles.textStyle}>{item.version_name}</Text>
                  </Pressable>
                )}
              />
            </>
          )}

          {modalType === "notifications" && (
            <>
              <Text style={styles.modalText}>Select Notification Days</Text>
              <View style={styles.dayContainer}>
                {['M', 'Tu', 'W', 'Th', 'F', 'Sa', 'Su'].map((day) => (
                  <Pressable
                    key={day}
                    style={[
                      styles.dayButton,
                      selectedDays.includes(day) && styles.selectedDayButton,
                    ]}
                    onPress={() => toggleDay(day)}
                  >
                    <Text style={styles.textStyle}>{day}</Text>
                  </Pressable>
                ))}
              </View>
              <Text style={styles.modalText}>Select Notification Time</Text>
              <TextInput
                style={styles.timeInput}
                value={time}
                onChangeText={setTime}
                placeholder="12:00"
                keyboardType="numeric"
              />
            </>
          )}

          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => setModalVisible(!modalVisible)}
          >
            <Text style={styles.textStyle}>Select</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    
  },
  modalView: {
    margin: 20,
    top: -90,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 4,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    height: "50%",
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    margin: 10,
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
  },
  selectedButton: {
    backgroundColor: "green",
  },
  textStyle: {
    color: "white",
    textAlign: "center",
  },
  dayContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  dayButton: {
    padding: 10,
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
  },
  selectedDayButton: {
    backgroundColor: "#2196F3",
  },
  timeInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 10,
    textAlign: "center",
    marginBottom: 20,
  },
});

export default ModalComponent;
