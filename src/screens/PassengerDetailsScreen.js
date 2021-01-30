import { Formik } from "formik";
import React, { Component, useState } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { TextInput } from "react-native-paper";
import { event, onChange } from "react-native-reanimated";
import PassengerDetails from "../components/PassengerDetails";

export default class PassengerDetailsScreen extends Component {
  constructor(props) {
    super(props);
    let adultKeys = [...Array(props.route.params.adultCount).keys()];
    const adultList = adultKeys.map((key) => (
      <PassengerDetails
        key={key}
        passengerDescription="Adult"
        count={key + 1}
        onPress={this.addNewItem}
        // onPress={this.updateIndex}
        onSurnameChange={this.onSurnameChange}
        selectedIndex="kezia"
        // buttons={data.map((e) => e.id)}
      />
    ));

    let childKeys = [...Array(props.route.params.childCount).keys()];
    const childList = childKeys.map((key) => (
      <PassengerDetails
        key={key}
        passengerDescription="Child "
        count={key + 1}
        selectedIndex={this.state.surname}
        // buttons={data.map((e) => e.id)}
      />
    ));

    let infantKeys = [...Array(props.route.params.infantCount).keys()];
    const infantList = infantKeys.map((key) => (
      <PassengerDetails
        key={key}
        passengerDescription="infant"
        count={key + 1}
      />
    ));

    this.state = {
      surname: [
        "Andy",
        "Peterson",
        "Yally",
        "Andy",
        "Peterson",
        "Yally",
        "Andy",
        "Peterson",
        "Yally",
      ],
      othername: "",
      title: "",
      datebirth: "",
      adultCount: props.route.params.adultCount,
      childCount: props.route.params.childCount,
      infantCount: props.route.params.infantCount,
      adultList: adultList,
      childList: childList,
      infantList: infantList,
      // value: data,
    };
    // this.onUsernameChange = this.onUsernameChange.bind(this);
    // this.onOthernameChange = this.onOthernameChange.bind(this);
    // this.onTitleChange = this.onTitleChange.bind(this);
    // this.onDateOfBirthChange = this.onDateOfBirthChange.bind(this);
  }

  // updateIndex = (surname) => this.setState({ surname });

  onSurnameChange() {
    console.log(surname);
  }

  // saveInput = (e) => {
  //   this.setState({ input: e.target.text });
  // };

  addNewItem = () => {
    surname.push(this.state.enteredText.text.toString())
    Alert.alert(surname.toString());
  };

  onOthernameChange(othername) {
    let s = this.state;
    s.othername = othername;
    this.setState(s);
  }

  onTitleChange(title) {
    let s = this.state;
    s.title = title;
    this.setState(s);
  }

  onDateOfBirthChange(dateofbirth) {
    let s = this.state;
    s.dateofbirth = dateofbirth;
    this.setState(s);
  }

  handleSubmit() {
    this.setState({
      surname: event.target.value,
    });
  }

  onSelect = () => {
    var count = [adultCount, ChildCount, infantCount];
    for (let x in onselect) {
      console.log(x);
    }
  };

  componentDidUpdate() {
    console.log(this.state);
  }

  login = (surname, othername, title, datebirth) => {
    alert(
      "surname: " +
        surname +
        " othername: " +
        othername +
        "title:" +
        title +
        "datebirth:" +
        datebirth
    );
  };

  render() {
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Text
            style={{
              alignSelf: "center",
              paddingTop: 20,
              fontSize: 16,
              marginRight: 100,
              fontSize: 18,
              color: "gray",
            }}
          >
            Passenger Information
          </Text>
          <View style={{ paddingTop: 20, marginTop: 10 }}>
            <View>
              {this.state.adultList}
              {/* {this.state.surnameList} */}
            </View>
            <View>{this.state.childList}</View>
            <View>{this.state.infantList}</View>
          </View>
          {/* <TouchableOpacity
          // onPress={() =>
          //   this.login(
          //     this.state.surname,
          //     this.state.othername,
          //     this.state.title,
          //     this.state.dateofbirth
          //   )
          // }
          >
            <View style={styles.Textcontent}>
              <Text
                style={{
                  fontSize: 20,
                  paddingTop: 10,
                  marginLeft: 120,
                  color: "white",
                }}
              >
                Submit
              </Text>
            </View>
          </TouchableOpacity> */}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    height: 650,
    width: 460,
    marginHorizontal: 1,
    backgroundColor: "#F5FCFF",
    marginTop: 20,
  },
  Textcontent: {
    borderWidth: 1,
    borderRadius: 10,
    width: 300,
    height: 50,
    marginLeft: 50,
    margin: 20,
    backgroundColor: "orange",
    borderColor: "orange",
  },
});
