import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default class BookingSummaryScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>  
      <View style={{flexDirection:'row',height:40,width:'300'}}>
        <Text style={{backgroundColor:'white',shadowColor: "#000",
                shadowOffset: { width: 1, height: 1 },
                shadowOpacity: 0.8,
                shadowRadius: 1,
                borderRadius:5}}> BookingSummaryScreen 
        <AntDesign name="close" size={20} color="orange" />
        </Text>
        </View>
        <View style={{borderBottomWidth:1,borderBottomColor:'lightgray',flexDirection:'row',margin:25,justifyContent:'space-between',width:320}}>
          <Text style={{fontSize:15,alignItems:'center'}}>Wednesday 30 December 2020</Text>
          <Text style={{color:'lightgray'}}>AW 122</Text>
        </View>

        <View>
          <Text style={{flexDirection:'row'}}>ACC
            <Text>KMS</Text>
          </Text>
          </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container:{
   flex:1
  }
})
