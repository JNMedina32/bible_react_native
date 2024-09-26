import { TouchableOpacity, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import sheep from "../assets/images/sheep.png";

export default function MenuButton() {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={[styles.button, {backgroundColor: "#fdf6e3"}]}
      onPress={() => navigation.navigate("Home")}
    >
      <Image source={sheep} style={styles.logo} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 10,
  },
  logo: {
    width: 50,
    height: 50,
    resizeMode: "contain",
    zIndex: ,
    backgroundColor: "white",
    borderColor: "red",
    borderWidth: 1,
  },
});
