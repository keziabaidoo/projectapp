import React, { Component } from "react";

import { View, Picker, StyleSheet, } from "react-native";
import { Fontisto } from "@expo/vector-icons";
import {Formik} from "formik";

export default class DepartureScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: undefined,
    };
  }
  //   onValueChange(value: String) {
  //     this.setState({
  //       selected: value,
  //     });
  //   }
  render() {
    return (
      <View style={styles.container}>
      
    
          <Formik 
            
          >
            <Picker
              mode="dropdown"
              placeholder="Select departure"
              placeholderStyle={{ color: "#bfc6ea" }}
              placeholderIconColor="#007aff"
              style={{ width: undefined }}
              selectedValue={this.state.selected}
              onValueChange={this.onValueChange.bind(this)}
            >
              <Picker.Item label="Select departure" value="default" />
              <Fontisto name="close-a" size={24} color="black" />

              <Picker.Item
                label="Abidjan,Felix,Houphouet Boigny,ABJ"
                value="key0"
                        />
                        <Text></Text>
              <Picker.Item
                label="Abuja,Nnamdi,Azikiwe,Intl Airport,ABV"
                value="key1"
                placeholder="ABJ"
              />
              <Picker.Item
                label="Accra,Kotoka Intl Airport,ACC "
                value="key2"
              />
              <Picker.Item
                label="Freetown,Lungi Intl Airport,FNA"
                value="key3"
              />
              <Picker.Item label="Kumasi,Airport,KMS" value="key4" />
              <Picker.Item
                label="Lagos,Mohammed Murtala Intl Airport,LOS"
                value="key5"
              />
              <Picker.Item
                label="Monrovia,Roberts Intl Airport,ROB"
                value="key6"
              />
              <Picker.Item label="Takoradi Airport,TKD" value="key6" />
              <Picker.Item label="Tamale Airport,TML" value="key7" />
              <Picker.Item label="Wa Airport,WZA" value="key8" />
            </Picker>
          </Formik>
    
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // horizontal: 1,
  },
});
