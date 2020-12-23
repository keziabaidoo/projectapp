import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,TouchableOpacity,ScrollView
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { ColorAndroid } from 'react-native/Libraries/StyleSheet/PlatformColorValueTypesAndroid';
import { color } from 'react-native-reanimated';
import PaymentScreen from './PaymentScreen'


export default class ResultPageScreen extends Component {
  render() {
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
        <View style={styles.mainText}>
        <Text>Wed 24 Jun</Text>
        <View style={styles.textContent}>
        <Text style={{color:'orange'}}>Thu 25 Jun</Text>
        <View style={{flexDirection:'row',paddingTop:10,alignSelf:'center'}}>
        <Text style={{padding: 5,alignSelf:'center',fontSize:30,fontWeight:'bold',marginLeft:10,lineHeight:30}}>29</Text>
        <Text style={{lineHeight: 40,paddingTop:10}}>.99</Text>

        <Text style={{paddingTop:3,color:'gray',fontFamily:'Arial, Helvetica, sans-serif',lineHeight:17}}>GBP</Text>

        </View>
        </View>
        <Text>Fri 26 Jun</Text>
        </View>
        <TouchableOpacity onPress={()=>{
          navigation.navigate('WelcomePageScreen')
        }} >
        <Text style={styles.TextStyle}>Change Search</Text>
        </TouchableOpacity>
    
      </View>
    
      <TouchableOpacity onPress={()=>{
          navigation.navigate('PaymentScreen')
        }}>
      <View style={[styles.boxText]}>
        <View style={styles.infoText}>
        <View style={styles.text_info}> 
        
<View style={{flexDirection:'row',justifyContent:'space-between'}}>
        <Text style={styles.timeText}>07:35</Text>
        <Text style={styles.hourText}>1h 20m</Text>
       <Text style={{fontWeight:'bold',fontSize:19,color:'gray'}}>09:55 </Text>
       
       </View>
        <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:5}}>
        <Text style={{color:'gray'}}>STN</Text>
        <Text style={{borderTopWidth:1,color:'gray',borderTopColor:'gray'}}>FR 2814</Text>
        <Text style={{color:'gray'}}>CGN</Text>
        
        </View>

       
        </View>
       
        <View style={styles.box2Text}>
        <Text style={styles.box2}>Too late! The flight is sold out</Text>
        <Text style={{alignSelf:'center',justifyContent:'center',
        marginBottom:10,color:'gray',fontWeight:'bold'}}>Operated by Malta Air</Text>  
        </View>
        </View>

        
      </View>
      </TouchableOpacity> 

       <TouchableOpacity onPress={()=>{
         navigation.navigate('BookingSummaryScreen')
       }}>
      <View style={[styles.boxText]}>
      <View style={styles.text_info}> 
<View style={{flexDirection:'row',justifyContent:'space-between'}}>
        <Text style={styles.timeText}>13:50</Text>
        <Text style={styles.hourText}>1 h20 m</Text>
       <Text style={{fontWeight:'bold',fontSize:19,color:'gray'}}>16:10 </Text>
       </View>
        <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:5}}>
        <Text style={{color:'gray'}}>STN</Text>
        <Text style={{borderTopWidth:1,color:'gray',borderTopColor:'gray'}}>FR 2352</Text>
        <Text style={{color:'gray'}}>CGN</Text>
        </View>

       
        </View>
       
        <View style={styles.box2Text}>
        <Text style={styles.box2}>Value fare <Text style={{color:'orange',alignSelf:'center'}}>21.99 GBP</Text></Text>
        <Text style={{alignSelf:'center',justifyContent:'center',
        marginBottom:10,color:'gray',fontWeight:'bold'}}>Operated by Malta Air</Text>  
        </View>
        </View>
        </TouchableOpacity>

 <TouchableOpacity onPress={()=>{
   navigation.navigate('SignInScreen')
 }}>
        <View style={[styles.boxText]}>

