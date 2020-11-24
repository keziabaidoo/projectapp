import React from 'react'
import { Component } from 'react'
import {View,FlatList,Text,StyleSheet, TouchableOpacity,} from 'react-native'
import { Fontisto } from "@expo/vector-icons";
import Departure from '../Departure'


// import DepartureList from  '../DepartureList'



export default class DepartureScreen extends Component{
     constructor(props){
       super(props);
       this.initDeparture = Departure
       this.state = {
         departure:this.initDeparture
       };
     }

     renderItem = ({item})=>{
       return
         <View>
           <Text>{item.text}</Text>
         </View>
       
     }
  render(){
    return (
        <View style={styles.container}> 
        <View style={[styles.departureText,styles.input]}>
        <Text style={styles.subText}>Select departure

        <TouchableOpacity>
        <Fontisto name="close-a" size={22} color="orange" style={{marginLeft:90}}/>
        </TouchableOpacity>
        </Text>
       
        </View>
        <FlatList
        departure= {this.state.departure}
        keyExtractor = {(item) =>item.id.toString()}
        renderItem = {this.renderItem}
        />

    
        </View>
    )
}
}

  const styles = StyleSheet.create({
    container:{
      // marginHorizontal:5
    },
    departureText:{
     margin:20,
    //  flexDirection:'row'
    // justifyContent:'space-between',
    marginHorizontal:5
    },
    input: {
      borderBottomWidth: 1,
      fontSize: 20,
      borderBottomColor: "gray",
      height: 50,
      marginTop: 20,
    },
    subText:{
      justifyContent:'center',
      marginLeft:80
      
    }
  })
