import React from "react";
import { View, Text } from "react-native";
import { TextInput } from "react-native-paper";

const PassengerDetails = (props) => {
  return (
    <View style={{ paddingTop: 20, marginTop: 10 }}>
      <Text style={{ marginLeft: 20, fontSize: 16 }}>Surname</Text>
      <TextInput
        editable="true"
        underlineColorAndroid="transparent"
        autoCapitalize="sentences"
        returnKeyType="done"
        keyboardType="web-search"
        returnKeyLabel = {"next"}
        // onChangeText={this.props.text}

        style={{
          height: 60,
          width: 335,
          borderRadius: 5,
          color: "black",
          margin: 10,
        }}
      />
      <Text style={{ marginLeft: 20, fontSize: 16 }}>OtherName</Text>

      <TextInput
        editable="true"
        returnKeyType="done"
        keyboardType="web-search"
        returnKeyLabel = {"next"}
        underlineColorAndroid="transparent"
        // onChangeText={this.props.text}


        style={{
          height: 60,
          width: 335,
          borderRadius: 5,
          color: "black",
          margin: 10,
        }}
      />
      <Text style={{ marginLeft: 20, fontSize: 16 }}>Title </Text>
      <TextInput
         editable="true"
        returnKeyType="done"
        keyboardType="web-search"
        // onChangeText={this.props.text}


        style={{
          height: 60,
          width: 335,
          borderRadius: 5,
          color: "black",
          margin: 10,
        }}
      />
      <Text style={{ marginLeft: 20, fontSize: 16 }}>DateOfbirth </Text>
      <TextInput
       editable="true"
        returnKeyType="done"
        keyboardType="web-search"
        returnKeyLabel = {"next"}

        style={{
          height: 60,
          width: 335,
          borderRadius: 5,
          color: "black",
          margin: 10,
        }}
      />
    </View>
  );
};

export default PassengerDetails;
