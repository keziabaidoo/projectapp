import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

const PassengerCount = (props) => {
  function increment() {
    console.log("increment");
    props.increment();
  }

  function decrement() {
    console.log("decrement");
    props.decrement();
  }
  return (
    <View style={[styles.antText,styles.TextInfo]}>

      <Text style={styles.TextInfo}>
        {props.name}
        

        <View style={styles.antText}>
          <AntDesign
            name="minus"
            size={24}
            color="orange"
            style={{ marginLeft: 250, }}
            onPress={decrement}
          />
          <Text style={{ paddingTop: 5, marginLeft: 5, fontSize: 18 }}>
            {props.count}
          </Text>

          <Entypo
            name="plus"
            size={24}
            color="orange"
            style={{ marginLeft: 10 }}
            onPress={increment}
          />
        </View>
      </Text>
      {/* <Text style={{position:"relative",}}>
      {props.description}
      </Text> */}
    </View>
  );
};

export default PassengerCount;

const styles = StyleSheet.create({
  textContent: {
// justifyContent:"space-between" ,  
    // justifyContent:"center",
    position:"relative"

  },

  input: {
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    height: 50,
    marginTop:10,
    width:400
  },
  antText:{
    flexDirection:"row",
    // justifyContent:"space-between",
    // alignSelf:"center",
    paddingBottom:5,
  },

  TextInfo:{
    marginLeft: 10 ,fontSize:16,paddingTop:5
  }
});
