import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView
} from "react-native";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonText: "No Button selected"
    };

    this.changeButtonText = this.changeButtonText.bind(this);
  }

  changeButtonText(text) {
    this.setState({ buttonText: text });
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <Text style={styles.welcome}>Welcome to React Native!</Text>
          <Text style={styles.instructions}>Click any of the buttons</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              testID="BTN1"
              style={styles.button}
              onPress={() => this.setState({ buttonText: "Button 1 pressed" })}
            >
              <Text>Button 1</Text>
            </TouchableOpacity>
            <TouchableOpacity
              testID="BTN2"
              style={styles.button}
              onPress={() => this.setState({ buttonText: "Button 2 pressed" })}
            >
              <Text>Button 2</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.instructions}>{this.state.buttonText}</Text>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  buttonContainer: {
    flex: 1,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    padding: 15,
    margin: 15,
    backgroundColor: "lightblue"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
