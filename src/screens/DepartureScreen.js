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
         <View style={styles.main_Text}>
           <View style={styles.marginRight}>
             <View style={styles.textinput,{backgroundColor:item.color}}>(ABJ)</View>
             <View style={styles.textinput,{backgroundColor:item.color}}>(ABV)</View>
             <View style={styles.textinput,{backgroundColor:item.color}}>(ACC)</View>
             <View style={styles.textinput,{backgroundColor:item.color}}>(FNA)</View>
             <View style={styles.textinput,{backgroundColor:item.color}}>(ROS)</View>




           </View>
           <Text style={styles.text}>{item.text}</Text>
         </View>
       
     }
  render(){
    return (
        <View style={styles.flatListText}> 
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
      
    },
    flatListText:{
         backgroundColor:'white'
    },
    main_Text:{
      borderWidth:1,
      borderBottomColor:'gray',
      alignItems:'center'
    },
    text:{
      marginVertical:30,
      fontSize:20,
      marginLeft:10
    },
    marginRight:{
      marginRight:5,
    },

    textinput:{
      fontSize:14,
      marginRight:50,
      color:'gray'
      
    }
  })
