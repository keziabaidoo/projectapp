import React, { Component } from "react";

import { Text, View, TextInput } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import ManageBooking from "../../other";
import Popup from "./Popup";

export default class Booking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: false,
    };
  }

  close = () => {
    this.setState({
      isShow: false,
    });
  };
  render() {
    const { isShow } = this.state;
    return (
      <View>
        <TouchableOpacity
          style={{
            // backgroundColor: "#72e9ed",
            width: 100,
            height: 30,
            alignItems: "center",
            justifyContent: "center",
            marginStart: "10",
          }}
          onPress={() => {
            this.setState({
              isShow: !this.state.isShow,
            });
          }}
        >
          <Text>My Booking</Text>
        </TouchableOpacity>
        <Popup
          My
          Booking={isShow}
          title={"Manage Booking"}
          animationType={"slide"}
          closePopup={this.close}
        />
      </View>
    );
  }
}
