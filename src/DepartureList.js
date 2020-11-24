import React, { Component } from 'react';
import { View, Text ,StyleSheet} from 'react-native';
import { Fontisto } from "@expo/vector-icons";


export default function DepartureList ({name}) {
  


    return (
      <View>
        <Text style={styles.departureText}> Select departure </Text>
        <Fontisto name="close-a" size={24} color="orange" />

        <View>
          <Text>(ABJ)</Text>
        </View>

      </View>
    );
  }

  const styles = StyleSheet.create({
      container:{
          marginHorizontal:5
      },

      departureText:{
        fontSize:15,
        fontFamily:''
      }
  })

