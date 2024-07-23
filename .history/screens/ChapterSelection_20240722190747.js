

export default function ChapterSelection({route, navigation }) {
  const { book } = route.params;
  const { colors } = useTheme();
  const db = useSQLiteContext();
  const [chapters, setChapters] = useState([]);

  return(
    <View >
      <Text>Chapter Selection</Text>
    </View>
  )
};

