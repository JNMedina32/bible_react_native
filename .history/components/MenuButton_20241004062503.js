import { TouchableOpacity, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import sheep from "../assets/images/sheep.png";
import { useGlobalState } from "../helpers/GlobalStateContext";

export default function MenuButton() {
  const navigation = useNavigation();
  const { theme } = useGlobalState();
  const { colors } = theme;

  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: colors.background }]}
      onPress={() => navigation.navigate("Home")}
    >
      <Image source={sheep} style={styles.logo} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 50,
    height: 50,
    resizeMode: "contain",
  },
});
