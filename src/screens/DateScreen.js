import React, { Component } from "react";
import { View, Button, TouchableOpacity, StyleSheet } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

export default class DateScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDateTimePickerVisible: false,
    };
  }

  showDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: true });
  };

  handleDatePicked = (date) => {
    this.setState({ isDateTimePickerVisible: false });
  };
  handleTDateimePicker = () => {
    this.setState({ isDateTimePickervisible: true });
  };

  render() {
    return (
      <View style={styles.container}>
          <TouchableOpacity onPress={this.showDateTimePicker}> 
        <DateTimePicker
          isVisible={this.state.isDateTimePickerVisible}
          onConfirm={this.handleDatePicked}
          onCancle={this.handleTDateimePicker}
        />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal:1
  },
});
