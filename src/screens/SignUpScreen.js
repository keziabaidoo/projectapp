import React, { Component, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Platform,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import * as Animatable from "react-native-animatable";

import { Fontisto, Feather, Entypo } from "@expo/vector-icons";

const { width: WIDTH } = Dimensions.get("window");
// const { height } = Dimensions.get("screen");

const SignUpScreen = ({navigation}) => {
  const [data, setDate] = React.useState({
    email: "",
    password: "",
    secureTextEntry: true,
    check_textInputChange: false,
  });

  const textInputChange = (val) => {
    if (val.lenth == 0) {
      setDate({
        ...data,
        email: val,
        check_textInputChange: "true",
      });
    } else {
      setDate({
        ...data,
        email: val,
        check_textInputChange: "false",
      });
    }
  };

  const handlePasswordChange = (val) =>{
    setDate({
        ...data,
        password: val,
      });
  }

  const updateSecureTextEntry = ()=>{
    setDate({
        ...data,
        secureTextEntry:! data.secureTextEntry

      });
  }

  return (

    <View style={styles.container}>
      <View style={styles.header}>

        <Text style={styles.text_header}>Sign Up </Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>

      <Animatable.View 
      animation= 'fadeInUpBig'
      style={styles.footer}>
        <Text style={styles.text_footer}>Email</Text>
        <View style={styles.actionText}>
          <Fontisto
            name="email"
            size={24}
            color="gray"
            style={{ position: "absolute", marginLeft: 8, paddingBottom: 4 }}
          />
          <TextInput
            style={styles.textInfo}
            placeholder="Your Email"
            //   autoCapitalize="none"
            onChangeText={(val) => textInputChange(val)}
          />
          {data.check_textInputChange ? (
            <Animatable.View
            animation='bonuceIn'
            >
              <Feather
                name="check-circle"
                size={30}
                color="gray"
                style={{
                  position: "absolute",
                  marginLeft: 255,
                  paddingBottom: 4,
                }}
              />
            </Animatable.View>
          ) : null}
        </View>

        <Text style={styles.text_footer,{
            marginTop:20
        }}>Password</Text>
        <View style={styles.actionText}>
          <Feather
            name="lock"
            size={24}
            color="gray"
            style={{ position: "absolute", marginLeft: 8, paddingBottom: 4 }}
          />
          <TextInput
            style={styles.textInfo}
            placeholder="Your password"
            autoCapitalize="none"
            secureTextEntry={data.secureTextEntry ? true : false}
            onChangeText={(val) => handlePasswordChange(val)}

          />
          <TouchableOpacity
            onPress={updateSecureTextEntry} 
          >
              {data.secureTextEntry ?
          <Entypo
            name="eye-with-line"
            size={24}
            color="gray"
            style={{ position: "absolute", marginLeft: 255, paddingBottom: 4 }}
          />
          :
          <Entypo
            name="eye-with-line"
            size={24}
            color="gray"
            style={{ position: "absolute", paddingBottom: 4 }}
          />
              }
          </TouchableOpacity>
        </View>

        <Text style={styles.text_footer,{
            marginTop:20
        }}>Confirm Password</Text>
        <View style={styles.actionText}>
          <Feather
            name="lock"
            size={24}
            color="gray"
            style={{ position: "absolute", marginLeft: 8, paddingBottom: 4 }}
          />
          <TextInput
            style={styles.textInfo}
            placeholder="Confirm Your Password"
            autoCapitalize="none"
            secureTextEntry={data.secureTextEntry ? true : false}
            onChangeText={(val) => handlePasswordChange(val)}

          />
          <TouchableOpacity
            onPress={updateSecureTextEntry} 
          >
              {data.secureTextEntry ?
          <Entypo
            name="eye-with-line"
            size={24}
            color="gray"
            style={{ position: "absolute", marginLeft: 255, paddingBottom: 4 }}
          />
          :
          <Entypo
            name="eye-with-line"
            size={24}
            color="gray"
            style={{ position: "absolute", paddingBottom: 4 }}
          />
              }
          </TouchableOpacity>
        </View>

        <View style={{marginTop:15}}>
        <TouchableOpacity>

            <LinearGradient
              colors={['#08d4c4','#01ab9d']}
              style={styles.signinText}
            >
                <Text style={styles.textSign}>Sign Up</Text>
            </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity 
              style={[styles.signinText,{
                  borderColor:'#009387',
                  marginTop:15,
                  borderWidth:1
              }]}
            
            onPress={()=>{ navigation.navigate('SignInScreen')}


            }
            >
                <Text style={styles.textSign}>Sign In</Text>
            </TouchableOpacity>
        </View>

      </Animatable.View>
      </ScrollView>
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#08d4c4',
    width: 350,
    height: 400,
    marginHorizontal: 5,
  },
  header: {
    flex: 2,
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingBottom: 30,
  },

  footer: {
    flex: 1,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 50,
  },

  text_footer: {
    color: "#05375a",
    fontSize: 18,
  },

  text_header: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
    fontFamily:'Source Sans'
  },
  actionText: {
    // position: "relative",
    flexDirection: "row",
    marginTop: 15,
    //   borderBottomWidth:1,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 5,
  },

  textInfo: {
    flex: 1,
    marginTop: Platform.OS == "windows" ? 0 : -12,
    paddingLeft: 10,
    //   color:'05375a',
    width: 400,
    height: 45,
    borderRadius: 10,
    borderWidth: 1,
    fontSize: 16,
    paddingLeft: 45,
    // backgroundColor:"rgb(255,255,0.35)",
    color: "rgba(255,255,255,0.7)",
    // marginHorizontal: 25,
    // paddingTop:20
    margin: 5,
  },
  button: {
    alignItems: "center",
    marginTop: 50,
  },
  signinText: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },

  textSign: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default SignUpScreen;
