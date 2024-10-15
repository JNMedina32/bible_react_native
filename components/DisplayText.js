import { ScrollView, Text, StyleSheet } from "react-native";
import { useGlobalState } from "../helpers/GlobalStateContext";
import PillButton from "./PillButton";

export default function DisplayText({ bookText }) {
  const { theme, font_size, bible_translation } = useGlobalState();
  const { colors, header } = theme;

    return (
    <ScrollView style={{ flex: 1, top: 50 }}>
      <Text
        style={[
          styles.header,
          {
            color: colors.text,
            fontSize: font_size,
          },
        ]}
      >
        {bible_translation}
      </Text>
      <Text
        style={[
          styles.header,
          {
            color: colors.text,
            fontSize: font_size + header.h1,
          },
        ]}
      >
        {bookText.book_name} |{" "}
        <Text
          style={[
            styles.chapter,
            {
              color: colors.text,
              fontSize: font_size + header.h2,
            },
          ]}
        >
          {bookText.chapter}
        </Text>
      </Text>
      <Text
        style={[
          styles.mainContent,
          { color: colors.text, fontSize: font_size },
        ]}
      >
        {Object.entries(bookText)
          .filter(([key, _]) => !isNaN(key))
          .map(([key, value]) => (
            <Text
              key={key}
              style={[
                styles.mainContent,
                { color: colors.text, fontSize: font_size },
              ]}
            >
              <Text style={{ color: "green", fontWeight: "bold" }}>{key}.</Text>{" "}
              {value}
              {` `}
            </Text>
          ))}
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 10,
  },
  chapter: {
    fontWeight: "bold",
  },
  mainContent: {
    padding: 10,
  },
});
