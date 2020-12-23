import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
  TextInput,
  TouchableOpacity,
  Pressable
} from "react-native";
import { Entypo, Feather, Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons,MaterialIcons } from "@expo/vector-icons";

const { width: WIDTH } = Dimensions.get("window");
export default class SignInScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPass: true,
      press: false,
    //   checked: true,
    //   unchecked: false,
    };
  }

  showPass = () => {
    if (this.state.press == false) {
      this.setState({ showPass: false, press: true });
    } else {
      this.setState({ showPass: true, press: false });
    }

    // checked = () => {
    //   if (this.state.unchecked == false) {
    //     this.setState({ checked: false, unchecked: true });
    //   } else {
    //     this.setState({ checked: true, unchecked: false });
    //   }
    // };
  };

  render() {
     const {navigation} = this.props
    return (
      <ImageBackground
        source={require("../screens/Image.jpeg")}
        style={styles.container}
      >
        <View>
          <Text
            style={{
              fontFamily: "ubuntu",
              fontSize: 18,
              marginLeft: 40,
              margin: 5,
            }}
          >
            Welcome Back!
          </Text>
          <Pressable  style={({ pressed }) => [
                {
                  backgroundColor: pressed ? "#b2d1cc" : "white",
                },
                styles.touchText
              ]}
                >
          
          <MaterialIcons name="person" size={70} color="gray" 
          style={{alignSelf:'center',
          paddingTop:5,marginLeft:2}} />
    
          </Pressable>
        </View>
        <View>
          <Ionicons
            name="ios-person"
            size={24}
            color="gray"
            style={{ marginTop: 25, position: "absolute", marginLeft: 35 }}
          />
          <TextInput
            style={styles.inputText}
            placeholder={"Username"}
            placeholderTextColor={"gray"}
            underlineColorAndroid="transparent"
          />
        </View>

        <View>
          <Feather
            name="lock"
            size={24}
            color="gray"
            style={{ marginTop: 25, position: "absolute", marginLeft: 35 }}
          />
          <TextInput
            style={styles.inputText}
            placeholder={"Password"}
            placeholderTextColor={"gray"}
            underlineColorAndroid="transparent"
            secureTextEntry={this.state.showPass}
          />
          <TouchableOpacity
            onPress={this.showPass.bind(this)}
            style={styles.iconText}
          >
            <Entypo
              name={this.state.press == false ? "eye" : "eye-with-line"}
              size={24}
              color="gray"
            />
          </TouchableOpacity>
        </View>

        <View style={styles.radioText}>
          <TouchableOpacity>
            <MaterialCommunityIcons
              name=
                // this.state.unchecked == false
                  "radiobox-blank"
                //   : "radiobox-marked"
              
              size={20}
              color="black"
              style={{ position: "absolute", marginRight: 10, paddingTop: 2 }}
            />
          </TouchableOpacity>
          <Text style={{ marginLeft:30, paddingTop: 5, 
    fontWeight: "400", fontFamily:'Yatra one',marginRight:10}}>Remember me</Text>

<TouchableOpacity>
          <Text style={{ paddingTop: 5 , 
    fontWeight: "400", fontFamily:'Yatra one',marginLeft:95}}>Forgot password?</Text>
    </TouchableOpacity>
        </View>

        <View>
        <Pressable
              style={({ pressed }) => [
                {
                  backgroundColor: pressed ? "#72e9ed" : "orange",
                },
                styles.button,
                
              ]}
              // onPress={showAlert}
            >
              <Text style={styles.buttonText}>Login
              <MaterialIcons name="check" size={20} color="white" style={{marginTop:40,marginLeft:10}}/>
              {/* <AntDesign name="right" size={16} color="white"  /> */}
              </Text>
            </Pressable>

        </View>

        <View style={{flexDirection:'row',margin:10}}>
          <TouchableOpacity>
          <Text style={{fontFamily:'ubuntu'}}>Don't have an account?</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{
            navigation.navigate('SignUpScreen')
          }}>
          <Text style={{marginLeft:5,fontFamily:'ubuntu'}}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5fcff",
    // alignItems:'center',
    justifyContent:'center',
    width: 370,
    height: 500,
    marginHorizontal:5
  },
  inputText: {
    width: 300,
    height: 45,
    borderRadius: 10,
    borderWidth: 1,
    fontSize: 16,
    paddingLeft: 45,
    backgroundColor: "rgba(0,0,0,0.35)",
    color: "rgba(255,255,255,0.7)",
    marginHorizontal: 25,
    // paddingTop:20
    margin: 20,

  },

  iconText: {
    position: "absolute",
    marginTop: 30,
    marginLeft: 300,
  },

  radioText: {
    flexDirection: "row",
    // justifyContent: "space-between",
    margin:5,
    position:'relative'
    
   
  },
  buttonText: {
    fontSize: 16,
    color: "white",
  },
  button: {
    borderRadius: 20,
    padding: 6,
    height: 35,
    width: "30%",
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
    margin: 10,
    // marginLeft:60,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 1,
    marginLeft:100
  },

  touchText:{
    width:80,
    height:83, 
    borderRadius:50,
    borderWidth:2,
    alignSelf:'center',
    borderColor:'gray'
  }
});
