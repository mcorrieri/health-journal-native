import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Note from "./Note";

const NoteList = () => {
  const data = [
    {
      id: 1,
      date: "Feb 14, 2022",
      description:
        "I had a hotdog before running and I do not think that was a good idea",
    },
    {
      id: 2,
      date: "Feb 13, 2022",
      description: "Benched today and hit a PR of 225 for 2 reps",
    },
    {
      id: 3,
      date: "Feb 12, 2022",
      description: "Ate 3 hotdogs before doing legs. Felt really good!",
    },
  ];

  const entryList = data.map((entry) => {
    console.log(entry);
    return (
      <View style={styles.container}>
        <Note entry={entry} />
      </View>
    );
  });
  return <View style={styles.container}>{entryList}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    backgroundColor: "lightgrey",
    justifyContent: "center",
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 5,
    padding: 10,
  },
});

export default NoteList;
