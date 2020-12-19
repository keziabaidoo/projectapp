import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  Alert,
  Button,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from '@expo/vector-icons';


export default function MobilePaymentScreen({navigation}){
  
  // function showAlert() {
  //   Alert.alert(
  //     "Payment successful",
  //     [
  //       {text:'OK', onPress:()=> console.log('OK pressed')}
  //     ]
  //   )
  // }

  // onPressSimpleAlert = () => {
  //   this.checkAlert.alert("Hello!!", SimpleView, [
  //     { text: "OK", onPress: () => console.log("OK touch") },
  //     { text: "Cancel", onPress: () => console.log("Cancel touch") }
  //   ])
  // }

  
    // const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Text
          style={{
            paddingTop: 20,
            fontFamily: "Arial",
            fontSize: 18,
            padding: 20,
          }}
        >
          Mobile Payment
        </Text>
        <View
          style={{
            // borderWidth: 1,
            // borderRadius: 5,
            height: 30,
            width: 400,
            paddingTop: 5,
            flexDirection: "row",
            marginLeft: 30,
            justifyContent: "flex-start",
            marginBottom: 15,
            // borderColor:'orange'
          }}
        >
          <MaterialIcons
            name="radio-button-unchecked"
            size={20}
            color="orange"
            style={{ marginBottom: 5 }}
          />
          <Text
            style={{ paddingTop: 5, fontFamily: "Italic", marginRight: 70 }}
          >
            Momo
          </Text>
        </View>
        <View
          style={{
            flex: 20,
            height: '10%',
            width: 250,
            backgroundColor: "#f2e9d5",
            marginLeft: 25,
            // borderRadius: 3,
            margin: 10,
            flexBasis: 1,
            flexShrink: 1,
            
         
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <MaterialIcons
              name="radio-button-checked"
              size={20}
              color="orange"
              style={{ marginBottom: 5, margin: 10 }}
            />
            <Text style={{ paddingTop: 13, marginLeft: 5 }}>
              Mobile Payment
            </Text>
          </View>
          <View style={styles.cardText}>
            <Text style={{ fontFamily: "Roboto", fontSize: 16, color: "gray" }}>
              Phone Number
              <Text style={{ lineHeight: 17, color: "red" }}>*</Text>
            </Text>
            <TextInput
              style={{
                height: 40,
                width: 220,
                // alignSelf: "center",
                borderColor: "gray",
                borderWidth: 1,
                marginRight: 20,
                color: "black",
                fontSize: 18,
                fontFamily: "roboto",
                shadowColor: "#000",
                shadowOffset: { width: 1, height: 1 },
                shadowOpacity: 0.8,
                shadowRadius: 1,
                borderRadius:5
              }}
            />
          </View>
          <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <Pressable
              style={({ pressed }) => [
                {
                  backgroundColor: pressed ? "#72e9ed" : "orange",
                },
                styles.button,
                
              ]}
              // onPress={showAlert}
            >
              <Text style={styles.buttonText}>Submit
              <AntDesign name="right" size={16} color="white" style={{paddingTop:5,marginLeft:10}} />
              </Text>
            </Pressable>

           
            {/* <Button onPress={showAlert}
             title='show alert'
            >
              Submit
            </Button> */}
          </View>
        </View>
      </View>
    );
  }


const styles = StyleSheet.create({
  container: {
    flex: 20,
    height: 300,
    width: 300,
    backgroundColor: "lightgray",
    margin: 10,
    marginLeft: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 1,
    
  },
  cardText: {
    margin: 10,
    paddingTop:60
  },
  buttonText: {
    fontSize: 16,
    color: "white",
  },
  button: {
    borderRadius: 20,
    padding: 6,
    height: 35,
    width: "40%",
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
    margin: 10,
    // marginLeft:60,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 1,
    marginRight:40
  },
});
