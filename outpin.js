import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Picker,
  TextInput,
  TouchableWithoutFeedback,
  CheckBox,
  ScrollView,
  Button,
  Animated,

  // Card,
  // CardItem,
} from "react-native";

import { EvilIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import DateScreen from "../screens/DateScreen";
import Booking from "./Booking";
import Popup from "./Popup";


export default class WelcomePageScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLabel: " value",
      one: "true or false",
    };
  }

  show = (value) => {
    // alert(value);
    this.setState({ selectedLabel: value });
  };

  onePress() {
    alert("one");
  }

  fadeAnimation = () => {
    Animated.timing(this.state.fadeValue, {
      toValue: 1,
      duration: 1200,
    }).start();


  };


  render() {
  
    
    const { navigation } = this.props;

    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 20,
            marginTop: 0.1,
            marginHorizontal: 20,
            backgroundColor: "#72e9ed",

            textAlign: "center",
            marginVertical: 30,
            padding: 30,
            // position: "relative",
            // border: "none",
            alignSelf: "stretch",
            color: "white",
          }}
        >
          RentAir
        </Text>
        <View style={styles.container}>
          <View
            style={styles.TextOpacity}
          >
            <TouchableOpacity>
              <Text style={styles.tripText}>Roundtrip</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.TextOne}>One Way</Text>
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity style={styles.PickerText}>
              {/* <button
                type="button"
                style={{
                  // margin: 2,
                  // padding: 3,
                  // flexDirection: "row",
                  borderWidth: 1,
                  marginTop: 20,
                  marginHorizontal: 5,
                  backgroundColor: "white",
                }}
              > */}
              <View
                style={{
                  marginTop: 20,
                  marginHorizontal: 1,
                  // borderWidth: 1,
                  // fontWeight: "300",
                  width: 62,
                  shadowRadius: 4,
                }}
              >
                <Picker.Item
                  label="Currency"
                  value="default"
                  style={styles.defaultText}
                />
                {/* Currency */}

                <Picker
                  selectedLabel={this.state.selectedLabel}
                  onValueChange={this.show.bind()}
                  mode="dropdown"
                  style={{
                    borderRadius: 1,
                    border: 0,
                    fontSize: 13,
                    letterSpacing: 2,
                    fontWeight:'bold'
                  }}
                >
                  <Picker.Item label="GHS" value="GHS" />
                  <Picker.Item label="NGN" value="NGN" />
                  <Picker.Item label="USD" value="USD" />
                  <Picker.Item label="XOF" value="XOF" />
                </Picker>
              </View>
              {/* </button> */}
            </TouchableOpacity>
          </View>

          {/* <button> */}
          <View style={styles.InfoText}>
            <TouchableOpacity
              
            >
              <EvilIcons
                name="location"
                size={25}
                color="orange"
                // style={{
                //   marginEnd: 10,

                // }}
                // style={[styles.destinationText, styles.TextContent]}
                // style={[styles.EvilIconsText]}
                style={{ marginRight: 20 }}
              />

              <Entypo
                name="chevron-thin-down"
                size={24}
                color="orange"
                style={{ marginLeft: 270, paddingBottom: 15 }}
              />
            </TouchableOpacity>
            <View style={styles.TextDepat}>
              <TouchableOpacity onPress={() => {
                navigation.navigate("DepartureScreen");
              }}>
                <Text style={styles.destinationText}>
                  Departure & Destination
                </Text>

                <Text style={[styles.TextContent, styles.TextContent]} >
                  Select departure & destination
                </Text>

                {/* </button> */}
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <DateScreen />
          </View>
          <View style={styles.main_content}>
            {/* <button> */}
            <TouchableOpacity>
              <MaterialIcons
                name="date-range"
                size={25}
                color="orange"
                style={{ marginTop: 50 }}
              />
              <Entypo
                name="chevron-thin-down"
                size={24}
                color="orange"
                style={{ marginLeft: 270, paddingBottom: 25 }}
              />
            </TouchableOpacity>
            <View style={styles.dateText}>
              <TouchableOpacity
                onePress={() => navigation.navigate("DateScreen")}
              >
                <Text style={{ marginLeft: 9,fontFamily:'Ubuntu' }}>Dates</Text>

                <Text style={styles.dateformat}>Select date(s)</Text>

                {/* </button> */}
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.all_content}>
            <TouchableOpacity>
              {/* <button style={{}}> */}
              <Ionicons
                name="md-people"
                size={24}
                color="orange"
                style={{ marginTop: 30 }}
              />
              <Entypo
                name="chevron-thin-down"
                size={24}
                color="orange"
                style={styles.chevronText}
              />
            </TouchableOpacity>

            <View style={styles.mainText}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("PassengersScreen");
                }}
              >
                <Text style={styles.passengerText}> Select passengers</Text>
                <Text style={[styles.passengerText, styles.passStyle]}>
                  1 adult
                </Text>
              </TouchableOpacity>
            </View>
            {/* <Passengers /> */}

            {/* </button> */}
          </View>

          <View style={{ marginTop: 20, marginHorizontal: 5 }}>
            <View style={[styles.FareText, , styles.text_p]}>
              {/* <Card>
              <CardItem body> */}
              <TouchableOpacity>
                <CheckBox
                  checked={this.state.one}
                  onPress={() => this.onePress()}
                />
              </TouchableOpacity>

              <Text style={styles.text_p}>Lowest Fare</Text>
              {/* </CardItem>
            </Card> */}
            </View>
          </View>

          <View style={styles.textContent}>
            <TouchableOpacity
              onPress={() => {
                this.setState({ show: true });
              }}
            >
              {/* <Text style={styles.Booking_Text}>My Booking</Text> */}
              <Booking />
            </TouchableOpacity>
            {/* <button
              style={{
                backgroundColor: "orange",
                border: 2,
              }}
            >
             </button> */}
             
          </View>
          {/* <View style={styles.mainText}> */}
          <TouchableOpacity onPress={()=>{
             navigation.navigate('ResultPageScreen')
          }}>
                <Text >
                  Search
                </Text>
              </TouchableOpacity>
              {/* </View> */}
           
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 5,
    marginTop: 100,
    // flex: 1,
    position: "absolute",
    // alignContent: "center",
    justifyContent: "center",
    padding: 20,
  },

  mainText:{
    shadowRadius:10,
    height:30

  },
  

  all_content: {
    borderWidth: 1,
    width: 310,
    marginHorizontal: 5,
    height: 65,
    // paddingTop: 10,
    marginTop: 30,
    justifyContent: "center",
  },
  InfoText: {
    borderWidth: 1,

    height: 60,
    marginTop: 30,
    width: 310,
    marginHorizontal: 5,
  },
  mainText: {
    justifyContent: "center",
    // marginLeft: 20,
    bottom: 40,
    marginLeft: 30,
  },

  main_content: {
    borderWidth: 1,
    height: 60,
    width: 310,
    marginTop: 30,
    marginHorizontal: 5,
    justifyContent: "center",
  },

  chevronText: {
    marginLeft: 270,
  },
  // thinText: {
  //   flexDirection: "row",
  //   // marginLeft: 250,
  //   justifyContent: "space-between",
  // },

  // EvilIconsText: {
  //   padding: 2,
  //   flexDirection: "row",
  //   marginBottom: 3,
  //   flex: 7,
  //   marginRight: 5,
  // },

  
  TextContent: {
    fontSize:16,
    paddingEnd: 20,
    justifyContent: "center", 
    fontFamily:'Arial Rounded MT Bold',
    paddingTop: 5,
    fontWeight:'normal'
  },
  defaultText: {
    // fontSize: 10,
    paddingTop: 15,
    marginTop: 5,
    border: "none",
    fontFamily:'Courier'
  },
  
 
  tripText: {
    marginLeft:20,
    fontFamily:'Ubuntu',
    fontWeight:'300'
    
   
  

  },

  

  PickerText: {
    marginHorizontal: 5,
    borderRadius: 10,

    // left: 420,
    width: 65,
    // position: "relative",
    marginLeft: 250,
  },
  TextDepat: {
    // marginHorizontal: 5,
    // marginBottom: 20,
    // paddingHorizontal: 5,
    // flexDirection: "row",
    paddingBottom: 80,
    marginLeft: 30,
    // flexDirection: "row",
  },
  Booking_Text: {
    fontSize: 12,
  },
  searchText: {
    fontSize: 12,
    color: "white",
  },
  

  FareText: {
    padding: 10,
    flexDirection: "row",
  },

  text_p: {
    margin: 5,
    flexDirection: "row",
    marginTop: 10,
    paddingBottom: 5,
  },
  

  
  // Pickerstyle: {
  //   borderRadius: 3,
  // },
  
 
});
