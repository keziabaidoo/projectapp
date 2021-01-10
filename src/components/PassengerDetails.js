import React from "react";
import { View } from "react-native";
import { TextInput } from "react-native-paper";

const PassengerDetails = (props) => {
  function name() {}

  return (
    <View style={{ paddingTop: 20, marginTop: 10 }}>
      <TextInput
        underlineColorAndroid="transparent"
        autoCapitalize="none"
        label="Surname"
        style={{
          height: 60,
          width: 350,
          borderRadius: 5,
          color: "black",
          margin: 10,
        }}
      />
      {/* {props.surname} */}

      <TextInput
        label="Othername"
        style={{
          height: 60,
          width: 350,
          borderRadius: 5,
          color: "black",
          margin: 10,
        }}
      />
      <TextInput
        label="Title"
        style={{
          height: 60,
          width: 350,
          borderRadius: 5,
          color: "black",
          margin: 10,
        }}
      />
      <TextInput
        label="Datebirth"
        style={{
          height: 60,
          width: 350,
          borderRadius: 5,
          color: "black",
          margin: 10,
        }}
      />
    </View>
  );
};

export default PassengerDetails;
