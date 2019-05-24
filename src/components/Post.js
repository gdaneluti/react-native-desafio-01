import React from "react";
import { View, Text, StyleSheet } from "react-native";

const white = "#FFF";
const title = "#333";

const styles = StyleSheet.create({
  container: {
    backgroundColor: white,
    padding: 20,
    borderRadius: 5,
    marginTop: 20,
    marginHorizontal: 20
  },

  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: title
  },
  bottom: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    marginTop: 15
  },
  content: {
    marginTop: 15
  }
});

const Post = props => (
  <View style={styles.container}>
    <View style={styles.postHeader}>
      <Text style={styles.title}>{props.data.title}</Text>
      <Text style={styles.author}>{props.data.author}</Text>
    </View>
    <View style={styles.bottom} />
    <Text style={styles.content}>{props.data.content}</Text>
  </View>
);

export default Post;
