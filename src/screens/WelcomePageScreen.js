import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Picker,
  SafeAreaView,
  TextInput,
  Pressable,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import * as Animatable from "react-native-animatable";

import { EvilIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { MaterialCommunityIcons, Octicons } from "@expo/vector-icons";
import Popup from "./Popup";
import Booking from "./Booking";
import { connect } from "react-redux";

const popupList = [
  {
    id: "1",
    name: "Confirmation Name",
  },

  {
    id: "",
    name: "Last Name",
  },
];

class WelcomePageScreen extends Component {
  constructor() {
    super();
    this.state = {
      selectedLabel: "",
    };
  }

  Show = (value) => {
    alert(value);
    this.setState({ selectedLabel: value });
  };

  // onePress() {
  //   alert("one");
  // }

  fadeAnimation = () => {
    Animated.timing(this.state.Value, {
      toValue: 2,
      duration: 1700,
    }).start();
  };

  render() {
    //  let popupRef= React.createRef()

    // const onShowPopup = () =>{
    //    popupRef.show()
    // }

    // const onclosePopup =()=>{
    //    popupRef.onClosePopup()
    // }

    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Animatable.View>
            <View
              style={styles.TextOpacity}
              // style={[styles.tripText, styles.TextOne]}
            >
              <TouchableOpacity>
                <Text style={styles.tripText}>Roundtrip</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>{
                  navigation.navigate('WelcomeHomeScreen')
              }}>
                <Text style={[styles.TextOne]}>One Way</Text>
              </TouchableOpacity>
            </View>
          </Animatable.View>

          <View style={styles.PickerText}>
            <TouchableOpacity>
              <View style={{ marginBottom: 10, fontSize: 10 }}>
                <Text style={styles.currencyText}>Currency</Text>

                <Picker
                  style={{
                    fontSize: 10,
                    letterSpacing: 2,
                    fontWeight: "600",
                    // fontFamily: "Roboto",
                    marginBottom: 20,
                  }}
                  selectedLabel={this.state.selectedLabel}
                  onValueChange={this.Show.bind()}
                  mode="dialog"
                >
                  <Picker.Item label="GHS" value="GHS" />
                  <Picker.Item label="NGN" value="NGN" />
                  <Picker.Item label="USD" value="USD" />
                  <Picker.Item label="XOF" value="XOF" />
                </Picker>
              </View>
            </TouchableOpacity>
          </View>

          <View style={{ position: "relative" }}>
            <EvilIcons
              name="location"
              size={35}
              color="orange"
              style={{ marginLeft: 10, paddingTop: 29, position: "absolute" }}
            />
            <View style={styles.Textcontent}>
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate("DepartureScreen");
                }}
              >
                <Text style={styles.destinationText}>
                  Departure & Destination
                </Text>

                <View style={{ flexDirection: "row", paddingTop: 2 }}>
                  <Text style={styles.departText}>
                    {this.props.departure.departure.length}
                    Select departure & destination
                  </Text>
                  <Entypo
                    name="chevron-thin-down"
                    size={18}
                    color="orange"
                    style={{ marginLeft: 65 }}
                  />
                </View>
              </TouchableOpacity>
            </View>
          </View>

          <View style={{ position: "relative" }}>
            <MaterialIcons
              name="date-range"
              size={30}
              color="orange"
              style={{ marginLeft: 13, paddingTop: 27, position: "absolute" }}
            />
            <View style={styles.Textcontent}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("DateScreen");
                }}
              >
                <Text style={styles.destinationText}>Dates</Text>

                <View style={{ flexDirection: "row", paddingTop: 2 }}>
                  <Text style={styles.dateText}>Select date(s)</Text>
                  <Entypo
                    name="chevron-thin-down"
                    size={18}
                    color="orange"
                    style={{ marginLeft: 166 }}
                  />
                </View>
              </TouchableOpacity>
            </View>
          </View>

          <View style={{ position: "relative" }}>
            <Ionicons
              name="md-people"
              size={30}
              color="orange"
              style={{ marginLeft: 13, paddingTop: 24, position: "absolute" }}
            />
            <View style={styles.Textcontent}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("PassengersScreen");
                }}
              >
                <Text style={styles.destinationText}>Select passengers</Text>

                <View style={{ flexDirection: "row", paddingTop: 2 }}>
                  <Text style={styles.departText}>1 adult</Text>
                  <Entypo
                    name="chevron-thin-down"
                    size={18}
                    color="orange"
                    style={{ marginLeft: 208 }}
                  />
                </View>
              </TouchableOpacity>
            </View>
          </View>

          <View style={{ position: "relative" }}>
            <Text
              style={{
                position: "absolute",
                marginTop: 10,
                marginLeft: 50,
                color: "gray",
              }}
            >
              Promo code{" "}
            </Text>
            <TouchableOpacity>
              <MaterialCommunityIcons
                name="wallet-giftcard"
                size={30}
                color="orange"
                style={{ marginLeft: 13, paddingTop: 24, position: "absolute" }}
              />
              <View style={styles.Textcontent}>
                <TextInput
                  style={{
                    paddingTop: 15,
                    fontWeight: "300",
                    fontSize: 14,
                    color: "black",
                    marginLeft: 40,
                  }}
                ></TextInput>
              </View>
            </TouchableOpacity>
          </View>

          <View style={{ flexDirection: "row", margin: 5 }}>
            <MaterialCommunityIcons
              name="checkbox-blank-outline"
              size={24}
              color="gray"
              style={{ marginLeft: 6 }}
            />
            <Text style={{ paddingTop: 2, marginLeft: 5, fontWeight: "300" }}>
              Lowest fare
            </Text>

            <View style={{ marginLeft: 80, marginBottom: 5 }}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("ResultPageScreen");
                }}
              >
                <LinearGradient
                  colors={["#08d4c4", "#72e9ed"]}
                  style={styles.signinText}
                >
                  <Text style={styles.textSign}>Search</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.bookingText}>
            <SafeAreaView>
              <View style={{}}>
                <TouchableOpacity>
                  <View
                    style={{
                      height: 25,
                      width: 45,
                      borderWidth: 2,
                      marginLeft: 20,
                      borderRadius: 5,
                      borderColor: "orange",
                    }}
                  >
                    <MaterialIcons name="flight" size={20} color="orange" />
                  </View>
                  <Text
                    style={{
                      fontWeight: "400",
                      color: "gray",
                      marginRight: 15,
                      fontSize: 15,
                    }}
                  >
                    MY BOOKING
                  </Text>
                </TouchableOpacity>
              </View>
              {/* <Popup
                title="Manage Booking"
                 ref={(target)=> popupRef = target}
                 onTouchOutside={onclosePopup}
                 data={popupList}
              /> */}
              {/* <Booking/> */}
            </SafeAreaView>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("SignInScreen");
              }}
            >
              <View style={{ marginLeft: 50, justifyContent: "center" }}>
                <Octicons
                  name="person"
                  size={24}
                  color="orange"
                  style={{ marginLeft: 30 }}
                />
                <Text style={{ color: "gray" }}>AGENT LOGIN</Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // marginHorizontal: 2,
    backgroundColor: "#F5FCFF",

    paddingTop: 20,
  },

  TextOpacity: {
    textAlign: "center",
    flexDirection: "row",
    alignItems: "center",
    // marginVertical: 5,
    // paddingHorizontal: 10,
    // padding: 5,
    justifyContent: "space-between",
    // borderRadius: 5,
    // borderWidth: 1,
    marginRight: 5,
    // height: 40,
    borderColor: "gray",
    fontFamily: "bold",
    // width: 338,
  },

  tripText: {
    marginLeft: 20,
    // fontFamily: "Ubuntu",
    fontWeight: "600",
    color: "gray",
    borderLeftColor: "gray",
    backgroundColor: "lightgray",
    borderWidth: 1,
    height: 39,
    width: 180,
    borderColor:'gray',
    paddingTop:10,
    
  },

  TextOne: {
    borderWidth: 1,
    width: 155,
    height: 40,
    paddingTop: 10,
    borderColor: "gray",
    fontWeight: "300",
    color: "gray",
  },

  PickerText: {
    marginHorizontal: 5,
    borderRadius: 10,
    width: 100,
    marginLeft: 236,
    borderWidth: 1,
    marginTop: 20,
    marginHorizontal: 1,
    shadowRadius: 4,
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 1,
    borderRadius: 3,
    borderColor: "lightgray",
    fontSize: 13,
    fontWeight: "300",
    height: 60,
  },
  currencyText: {
    // fontSize: 10,
    marginTop: 5,
    // borderRadius: 'none',
    // fontFamily: "Ubuntu",
    fontSize: 13,
    fontWeight: "200",
    marginLeft: 7,
  },

  Textcontent: {
    margin: 10,
    borderWidth: 1,
    width: 330,
    borderColor: "gray",
    height: 59,
  },

  mainText: {
    flexDirection: "row",
    paddingTop: 3,
  },
  destinationText: {
    fontWeight: "300",
    fontSize: 14,
    color: "gray",
    paddingTop: 5,
    marginLeft: 40,
  },
  departText: {
    // marginRight:70,
    fontWeight: "500",
    marginLeft: 40,
  },

  dateText: {
    fontWeight: "500",
    marginLeft: 40,
  },

  dateInfo: {
    color: "gray",
    paddingTop: 15,
  },
  datesText: {
    justifyContent: "center",
    marginLeft: 30,
  },

  textSign: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },

  signinText: {
    width: 150,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
  },
  bookingText: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    // borderWidth:1,
    // height:50,
    // width:390
  },
});

const mapStateToProps = (state) => {
  const { departure } = state;
  return { departure };
};

export default connect(mapStateToProps)(WelcomePageScreen);
