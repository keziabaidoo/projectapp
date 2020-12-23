import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default class BookingSummaryScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{backgroundColor:'white', shadowColor: "gray",
               shadowOffset: { width: 1, height: 1 },
              shadowOpacity: 0.8,
               shadowRadius: 1,
               borderRadius: 3,
               borderColor:'lightgray',
               height:50}}>
          <Text
            style={{
              // backgroundColor: "white",
              fontSize:20,
              fontFamily:'MS PMincho',
              alignSelf:'center',
              paddingTop:10,
              fontWeight:'normal'
            }}
          >
            Booking Summary
            <AntDesign name="close" size={20} color="orange" style={{marginLeft:50}}/>
          </Text>
        </View>
        <View
          style={[styles.headerText,styles.input]}
        >
          <Text style={{ fontSize: 15, alignItems: "center" }}>
            Wednesday 30 December 2020
          </Text>
          <Text style={{ color: "gray" }}>AW 122</Text>
        </View>

        <View style={{ borderBottomWidth: 1, borderBottomColor: "gray" }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              margin: 10,
            }}
          >
            <Text style={styles.textInfo}>ACC</Text>
            <Text style={styles.textInfo}>KMS</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              margin: 10,
            }}
          >
            <Text>18:30</Text>
            <Text>19:10</Text>
          </View>

          <View
            style={{
              justifyContent: "space-between",
              flexDirection: "row",
              margin: 10,
            }}
          >
            <Text style={{ fontWeight: "bold" }}>Fare</Text>
            <Text style={{ fontWeight: "bold", color: "red" }}>GhC 821.40</Text>
          </View>
          <Text style={{ alignSelf: "flex-end", color: "orange" }}>
            PREMIUM
          </Text>

          <View style={{ marginBottom: 10 }}>
            <Text style={{ color: "gray", margin: 10, flexDirection: "row" }}>
              1
              <AntDesign name="close" size={10} color="gray" />
              adult
              <Text style={{ marginLeft: 210 }}>GhC 444.00</Text>
            </Text>

            {/* <View style={{ alignContent: "space-between" }}> */}
            <Text style={{ color: "gray", margin: 10, flexDirection: "row" }}>
              1
              <AntDesign name="close" size={10} color="gray" />
              child
              <Text style={{ marginLeft: 215 }}>GhC 333.00</Text>
            </Text>
            {/* </View> */}

            {/* <View style={{ alignContent: "space-between" }}> */}
            <Text style={{ color: "gray", margin: 10 }}>
              1
              <AntDesign name="close" size={10} color="gray" />
              infant
              <Text style={{ marginLeft: 210 }}>GhC 44.40</Text>
            </Text>
            {/* </View> */}
          </View>
        </View>
        <View
          style={{
            margin: 10,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontWeight: "bold" }}>Taxes</Text>
          <Text style={{ color: "red", fontWeight: "bold" }}>GHC 10.00</Text>
        </View>
        <View style={[styles.textCon,styles.input]}>
          <Text style={{ color: "gray" }}>APSC - Domestic</Text>
          <Text>GHC 10.00</Text>
        </View>
        <View style={{flexDirection:'row',justifyContent:'space-between',margin:10}}>
        <Text style={{fontWeight:'bold'}}>Total:</Text>
        <Text style={{color:'red',fontWeight:'bold'}}>GHC 831.40</Text>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 20,
    // marginHorizontal:5

  },
  textInfo: {
    fontWeight: "bold",
  },

  headerText:{
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    flexDirection: "row",
    margin: 30,
    justifyContent: "space-between",
    width: 320,
  },

  input: {
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    padding: 5,
  },
  textCon: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    margin:5
  },
});
