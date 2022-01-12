import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";

const ListScreen = () => {
  const friends = [
    { name: "Friend 1", age: 20 },
    { name: "Friend 2", age: 45 },
    { name: "Friend 3", age: 32 },
    { name: "Friend 4", age: 27 },
    { name: "Friend 5", age: 53 },
    { name: "Friend 6", age: 27 },
    { name: "Friend 7", age: 53 },
    { name: "Friend 8", age: 30 },
    { name: "Friend 9", age: 20 },
  ];

  return (
    <FlatList
      // Untuk Horizontal / Row List
      // horizontal={true}
      // showsHorizontalScrollIndicator={true}
      data={friends}
      keyExtractor={(friend) => friend.name}
      renderItem={({ item }) => {
        return (
          <Text style={styles.textStyle}>
            {item.name} - Age {item.age}
          </Text>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
    marginHorizontal: 10,
  },
});

export default ListScreen;
