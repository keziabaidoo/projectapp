import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

export default class WelcomeHomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 20,
            marginTop: 0.1,
            // marginHorizontal: 20,
            backgroundColor: "#72e9ed",

            textAlign: "center",
            marginVertical: 30,
            padding: 30,
            // position: "relative",
            border: "none",
            alignSelf: "stretch",
            color: "white",
          }}
        >
          RentAir
        </Text>

        <View style={styles.container}>
            <Text></Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // marginHorizontal: 5,
    backgroundColor: '#08d4c4',
    width: 400,
    height: 500,
    marginHorizontal: 5,

  },
});
