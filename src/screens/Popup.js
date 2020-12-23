import React, { Component } from "react";
import {
  View,
  Text,
  Modal,
  Dimensions,
  Pressable,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default class Popup extends Component {
  static defaultProps = {
    title: "",
    animationType: "slide",
    haveOutsideTouch: true,
  };

  render() {
    const {
      show,
      title,
      animationType,
      closePopup,
      haveOutsideTouch,
    } = this.props;
    return (
      <Modal
        animationType={animationType}
        transparent={true}
        visible={show}
        onRequestClose={() => {}}
      >
        <View style={{ flex: 1, backgroundColor: "orange" }}>
          {/* <Text>Manage Booking</Text> */}
          <Pressable
            onPress={() => {
              if (!haveOutsideTouch) return;
              closePopup();
            }}
            style={{ flex: 1 }}
          ></Pressable>
          <View
            style={{
              bottom: 0,
              // position: "absolute",
              width: "100%",
              backgroundColor: "white",
              borderTopLeftRadius: 15,
              borderTopRightRadius: 15,
              height: Dimensions.get("window").height * 0.4,
              maxHeight: Dimensions.get("window"),
            }}
          >
            <Text
              style={{
                alignItems: "center",
                color: "black",
                fontSize: 15,
                fontWeight: "500",
                margin: 15,
                fontFamily:'ubuntu'
              }}
            >
              {title}
              <AntDesign
                name="close"
                size={23}
                color="orange"
                style={{ marginLeft: 110 ,}}
              />
            </Text>

            <View>
              <TextInput
                defaultValue="Confirmation Number"
                // placeholderTextColor="black"
                style={{
                  height: 50,
                  justifyContent: "center",
                  width: 280,
                  alignContent: "center",
                  margin: 10,
                  borderWidth: 1,
                  fontSize: 12,
                  fontWeight: "400",
                  borderColor: "gray",
                  fontFamily:'ubuntu',
                  marginLeft:10
                  

                }}
              />
              <TextInput
                defaultValue="Last Name"
                // placeholderTextColor="black"
                style={{
                  height: 50,
                  justifyContent: "center",
                  width: 280,
                  alignContent: "center",
                  margin: 10,
                  borderWidth: 1,
                  fontSize: 12,
                  fontWeight: "400",
                  borderColor: "gray",
                  fontFamily:'ubuntu',
                  marginLeft:10
                }}
              />
            </View>
            <TouchableOpacity
            onPress={()=>{
              navigation.navigate('ResultPageScreen')
            }}
              style={{
                backgroundColor: "orange",
                width: 280,
                height: 30,
                alignItems: "center",
                justifyContent: "center",
                // marginLeft: 100,
                shadowRadius: 10,
                borderRadius: 2,
                justifyContent: "center",
                fontSize: 17,
                margin: 10,
                // color: "white",
                alignItems: "center",
              }}
            >
              <Text
                style={styles.main_text}

                // height: 50,
                // justifyContent: "center",
                // width: 280,
                // alignContent: "center",
                // margin: 5,
                // // borderWidth: 1,
                // fontSize: 12,
                // fontWeight: "bold",
                // backgroundColor: "#72e9ed",
                // alignSelf: "center",
              >
                Show Booking
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  main_text: {
    color: "white",
  },
});
