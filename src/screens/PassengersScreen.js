import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { Entypo } from "@expo/vector-icons";
import Counters from "react-native-counters";
import {Formik} from 'formik'
import { Value } from "react-native-reanimated";

export default class PassengersScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0,
      show: true,
    };
  }

  IncrementItem = () => {
    this.setState({ clicks: this.state.clicks + 1 });
  };
  DecreaseItem = () => {
    this.setState({ clicks: this.state.clicks - 1 });
  };
  ToggleClick = () => {
    this.setState({ show: !this.state.show });
  };

  render() {
    const { navigation } = this.props;

    return (
      <View>
     
        <View style={[styles.content, styles.input]}>
          <Text
            style={{
              alignItems: "center",
              alignContent: "center",
              alignSelf: "center",
              // marginLeft: 50,
            }}
          >
            Select Passengers
            <TouchableOpacity>
              <AntDesign
                name="close"
                size={22}
                color="orange"
                style={{ marginLeft: 150 }}
              />
            </TouchableOpacity>
          </Text>
        </View>
        <View style={[styles.textContent, styles.input]}>
          <Text style={{}}>
            Adults
            <View style={{ flexDirection: "row", marginLeft: 270 }}>
              <AntDesign
                name="minus"
                size={24}
                color="orange"
                style={{}}
                onClick={this.DecreaseItem}
              />
              {this.state.show ? <h2>{this.state.clicks}</h2> : ""}
              <Entypo
                name="plus"
                size={24}
                color="orange"
                style={{}}
                onClick={this.IncrementItem}
              />
            </View>
            {/* <button onClick={this.ToggleClick}>
              {this.state.show ? "Hide number" : "Show number"}
            </button>
          { <Text style={{ marginBottom: 10 }}>2-12years</Text>*/}
          </Text>
        </View>
        <View>
          <Text></Text>
        </View>
        <View style={[styles.textContent, styles.input]}>
          <Text style={{}}>
            Children
            <View style={{ flexDirection: "row", marginLeft: 270 }}>
              <AntDesign name="minus" size={24} color="orange" style={{}} />
              <Entypo name="plus" size={24} color="orange" style={{}} />
            </View>
            {/* <Text style={{ marginBottom: 10 }}>2-12years</Text> */}
          </Text>
        </View>
        <View style={[styles.textContent, styles.input]}>
          <Text style={{}}>
            Infants
            <View style={{ flexDirection: "row", marginLeft: 270 }}>
              <AntDesign name="minus" size={24} color="orange" style={{}} />
              <Entypo name="plus" size={24} color="orange" style={{}} />
            </View>
            {/* <Text style={{ marginBottom: 10 }}>2-12years</Text> */}
          </Text>
        </View>
        <View style={styles.apply_main}>
          <Text style={styles.applyText}>Apply</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    margin: 20,
    flexDirection: "row",
    alignContent: "center",
  },
  applyText: { margin: 10, alignSelf: "center", color: "white", fontSize: 15 },
  apply_main: {
    backgroundColor: "orange",
    width: 120,
    height: 35,
    shadowRadius: 10,
    marginLeft: 220,
  },
  input: {
    borderBottomWidth: 1,
    fontSize: 20,
    borderBottomColor: "gray",
    height: 50,
    marginTop: 20,
  },

  textContent: {
    margin: 20,
    flexDirection: "row",
    alignContent: "center",
  },
});
