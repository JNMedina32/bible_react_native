import { Modal, Pressable, Text, View, StyleSheet } from "react-native";
import { useGlobalState } from "../helpers/GlobalStateContext";
import PillButton from "./PillButton";

const ModalComponent = ({ modalVisible, setModalVisible }) => {
  const { theme } = useGlobalState();
  const { colors } = theme;

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Hello World!</Text>
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => setModalVisible(!modalVisible)}
          >
            <Text style={styles.textStyle}>Hide Modal</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  

export default ModalComponent;