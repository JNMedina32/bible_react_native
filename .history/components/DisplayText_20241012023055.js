import { ScrollView, Text, StyleSheet } from "react-native";

export default function DisplayText({ bookText }) {
  return (
    <ScrollView style={{ flex: 1 }}>
      <Text
        style={[
          styles.header,
          {
            color: colors.text,
            fontSize: selectedState.font_size + header.h1,
          },
        ]}
      >
        {bookText.book_name} |{" "}
        <Text
          style={[
            styles.chapter,
            {
              color: colors.text,
              fontSize: selectedState.font_size + header.h2,
            },
          ]}
        >
          {bookText.chapter}
        </Text>
      </Text>
      <Text
        style={[
          styles.mainContent,
          { color: colors.text, fontSize: selectedState.font_size },
        ]}
      >
        {Object.entries(bookText)
          .filter(([key, _]) => !isNaN(key))
          .map(([key, value]) => (
            <Text
              key={key}
              style={[
                styles.mainContent,
                { color: colors.text, fontSize: selectedState.font_size },
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
