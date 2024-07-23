import { StyleSheet, View, Text } from "react-native";
import { useTheme } from "../hooks/ThemeContext";


export default function ChapterSelection({route, navigation }) {
  const { book } = route.params;
  const { colors } = useTheme();
  const db = useSQLiteContext();
  const [chapters, setChapters] = useState([]);

  async function getChapters() {
    const result = await db.getAllAsync(
      `SELECT DISTINCT chapter FROM bible WHERE book_name = "${book}" ORDER BY id;`
    );
    setChapters(result);
  };


  return(
    <View >
      <Text>Chapter Selection</Text>
    </View>
  )
};

const styles = StyleSheet.create({

});