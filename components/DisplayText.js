import { ScrollView, Text, StyleSheet, View } from "react-native";
import { useGlobalState } from "../helpers/GlobalStateContext";
import PillButton from "./PillButton";
import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";


export default function DisplayText({ bookText }) {
  const { theme, font_size, bible_translation } = useGlobalState();
  const { colors, header } = theme;
  const navigation = useNavigation();


  const navigationHandler = () => {
    navigation.navigate("ReadingScreen", {
      book: bookText.book_name,
      chap: bookText.chapter,
    });
  };

  useEffect(() => {
    console.log("DisplayText: ", bookText);
  }, [bookText]);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
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
              <Text key={key}>
                <Text style={{ color: "green", fontWeight: "bold" }}>
                  {key}.
                </Text>{" "}
                {value}
                {` `}
              </Text>
            ))}
        </Text>
      </ScrollView>
      <View style={styles.pillButtonCont}>
        <PillButton text={"Go to "} onPress={navigationHandler} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    top: 5,
    borderWidth: 1,
    borderColor: "red",
    justifyContent: "center",
    alignItems: "center",
  },
  scrollView: {
    margin: 0,
    padding: 0,
  },
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
  pillButtonCont: {
    position: "absolute",
    bottom: 0,
    width: "30%",
    borderWidth: 1,
    borderColor: "red",
    right: 0,
  },
});
