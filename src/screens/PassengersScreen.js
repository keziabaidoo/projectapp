import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import Counters from "react-native-counters";
import PassengerCount from "../components/PassengerCount";

export default class PassengersScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      adultCount: 0,
      childCount: 0,
      infantCount: 0,
     

    };
  }

  decrementCountAdult() {
    let count = this.state.adultCount;
    count--;
    if (count >= 0) {
      this.setState({
        adultCount: count,
        passenger1:{}
      });
    }
  }
  incrementCountAdult() {
    let count = this.state.adultCount;
    count++;
    this.setState({
      adultCount: count,
    });
    console.log(this.state);
  }

   decrementChildCount() {
    let count = this.state.childCount;
    count--;
    if (count >= 0) {
      this.setState({
        childCount: count,
      });
      console.log(this.state);
    }
  }

  incrementChildCount() {
    let count = this.state.childCount;
    count++;
    this.setState({
      childCount: count,
    });

    console.log(this.state);
  }

  decrementInfantCount() {
    let count = this.state.infantCount;
    count--;
    if (count >= 0) {
      this.setState({
        infantCount: count,
      });
      console.log(this.decrementInfantCount);
    }
  }

  incrementInfantCount() {
    let count = this.state.infantCount;
    count++;
    this.setState({
      infantCount: count,
    });

    console.log(this.state);
  }
  PassengerCount = () => {
    console.log(this.state);
  };


   combineStrings = () =>{
      let adultCount = "";
      let childCount = "";
      let  infantCount = adultCount.concat("", childCount)

      this.setState({count:infantCount})
      
   }

  render() {
    const { navigation } = this.props;

    return (
      <View style={styles.container}>
        <View style={[styles.textcontent, styles.input]}>
          <Text
            style={{
              alignSelf: "center",
              marginLeft: 70,
              paddingTop: 10,
              paddingLeft: 55,
              fontSize: 16,
            }}
          >
            Select Passengers
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("WelcomeHomeScreen");
              }}
            >
              <AntDesign
                name="close"
                size={22}
                color="orange"
                style={{ marginLeft: 65 }}
              />
            </TouchableOpacity>
          </Text>
        </View>

          <PassengerCount
            name="Adults"
            description=""
            count={this.state.adultCount}
            increment={this.incrementCountAdult.bind(this)}
            decrement={this.decrementCountAdult.bind(this)}

          />

          <PassengerCount
            name="Children"
            description="2-12years"
            count={this.state.childCount}
            increment={this.incrementChildCount.bind(this)}
            decrement={this.decrementChildCount.bind(this)}
          />
          <PassengerCount
            name="Infants"
            description="Min 14 days old before air travel,and under 2 years"
            count={this.state.infantCount}
            increment={this.incrementInfantCount.bind(this)}
            decrement={this.decrementInfantCount.bind(this)}
            onPress={this.combineStrings}

          />

        <TouchableOpacity
          onPress={() => {
            console.log("hello")
            navigation.navigate("PassengerDetailsScreen",
            {adultCount:this.state.adultCount, 
            childCount:this.state.childCount , 
            infantCount:this.state.infantCount}
            
            );
            
          }} 
        >
          <View style={styles.apply_main}>
            <Text style={styles.applyText}>Apply</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    // margin: 20,
    flexDirection: "column",
    alignContent: "center",
  },
  applyText: { margin: 10, alignSelf: "center", color: "white", fontSize: 18 },
  apply_main: {
    backgroundColor: "orange",
    width: 120,
    height: 45,
    marginLeft: 220,
    margin: 20,
    borderRadius: 5,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    height: 50,
    marginTop: 15,
  },

  textContent: {
    // margin: 20,
    flexDirection: "column",
    alignContent: "center",
  },
});
