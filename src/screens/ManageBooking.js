import React, { Component } from "react";
import {
  Modal,
  View,
  Dimensions,
  Text,
  TextInput,
  TouchableOpacity,
  Button,
  StyleSheet,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

const deviceHeight = Dimensions.get("window").height;

export default class ManagingBooking extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
    };
  }

  show = () => {
    this.setState({ show: false });
  };

  close = () => {
    this.setState({ show: false });
  };

  renderOutsideTouchable(onTouch) {
    const view = <View style={{ flex: 1, width: "100%" }} />;
    if (!onTouch) return view;

    return (
      <TouchableWithoutFeedback
        onPress={onTouch}
        style={{ flex: 1, width: "100%" }}
      >
        {view}
      </TouchableWithoutFeedback>
    );
  }

  render() {
    let { show } = this.state;
    const { onTouchOutside } = this.props;

    return (
      <View style={styles.main_content}>
        <View>
          <Text>
            title="My Booking" style={styles.buttonText}
            onPress=
            {() => {
              this.setState({ show: false });
            }}
          </Text>
        </View>
        
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.show}
          onRequestClose={this.close}
        >
          <View style={{ backgroundColor: "white", flex: 1 }}>
            <View
              style={{
                // backgroundColor: "gray",
                // margin: 40,
                padding: 30,
                // borderRadius: 10,
                // flex: 5,
                width: 305,
                height: 190,
              }}
            >
              <View
                style={{
                  justifyContent: "space-between",
                  flexDirection: "row",
                }}
              >
                <Text style={[styles.antText, styles.textInput]}>
                  Manage Booking
                </Text>
                <TouchableOpacity>
                  <AntDesign
                    name="close"
                    size={22}
                    color="orange"
                    style={styles.antText}
                  />
                </TouchableOpacity>
              </View>
              <View style={{ marginBottom: 100 }}>
                <TextInput
                  style={styles.confirmText}
                  defaultValue=""
                  placeholder="Confirmation Name"
                  placeholderTextColor="black"
                />
                <TextInput
                  style={{
                    height: 50,
                    color: "black",
                    // marginHorizontal: 10,
                    fontWeight: "bold",
                  }}
                  placeholder="Last Name"
                />
              </View>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main_content: {
    width: 150,
    // position: "relative",
  },

  antText: {
    // marginLeft: 200,
    marginBottom: 20,
    // fontFamily:'ubuntu'
  },
  searchText: {
    // marginLeft: 100,
    // marginBottom: 10,
    flexDirection: "row",
    marginEnd: 20,
  },

  textInput: {
    // justifyContent: "flex-start",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 50,
    marginLeft: 1,
    paddingBottom: 10,
  },
  buttonText: {
    marginLeft: 200,
    justifyContent: "space-around",
    backgroundColor: "#72e9ed",
    fontSize:20,
    fontStyle:'italic'
    
  },
  confirmText: {
    height: 50,
    color: "orange",
    // marginHorizontal: 10,
    fontWeight: "bold",
    alignContent: "center",

    textAlign: "justify",
  },
});
