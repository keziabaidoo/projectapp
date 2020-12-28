import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  Alert,
  Image,
  Modal,
  Button,

} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from '@expo/vector-icons';

export default class CreditCardScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  

  render() {
    // showAlert =()=> {
    //   Alert.alert(
    //   'Title of alert','Tab OK',
    //   [
    //     {text:'OK', onPress:()=> console.log('OK pressed')},
    //   ]
    //   )
    //  }
    
    return (
      <View style={styles.container}>
        <Text
          style={{
            paddingTop: 20,
            // fontFamily: "Helvetica",
            fontSize: 18,
            padding: 20,
            alignSelf: "center",
          }}
        >
          Payment method
        </Text>

        <View
          style={{
            // borderWidth: 1,
            borderRadius: 5,
            height: 30,
            width: 320,
            paddingTop: 3,
            flexDirection: "row",
            marginLeft: 30,
            // justifyContent: "space-evenly",
            marginBottom: 15,
            // borderColor:'orange'
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.8,
            shadowRadius: 1,
            shadowColor: "#000",
            borderColor: "gray",
          }}
        >
          <MaterialIcons
            name="radio-button-unchecked"
            size={20}
            color="orange"
            style={{ marginBottom: 5, marginRight: 5 }}
          />
          <Text style={{ paddingTop: 3, }}>
            Credit Card
          </Text>
          {/* <FontAwesome5
            name="cc-visa"
            size={20}
            color="orange"
            style={{ marginLeft: 200, paddingBottom: 10, borderRadius: 5 }}
          /> */}
        </View>

        <View
          style={{
            height: 425,
            width: 320,
            backgroundColor: "#f2e9d5",
            marginLeft: 20,
            borderRadius: 10,
            margin: 5,
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <MaterialIcons
              name="radio-button-checked"
              size={20}
              color="orange"
              style={{ marginBottom: 5, margin: 10 }}
            />
            <Text style={{ paddingTop: 13, marginLeft: 5 }}>Credit Card
            {/* <Image source={require('')}/> */}
            </Text>
          </View>
          <View style={styles.cardText}>
            <Text style={{ fontSize: 16, color: "gray",marginLeft:10 ,paddingTop:5}}>
              Name on Card
              <Text style={{ lineHeight: 17, color: "red" }}>*</Text>
            </Text>
            <TextInput
              style={{
                height: 40,
                width: 290,
                // alignSelf: "center",
                borderColor: "gray",
                borderWidth: 1,
                marginRight: 20,
                color: "black",
                fontSize: 18,
                // fontFamily: "roboto",
                shadowColor: "#000",
                shadowOffset: { width: 1, height: 1 },
                shadowOpacity: 0.8,
                shadowRadius: 1,
                borderRadius:5
              }}
            />
          </View>

          <View style={styles.cardText}>
            <Text
              style={{
                // fontFamily: "Roman",
                fontSize: 16,
                // padding: 10,
                marginLeft: 10,
                lineHeight: 30,
                color: "gray",
                paddingTop:5
              }}
            >
              
              Debit/Credit card number
              <Text style={{ lineHeight: 17, color: "red" }}>*</Text>
            </Text>
            <TextInput
              style={{
                color: "black",
                fontSize: 18,
                // fontFamily: "roboto",
                height: 40,
                width: 290,
                borderWidth: 1,
                borderColor: "gray",
                shadowColor: "#000",
                shadowOffset: { width: 1, height: 1 },
                shadowOpacity: 0.8,
                shadowRadius: 1,
                borderRadius:5
              }}
            />
          </View>

          <View style={styles.cardText}>
            <Text
              style={{
                // fontFamily: "Roman",
                fontSize: 16,
                // padding: 10,
                marginLeft: 5,
                lineHeight: 30,
                color: "gray",
                paddingTop:5
              }}
            >
              Expiration Date
              <Text style={{ lineHeight: 17, color: "red" }}>*</Text>
            </Text>
            <TextInput
              style={{
                //   color: "black",
                fontSize: 15,
                // fontFamily: "roboto",
                height: 40,
                width: 200,
                borderWidth: 1,
                borderColor: "gray",
                shadowColor: "#000",
                shadowOffset: { width: 1, height: 1 },
                shadowOpacity: 0.8,
                shadowRadius: 1,
                borderRadius:5
              }}
              defaultValue="Month"
            />
          </View>
          <View style={styles.cardText}>
            <Text
              style={{
                // fontFamily: "Roman",
                fontSize: 16,
                // padding: 10,
                marginLeft: 5,
                lineHeight: 30,
                color: "gray",
                paddingTop:5
              }}
            >
              CVV Code
              <Text style={{ lineHeight: 17, color: "red" }}>*</Text>
            </Text>
            <TextInput
              style={{
                color: "black",
                borderRadius: 5,
                fontSize: 18,
                // fontFamily: "roboto",
                height: 40,
                width: 200,
                borderWidth: 1,
                borderColor: "gray",
                shadowColor: "#000",
                shadowOffset: { width: 1, height: 1 },
                shadowOpacity: 0.8,
                shadowRadius: 1,
                // marginTop:5
              }}
            />
          </View>

          <View>
      
          
            <Pressable
              style={({ pressed }) => [
                {
                  backgroundColor: pressed ? "#72e9ed" : "orange",
                },
                styles.button,
              ]}
              onPress={() => Alert.alert('Payment Successfully!')}

            >
              <Text style={styles.buttonText}>Submit
              <AntDesign name="right" size={16} color="white" style={{paddingTop:5,marginLeft:10}}/>
              </Text>
            </Pressable>

            {/* <Button 
            title="show alert"
            onPress={showAlert}
            >Submit</Button> */}
            
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // marginHorizontal: 5,
    // flex: 7,
    height: 550,
    width: 359,
    backgroundColor:'#F5FCFF' ,
    // margin: 5,
    // marginLeft: 10,
    // borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 1,
  },
  cardText: {
    margin: 10,
  },

  buttonText: {
    fontSize: 16,
    color: "white",
  },
  button: {
    borderRadius: 20,
    padding: 6,
    height: 35,
    width: "30%",
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
    margin: 1,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 1,
    marginLeft: 100
  },
});
