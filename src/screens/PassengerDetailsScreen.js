import { Formik } from "formik";
import React, { Component, useState } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { TextInput } from "react-native-paper";
import PassengerDetails from "../components/PassengerDetails";


export default class PassengerDetailsScreen extends Component {
  constructor(props) {
    super(props);
    let adultKeys = [0,1];
    const adultList = adultKeys.map((key) => <PassengerDetails key={key}/>)
     
    let childKeys = [0,1];
    const childList = childKeys.map((key)=> <PassengerDetails key={key}/>)

    let infantKeys = [0,1];
    const infantList = infantKeys.map((key)=> <PassengerDetails key={key}/>)

    let adultcount = [0,1];
    const adultCountlist = 

    this.state = {
      text:"",
      surname: "",
      othername: "",
      title: "",
      datebirth: "",
      adultCount: props.route.params.adultCount,
      childCount: props.route.params.childCount,
      infantCount: props.route.params.infantCount,
      adultList: adultList,
      childList:childList,
      infantList:infantList,
      // passengerDetails:this.props.state.passengerDetails
      // editable: false

    };
    // this.toggleEditable = this.toggleEditable.bind(this)

  }

//   toggleEditable() {
//     this.setState({
//         editable: !this.state.editable
//     })
// }
 
  onUsernameChange(surname) {
    let s = this.state;
    s.surname = surname;
    this.setState(s);   
 }

 onOthernameChange(othername) {
    let s = this.state;
    s.othername = othername;
    this.setState(s);   
 }

 onTitleChange(title) {
  let s = this.state;
  s.title = title;
  this.setState(s);   
}

onDateOfBirthChange(dateofbirth) {
  let s = this.state;
  s.dateofbirth = dateofbirth;
  this.setState(s);   
}
    

 

  // adultCount = ()=>{
  //    let adultCount = this.state.adultCount
  //     if(adultCount >= 0){
  //       text= navigation.navigate('PassengerDetailScreen')
  //     }break
  //   }

       
    onSelect = ()=>{
      var count = [adultCount,ChildCount,infantCount]
      for (let x in onselect){
        console.log(x)
      }
       

      // for (i = 0 ; i <= 5; +11){
      //   var getPassengerDetails = this.PassengerDetailsScreen(i)
      // }
      // return getPassengerDetails
    }


  //  adultCount = ()=>{
  //    let adultcount = this.state.adultCount
  //    i=0;
  //    if(i>5){
  //       break;
  //    }
  //    console.log(count)
  //  }
   
   
  passengerInfo = (passenger)=>{
    passenger.id = Math.random();
    let adultKeys = [...this.state.adultKeys, passenger]
    this.setState({
      adultKeys:passengers
    })
    
  }


  login = (surname, othername, title, datebirth) => {
    alert(
      "surname: " +
        surname +
        " othername: " +
        othername +
        "title:" +
        title +
        "datebirth:" +
        datebirth
    );
  };

  render() {

    // var adultCount = 5;
    // switch(adultCount) {
    //   case "5": alert("PassengerDetailsScreen");
    // }

    // var infantCount = 1;
    // switch(x) {
    //   case "10": alert("Pa");
    // }
    return (
    

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Text
            style={{
              alignSelf: "center",
              paddingTop: 20,
              fontSize: 16,
              marginRight: 100,
              fontSize:18,
              color:'gray'
            }}
          >
            Passenger Information
          </Text>
          <View style={{ paddingTop: 20, marginTop: 10 }}>
                {this.state.adultList}
                {/* <PassengerDetails passengerDetails={this.state.passengerDetails}/> */}
                 {this.state.childList}
               <PassengerDetails 
                passenger={this.state}
                onChangeText={this.state.onUsernameChange}
                onChangeText={this.state.onOthernameChange}
                onChangeText={this.state.onTitleChange}
                onChangeText={this.state.onDateOfBirthChange}
                // editable={this.state.editable} 



                />

           
          </View>
          <TouchableOpacity
            onPress={() =>
              this.login(
                this.state.surname,
                this.state.othername,
                this.state.title,
                this.state.dateofbirth
              )
            }
            onPress={this.toggleEditable}
          >
            <View style={styles.Textcontent}>
              <Text
                style={{
                  fontSize: 20,
                  paddingTop: 10,
                  marginLeft: 120,
                  color: "white",
                }}
              >
                Submit
              </Text>
              
            </View>
          </TouchableOpacity>
          
        </View>
      </ScrollView>
 
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    height:2800,
    width: 460,
    marginHorizontal: 1,
    backgroundColor: "#F5FCFF",
    marginTop: 20,
  },
  Textcontent: {
    borderWidth: 1,
    borderRadius: 10,
    width: 300,
    height: 50,
    marginLeft: 50,
    margin: 20,
    backgroundColor: "orange",
    borderColor: "orange",
  },
});
