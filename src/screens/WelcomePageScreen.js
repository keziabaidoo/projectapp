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
import { BorderlessButton, RawButton, RectButton } from "react-native";
import Booking from "./Booking";
import Popup from "./Popup";

// const popupList = [
//   {
//     id: 1,
//     name: "Confirmation Name",
//   },
//   {
//     id: 2,
//     name: "Last Name",
//   },
// ];

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
    // const { navigation } = this.props;

    // let popoupRef = React.createRef();

    // const onShowPopup = () => {
    //   popoupRef = show();
    // };

    // const onClosePopup = () => {
    //   popoupRef = close();
    // };
    const { navigation } = this.props;

    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 20,
            marginTop: 0.1,
            // marginHorizontal: 20,
            backgroundColor: "#72e9ed",

            textAlign: "center",
            marginVertical: 30,
            padding: 30,
            // position: "relative",
            border: "none",
            alignSelf: "stretch",
            color: "white",
          }}
        >
          RentAir
        </Text>
        <View style={styles.container}>
          <View
            style={styles.TextOpacity}
            // style={[styles.tripText, styles.TextOne]}
          >
            <TouchableOpacity>
              <Text style={styles.tripText}>Roundtrip</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={[styles.TextOne, styles.tripText]}>One Way</Text>
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
                  borderWidth: 1,
                  // fontWeight: "300",
                  width: 62,
                  shadowRadius: 4,
                  shadowColor: "#000",
                  // shadowOffset: { width: 1, height: 1 },
                  shadowOpacity: 0.8,
                  shadowRadius: 1,
                  borderRadius: 3,
                  borderColor: "lightgray",
                  fontSize: 13,
                  fontFamily: "ubuntu",
                  fontWeight: "300",
                }}
              >
                <Picker.Item
                  label="Currency"
                  // value="default"
                  style={[styles.currencyText]}
                />
                {/* Currency */}

                <Picker
                  selectedLabel={this.state.selectedLabel}
                  onValueChange={this.show.bind()}
                  mode="dialog"
                  style={{
                    // borderRadius: 0,
                    borderRadius: 0,
                    fontSize: 13,
                    letterSpacing: 2,
                    fontWeight: "600",
                    fontFamily: "roboto",
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
            <TouchableOpacity>
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
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("DepartureScreen");
                }}
              >
                <Text style={styles.destinationText}>
                  Departure & Destination
                </Text>

                <Text style={[styles.TextContent, styles.TextContent]}>
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
                <Text style={{ marginLeft: 9 }}>Dates</Text>

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
                  1 addult
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
          <TouchableOpacity
            style={{
              width: 200,
              height: 30,
              borderWidth: 1,
              alignSelf: "center",
              backgroundColor: "orange",
              margin: 10,
              borderRadius: 20,
              shadowColor: "#000",
              shadowOffset: { width: 1, height: 1 },
              shadowOpacity: 0.8,
              shadowRadius: 1,
              borderRadius: 5,
            }}
            onPress={() => {
              navigation.navigate("ResultPageScreen");
            }}
          >
            <Text
              style={{
                alignSelf: "center",
                paddingTop: 3,
                fontFamily: "ubuntu",
                fontSize: 20,
                color: "white",
              }}
            >
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

  TextOpacity: {
    textAlign: "center",
    flexDirection: "row",
    alignItems: "center",
    // marginVertical: 5,
    // paddingHorizontal: 10,
    // padding: 5,
    justifyContent: "space-between",
    // borderRadius: 5,
    borderWidth: 1,
    marginRight: 10,
    height: 40,
    borderColor: "gray",
    fontFamily: "bold",
  },
  TextContent: {
    fontSize: 11,
    paddingEnd: 20,
    justifyContent: "center",
    paddingTop: 5,
  },
  currencyText: {
    // fontSize: 10,
    paddingTop: 5,
    marginTop: 5,
    // borderRadius: 'none',
    fontFamily: "ubuntu",
    fontSize: 15,
  },
  passStyle: {
    fontSize: 10,
    top: 70,
  },

  passengerText: {
    // paddingTop: 0.5,
    // marginBottom: 60,
    left: 30,
  },
  tripText: {
    marginLeft: 20,
    fontFamily: "Ubuntu",
    fontWeight: "300",
  },

  TextOne: {
    borderWidth: 1,
    width: "12em",
    height: 40,
    paddingTop: 10,
    borderColor: "gray",
    fontFamily: "Ubuntu",
    fontWeight: "300",
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
    bottom: 80,
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
  textContent: {
    alignItems: "center",
    // justifyContent: "space-around",
    justifyContent: "space-between",
    marginHorizontal: 5,

    flexDirection: "row",
  },

  FareText: {
    padding: 10,
    flexDirection: "row",
  },

  text_p: {
    margin: 5,
    flexDirection: "row",
    // marginTop: 10,
    bottom: 5,
  },
  destinationText: {
    justifyContent: "center",
    // justifyContent: "space-between",
    marginRight: 25,
    top: 300,
    borderRadius: 3,
    paddingTop: 20,
  },

  passText: {
    marginTop: 10,
    borderWidth: 1,
    width: 400,
    height: 50,
  },
  // Pickerstyle: {
  //   borderRadius: 3,
  // },
  dateText: {
    // flexDirection: "row",
    // marginHorizontal: 10,
    // margin: 20,
    // padding: 10,
    bottom: 70,
    marginLeft: 25,
  },
  dateformat: {
    fontSize: 10,
    // padding: 10,
    // justifyContent: "flex-start",
    justifyContent: "center",
    marginLeft: 5,
    top: 80,
    // borderRadius: 3,
    paddingTop: 3,
  },
});
