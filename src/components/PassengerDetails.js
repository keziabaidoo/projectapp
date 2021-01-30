import { Formik } from "formik";
import React, { useState } from "react";
import { View, Text, StyleSheet ,Keyboard, Button} from "react-native";
import { TextInput } from "react-native-paper";
import { color } from "react-native-reanimated";

const PassengerDetails = (props) => {

  function passengerDescription() {
  }

  
function handleChange(enteredText){
 props.onSurnameChange(enteredText.nativeEvent.text);  
}

// function getSurname({index}){
//   console.log(index)
//   props.handleChange(index.nativeEvent)
// }

  return (
    <View style={{ paddingTop: 20, marginTop: 10 }}>
      <Text style={styles.descriptText}>
        {props.passengerDescription + " " +props.count}
      </Text>
     

            
       
        <Formik initialValues={{surname:"", othername:"", title:"", dateofbirth:""}}
              onSubmit={(values)=>{
                console.log(values);

             }}
          >
         {(props)=>(

        <View>
                <Text style={{ marginLeft: 20, fontSize: 16 }}>Surname</Text>

          <TextInput
        onChange={handleChange}
        onChangeText={props.handleChange("surname")}
        values={props.values.surname}
        underlineColorAndroid="transparent"
        autoCapitalize="sentences"
        returnKeyType="done"
        returnKeyLabel={"next"}
        onBlur={Keyboard.dismiss}
        style={{
          height: 60,
          width: 335,
          borderRadius: 5,
          color: "black",
          margin: 10,
        }}
      />

      <Text style={{ marginLeft: 20, fontSize: 16 }}>Other names</Text>

      <TextInput
        onChange={handleChange}
        returnKeyType="done"
        returnKeyLabel={"next"}
        underlineColorAndroid="transparent"
        // onChangeText={this.props.text}
        onChangeText={passengerDescription}
        style={{
          height: 60,
          width: 335,
          borderRadius: 5,
          color: "black",
          margin: 10,
        }}
      />
      <Text style={{ marginLeft: 20, fontSize: 16 }}>Title </Text>
      <TextInput
        returnKeyType="done"
        keyboardType="web-search"
        // onChangeText={this.props.text}
        onChangeText={passengerDescription}
        style={{
          height: 60,
          width: 335,
          borderRadius: 5,
          color: "black",
          margin: 10,
        }}
      />
      <Text style={{ marginLeft: 20, fontSize: 16 }}>Date of birth </Text>
      <TextInput
      onChange={handleChange}
       onChangeText={passengerDescription}
        returnKeyType="done"
        keyboardType="web-search"
        returnKeyLabel={"next"}
        style={{
          height: 60,
          width: 335,
          borderRadius: 5,
          color: "black",
          margin: 10,
        }}
      />
      <View style={styles.buttonText}>
              <Text 
              style={styles.button}
              onPress={props.handleSubmit}>Submit</Text>
              </View>
        </View>


)}


        </Formik>


    </View>

  );
};

export default PassengerDetails;

const styles = StyleSheet.create({
  descriptText: {
    marginLeft: 15,
    fontSize: 17,
    color: "orange",
    padding: 5,
  },

  buttonText:{
    borderRadius:5,
    height:59,
    width:200,
    marginLeft:100,
    paddingTop:5,
    backgroundColor:"orange"
  },

  button:{
    color:"white",
    paddingTop:15,
    alignSelf:'center',
    fontSize:20,
     textShadowColor:'gray'
    
  }
});
