import React, { Component } from "react";
import { ScrollView, Text, StyleSheet, View, Platform } from "react-native";
import Post from "./components/Post";

export default class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        title: "Aprendendo React Native",
        author: "Gustavo Daneluti",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      },
      {
        id: 2,
        title: "Aprendendo React Native",
        author: "Gustavo Daneluti",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      },
      {
        id: 3,
        title: "Aprendendo React Native",
        author: "Gustavo Daneluti",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      },
      {
        id: 4,
        title: "Aprendendo React Native",
        author: "Gustavo Daneluti",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      },
      {
        id: 5,
        title: "Aprendendo React Native",
        author: "Gustavo Daneluti",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      }
    ]
  };

  render() {
    const { posts } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>GoNative App</Text>
        </View>
        <ScrollView>
          {posts.map(post => (
            <Post key={post.id} data={post} />
          ))}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EE7777"
  },
  header: {
    backgroundColor: "#FFF",
    justifyContent: "center",
    alignItems: "center",
    // No iOS precisamos aplicar 20px de padding superior
    // já que a Status Bar não joga o conteúdo do App
    // pra baixo automaticamente
    ...Platform.select({
      ios: {
        height: 76,
        paddingTop: 20
      },
      android: {
        height: 56,
        paddingTop: 0
      }
    })
  },
  headerTitle: {
    color: "#333",
    fontSize: 16,
    fontWeight: "bold"
  }
});
