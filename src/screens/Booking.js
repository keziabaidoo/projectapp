import React, { Component } from "react";

import { Text, View, TextInput, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Popup from "./Popup";
// import ManageBooking from '../screens/ManageBooking'

export default class Booking extends Component  {
  constructor(props) {
    super(props);
    this.state = {
      isShow: false,
    };
  }


  close = () => {
    this.setState({
      isShow: false,
    });
  };

 
  render() {

    const { isShow } = this.state;
    return (
      <View>
        <View style={styles.main_content}>
        <TouchableOpacity
          style={{
            // backgroundColor: "#72e9ed",
            width: 100,
            height: 30,
            alignItems: "center",
            justifyContent: "center",
            // marginStart: "10",
          }}
          onPress={() => {
            this.setState({
              isShow: !this.state.isShow,
            });
          }}
        >
          {/* <Text style={{fontSize:15,fontStyle:'italic'}}>My Booking</Text> */}
        </TouchableOpacity>
        {/* <View style={styles.mainText}>
        <TouchableOpacity onPress={()=>{
        this.props.navigation.navigate('ResultPageScreen')
        }}>
          <Text style={styles.searchText}>Search</Text>
        </TouchableOpacity>
        </View> */}
        </View>
        {/* <ManageBooking/> */}
        <Popup
          My
          Booking={isShow}
          title={"Manage Booking"}
          animationType={"slide"}
          closePopup={this.close}
        />
       
      </View>
    );
  }
}


const styles = StyleSheet.create({
  main_content:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginHorizontal:5

  },

  searchText:{
    fontSize:15,
    fontStyle:'italic',
    color:'white',
    marginLeft:20


  },
  mainText:{
    shadowRadius:10,
    height:35,
    width:95,
    // borderWidth:1,
    backgroundColor:'orange',
    justifyContent:'center',
    shadowOpacity:5,
    marginRight:10
    


  }
})
