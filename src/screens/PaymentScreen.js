import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  CheckBox,
  TouchableOpacity,
  SafeAreaView,
  Button,
  Picker,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { ScrollView, TextInput } from "react-native-gesture-handler";

export default class PaymentScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ["Mobile Payment", "Credit Card"],
      checked: 0,
    };
  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.main_content}>
        <View style={styles.contentText}>
          <View style={styles.lockText}>
            <Entypo name="lock" size={24} color="black" style={{}} />
          </View>
          <Text
            style={{
              paddingTop: 10,
              marginLeft: 10,
              fontFamily: "Roboto",
              fontSize: 18,
            }}
          >
            How would you like to pay
          </Text>
        </View>

        <View style={styles.moneyText}>
          {this.state.data.map((data, key) => {
            return (
              <View>
                {this.state.checked == key ? (
                  <View
                    style={{
                      marginTop: 20,
                      borderRadius: 2,
                      borderWidth: 1,
                      width: 310,
                      height: 40,
                      // alignSelf: "center",
                    }}
                  >
                    <TouchableOpacity
                      onPress={() => {
                        navigation.navigate("MobilePaymentScreen");
                      }}
                      style={styles.dataText}
                    >
                      <MaterialIcons
                        name="radio-button-checked"
                        size={24}
                        color="orange"
                        style={styles.radioText}
                      />
                      <Text style={styles.conText}>{data}</Text>
                    </TouchableOpacity>
                  </View>
                ) : (
                  <View
                 
                    style={{
                      marginTop: 20,
                      borderRadius: 2,
                      borderWidth: 1,
                      width: 310,
                      height: 40,
                      // alignSelf: "center",
                    }}
                  >
                    <TouchableOpacity
                      onPress={() => {
                        this.setState({ checked: key });
                      }}
                      onPress={()=>{
                        navigation.navigate('CreditCardScreen')
                      }}
                      style={styles.dataText}
                    >
                      <MaterialIcons
                        name="radio-button-unchecked"
                        size={24}
                        color="orange"
                        style={styles.radioText}
                      />
                      <Text style={styles.conText} >{data}</Text>
                    </TouchableOpacity>
                  </View>
                )}
              </View>
            );
          })}
        </View>

        {/* <TouchableOpacity>
            <View style={styles.payText}>
              <Text
                style={{
                  justifyContent: "center",
                  fontFamily: "roman",
                  fontSize: 16,
                  color: "blue",
                }}
              >
                Click To Pay
              </Text>
            </View>
          </TouchableOpacity> */}

        {/* <View style={styles.mobileText}>
            <AntDesign
              name="mobile1"
              size={24}
              color="orange"
              style={{ marginRight: 20 }}
            />
            <FontAwesome name="cc-visa" size={24} color="blue" />
          </View>
          <View>
            <Text
              style={{
                fontFamily: "Roman",
                fontSize: 18,
                padding: 10,
                marginLeft: 20,
                lineHeight: 30,
              }}
            >
              Name on Card
            </Text>

            
          </View>

          <View>
            <Text
              
            >
            </Text> */}
        {/* <View> */}
        {/*  */}
        {/* <FontAwesome name="lock" size={24} color="black" /> */}
        {/* </View> */}
        {/* </View> */}

        {/* <View>
            <Text
              style={{
                fontFamily: "Roman",
                fontSize: 18,
                padding: 10,
                marginLeft: 20,
                lineHeight: 30,
              }}
            >
              Expiration date
              <Text style={{ lineHeight: 17, color: "red" }}>*</Text>
            </Text>
            <View>
              <Picker></Picker>
            </View> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main_content: {
    flex: 1,
    marginHorizontal: 5,
  },
  radioText: {
    height: 20,
    width: 20,
  },
  contentText: {
    flexDirection: "row",
    margin: 10,
    // justifyContent: "center",
    borderWidth: 1,
    paddingTop: 10,
    borderRadius: 30,
    borderColor: "lightgray",
    marginHorizontal: 5,
    height: 60,
    width: 300,
  },

  moneyText: {
    marginHorizontal: 5,
    // justifyContent: "center",
    flexWrap:1
  },
  payText: {
    borderBottomWidth: 0.1,
    marginTop: 20,
    alignItems: "center",
    borderBottomColor: "gray",
    width: 330,
    marginHorizontal: 5,
  },
  conText: {
    fontFamily: "italic",
    fontSize: 15,
    paddingTop: 5,
    marginRight: 10,
  },
  lockText: {
    backgroundColor: "orange",
    width: 50,
    height: 40,
    padding: 10,
    borderRadius: 20,
    justifyContent: "center",
    marginBottom: 20,
  },
  // visaText:{
  //   flexDirection:'row'
  // },
  mobileText: {
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "center",
  },
  dataText: {
    flexDirection: "row",
    // alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 5,
  },
});
