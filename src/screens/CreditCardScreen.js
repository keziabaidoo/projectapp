import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Alert,
  Image,
  Modal,
  Button,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { TextInput } from "react-native-paper";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

export default class CreditCardScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.payText}>
          <Text
            style={{
              paddingTop: 20,
              // fontFamily: "Helvetica",
              fontSize: 18,
              padding: 20,
              alignSelf: "center",
            }}
          >
            Pay Invoice
          </Text>
        </View>
        <View
          style={{
            height: 484,
            width: 350,
            backgroundColor: "#f2e9d5",
            marginLeft: 5,
            borderRadius: 3,
          }}
        >
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
          {/* <View style={styles.imageTag}> */}
          <Image
            style={styles.imageText}
            source={require("../screens/visaCard.png")}
          />
          <Image
            style={styles.imgText}
            source={require("../screens/masterCard.png")}
          />

          <Image
            style={styles.discoverText}
            source={require("../screens/discover.png")}
          />
          {/* </View> */}
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={{ paddingTop: 20, fontSize:15, marginLeft:20 }}>Payment amount</Text>
        <View style={styles.defaultText}> 
        <TextInput defaultValue="$500.00"
        style={styles.valueText}
        />
        <View style={styles.editText}>
        <Text style={styles.editText2}>Edit</Text>
        </View>
        </View>
      
          <View style={styles.cardText}>
            <Text
              style={{
                fontSize: 16,
                color: "gray",
                marginLeft: 10,
                paddingTop: 5,
              }}
            >
              Name on Card
              {/* <Text style={{ lineHeight: 17, color: "red" }}>*</Text> */}
            </Text>
            <TextInput
              style={{
                height: 40,
                width: 290,
                borderColor: "gray",
                marginRight: 20,
                color: "black",
                fontSize: 18,
              
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
                paddingTop: 5,
              }}
            >
              Debit/Credit card number
            </Text>
            <TextInput
              style={{
                color: "black",
                fontSize: 18,
                height: 40,
                width: 290,
                borderColor: "gray",
               
              }}
            />
          </View>

          <View style={styles.cardText}>
            <View style={styles.dateText}>
            <Text
              style={{
                fontSize: 16,
                marginLeft: 5,
                lineHeight: 30,
                color: "gray",
                paddingTop: 5,
              }}
            >
              Expiry date
            </Text>
            <Text
              style={{
                fontSize: 16,
                marginLeft: 5,
                lineHeight: 30,
                color: "gray",
                paddingTop: 5,
              }}
            >
              Security code
            </Text>
            </View>
            <View style={styles.infoText}>
            <TextInput
              style={{
                fontSize: 15,
                height: 40,
                width: 179,
                borderColor: "gray",
                
              }}
              defaultValue="Month"
            />
               <TextInput
              style={{
                fontSize: 15,
                height: 30,
                width: 160,
                borderColor: "gray",
                borderLeftWidth:2,
                borderRadius:3
                
              }}
            />
            </View>
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
                paddingTop: 5,
              }}
            >
            Zip/Postal code
            </Text>
            <TextInput
              style={{
                color: "black",
                borderRadius: 5,
                fontSize: 18,
                height: 40,
                width: 290,
                borderColor: "gray",
              
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
              onPress={() => Alert.alert("Payment Successfully!")}
            >
              <Text style={styles.buttonText}>
                Submit
                <AntDesign
                  name="right"
                  size={16}
                  color="white"
                  style={{ paddingTop: 5, marginLeft: 10 }}
                />
              </Text>
            </Pressable>

            {/* <Button 
            title="show alert"
            onPress={showAlert}
            >Submit</Button> */}
          </View>
          </ScrollView>

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
    backgroundColor: "#F5FCFF",
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
  payText: {
    borderBottomWidth: 1,
    borderRadius: 5,
    borderColor: "gray",
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
    marginLeft: 100,
  },

  imageText: {
    height: 40,
    width: 70,
    borderRadius: 5,
    marginLeft: 20,
  },
  imgText: {
    height: 40,
    width: 70,
    marginLeft: 10,
    borderWidth: 1,
    borderRadius: 5,
  },

  discoverText: {
    height: 40,
    width: 70,
    marginLeft: 10,
    borderRadius: 5,
  },

  imageTag: {},

  defaultText:{
  flexDirection:'row',
  justifyContent:"space-around"
  },

  valueText:{
    width:200,
    height:40,
    marginRight:40,
    
  },
  editText:{
    borderWidth:1,
    height:40,
    width:60,
    borderRadius:5,
    borderColor:"gray",
    
  },

  editText2:{
   paddingTop:10,
   marginLeft:15,
   fontSize:15
  },
  dateText:{
    flexDirection:"row",
    justifyContent:"space-between"
  },
  infoText:{
    flexDirection:"row",
    justifyContent:"space-between",
    
  }
});
