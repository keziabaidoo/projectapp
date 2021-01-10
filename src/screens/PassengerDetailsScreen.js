import React, { Component, useState } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { TextInput } from "react-native-paper";
import PassengerDetails from "../components/PassengerDetails";

export default class PassengerDetailsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      surname: "",
      othername: "",
      title: "",
      datebirth: "",
    };
  }

  handleSurname = (text) => {
    this.setState({ surname: text });
  };
  handleOthername = (text) => {
    this.setState({ othername: text });
  };

  handleTitle = (text) => {
    this.setState({ title: text });
  };
  handleDatebirth = (text) => {
    this.setState({ datebirth: text });
  };

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
              paddingTop: 10,
              fontSize: 16,
              marginRight: 100,
            }}
          >
            Passenger Information
          </Text>
          <View style={{ paddingTop: 20, marginTop: 10 }}>
            {/* <TextInput
              label="Surname"
              style={{
                height: 60,
                width: 350,
                borderRadius: 5,
                color: "black",
                margin: 10,
              }}
            /> */}
            {/* <TextInput
              label="Other Name"
              style={{
                height: 60,
                width: 350,
                borderRadius: 5,
                color: "black",
                margin: 10,
              }}
            /> */}
            {/* <TextInput
              label="Title"
              style={{
                height: 60,
                width: 350,
                borderRadius: 5,
                color: "black",
                margin: 10,
              }}
            /> */}

            {/* <TextInput
              label="Datebirth"
              style={{
                height: 60,
                width: 350,
                borderRadius: 5,
                color: "black",
                margin: 10,
              }}
            /> */}
            <PassengerDetails
              surname="Baidoo"
              othername="Adjoa"
              title="Miss"
              datebirth="10/02/2010"
              onChangeText={ (this.handleSurname)
              }
            />
          </View>
          <TouchableOpacity
            onPress={() =>
              this.login(
                this.state.surname,
                this.state.othername,
                this.state.title,
                this.state.datebirth
              )
            }
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
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    height: 500,
    width: 500,
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
