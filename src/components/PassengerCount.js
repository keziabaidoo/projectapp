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
    <View style={[styles.textContent, styles.input]}>

      <Text style={{ marginLeft: 15 ,fontSize:16}}>
        {props.name}
        

        <View style={{ flexDirection: "row" }}>
          <AntDesign
            name="minus"
            size={24}
            color="orange"
            style={{ marginLeft: 220 }}
            onPress={decrement}
          />
          <Text style={{ paddingTop: 5, marginLeft: 7, fontSize: 18 }}>
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
      <Text style={{position:"absolute",paddingTop:15,color:"gray"}}> 
      {props.description}
      </Text>
    </View>
  );
};

export default PassengerCount;

const styles = StyleSheet.create({
  textContent: {
    // margin: 20,
    flexDirection: "row",
    alignContent: "center",
  },

  input: {
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    height: 50,
    marginTop: 15,
  },
});