<View style={styles.text_info}> 
<View style={{flexDirection:'row',justifyContent:'space-between'}}>
  <Text style={styles.timeText}>19:45</Text>
  <Text style={styles.hourText}>1 h20 m</Text>
 <Text style={{fontWeight:'bold',fontSize:19,color:'gray'}}>22:05 </Text>
 </View>
  <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:5}}>
  <Text style={{color:'gray'}}>STN</Text>
  <Text style={{borderTopWidth:1,color:'gray',borderTopColor:'gray'}}>FR 2814</Text>
  <Text style={{color:'gray'}}>CGN</Text>
  </View>

 
  </View>
 
  <View style={styles.box2Text}>
  <Text style={styles.box2}>Too late! The flight is sold out</Text>
  <Text style={{alignSelf:'center',justifyContent:'center',
  marginBottom:10,color:'gray',fontWeight:'bold'}}>Operated by Malta Air</Text>  
  </View>
  </View>
  </TouchableOpacity>

     
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    backgroundColor: '#F5FCFF',
    marginHorizontal:5,

  
  },

  hourText:{
  color:'gray'
  },
  // input: {
  //   borderBottomWidth: 1,
  //   fontSize: 20,
  //   borderBottomColor: 'orange',
  //   height: 50,
  //   marginTop: 20,
  // },
  box2Text:{
    borderTopWidth:1,
    borderTopColor:'gray',
    justifyContent:'center',
    paddingTop:10,

  },

  text_info:{
    flexDirection:'column',
    marginLeft:5
  },

  timeText:{
   alignContent:'center',
   fontWeight:'bold',
   color:'gray',
   fontSize:19

  },


  content:{
     flexDirection:'row',
     marginHorizontal:5,
     margin:15,
     marginLeft:20,
    //  justifyContent:'space-evenly'
  },
  selectedText:{
       height:35,
       width:23,
       borderWidth:1,
       paddingTop:5,
       textAlign:'center'
     
  },

  main_selected:{
    marginHorizontal:5,
     margin:15,
    marginLeft:25
  },

  IconText:{
    marginVertical:20
  },

  flight_content:{
     flexDirection:'column',
     marginLeft:20,
     paddingTop:20
  },
  mainContainer:{
    flexDirection:'row',
    marginHorizontal:5,
    
  },
   boxText:{
    flex: 2,
    margin:20,
    backgroundColor: '#f2e9d5',
    height:100,
    width:320,
    borderRadius:5,
    borderStartColor:'orange',
    borderStartWidth:5,

  
    

    
     
   },

   textContent:{
    borderBottomWidth:5,
    borderBottomColor:'orange',
    borderRadius:5,
   justifyContent:'center'
   },
     


  mainText:{
    flexDirection:'row',
    justifyContent:'space-between',
    margin:20,
    marginTop:10
     
  },
firstText:{
   width:40,
   fontFamily:'bold'

},
secondText:{
  width:45,
  fontFamily:'bold'
  
},
    
  
  TextStyle:{
    flex: 1,
    height:45,
    width:160,
    margin: 30,
    textAlign: 'center',
    fontSize: 18,
    paddingTop: 5,
    shadowRadius:10,
    color:'white',
    marginLeft:100,
    backgroundColor:'orange',
    borderRadius:5,
    marginHorizontal:5
  
  },

  box1: {
    width: 75,
    height: 75,
    // Uncomment the following style to see flex effects
    //flex: 1,
    backgroundColor: 'steelblue',
    padding: 5,

  },
  box2: {
   paddingTop:15,
    width: 200,
    height: 40,
    // Uncomment the following style to see flex effects
    //flex: 2,
     alignSelf:'center',
     justifyContent:'center',
     flexDirection:'row',
     color:'gray',
     fontWeight:'bold',
     marginLeft:20

  },
  box3: {
    width: 75,
    height: 75, 
    // Uncomment the following style to see flex effects
    //flex: 3,
    backgroundColor: 'orange',
  

  },
  box4: {
    width: 75,
    height: 75, 
    // Uncomment the following style to see flex effects
    //flex: 3,
    backgroundColor: 'gray'
  },
  box5: {
    width: 75,
    height: 75, 
    // Uncomment the following style to see flex effects
    //flex: 3,
    backgroundColor: 'brown',
    padding: 5,

  },
  textStyle: {
    color: 'black',
    alignSelf: 'center',
    margin: 25,
  },
  arrowStyle:{
    flex: 1,
     marginHorizontal:5,
     margin:20,
     flexDirection:'row'

  },
  infoText:{
  }
});