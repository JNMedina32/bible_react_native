import { StyleSheet, View, Text } from "react-native";

export default function ChapterSelection({route, navigation }) {
  const { book } = route.params;
  const { colors } = useTheme();
  const db = useSQLiteContext();
  const [chapters, setChapters] = useState([]);

  async function getChapters() {
    

  return(
    <View >
      <Text>Chapter Selection</Text>
    </View>
  )
};

const styles = StyleSheet.create({

});