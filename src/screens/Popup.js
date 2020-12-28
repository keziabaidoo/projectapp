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
import { FlatList } from "react-native-gesture-handler";
  
// const deviceHeight = Dimensions.get("window").height;

export default class Popup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }

  show = () => {
    this.setState({ show: true });
  };

  close = () => {
    this.setState({ show: false });
  };

  renderOutsideTouchable(onTouch) {
    const view = <View style={{ flex: 1, width: "100%" }}/>;
    if (!onTouch) return view;

    return (
      <TouchableOpacity onPress={onTouch} style={{ flex: 1, width: "100%" }}>
        {view}
      </TouchableOpacity>
    );
  }

  renderTitle = () =>{
    const {title} = this.props
    return(
      <View style={{marginLeft:20}}>
      <Text
        style={{
          color: "#182E44",
          fontSize: 25,
          fontWeight: "500",
          marginTop: 15,
          marginBottom:30
        }}
      >
        {title}
        {/* {this.renderTitle()}
        {this.renderContent()} */}
      </Text>
    </View>
    )
  }

  renderContent = () =>{
    const {data}= this.props
    return(
    <View>
      <FlatList style={{marginBottom:20}}
      showsVerticalScrollIndicator={false}
      data={data}
      renderItem={this.renderItem}
      extraData={data}
      keyExtractor={(item , index) => index.toString()}
      ItemSeparatorComponent = {this.renderSeparator}
      contentContainerStyle={{
        paddingBottom:40
      }}


      />
    </View>
    )
  }

  renderItem = ({item}) =>{
    <View style={{height:50,flex:1,alignItems:'flex-start'}}>
     <Text style={{fontSize:18,fontWeight:'normal',color:'#182E44'}}>(item.name)</Text>
    </View>
  }

  renderSeparator = () =>{
    <View style={{
      opacity:0.1,
      height:1,
      backgroundColor:'#182E44'

    }}>

    </View>
  }

  render() {
    let { show } = this.state;

    const { onTouchOutside ,title } = this.props;
    return (
      <Modal
        animationType={"fade"}
        transparent={true}
        visible={show}
        onRequestClose={this.close}
      >
        <View style={styles.textInfo}>
          {this.renderOutsideTouchable(onTouchOutside)}
          <View
             style={{
              backgroundColor: "#FFFFFF",
              width: "100%",
              borderTopRightRadius: 10,
              borderTopLeftRadius: 10,
              paddingHorizontal: 10,
              // maxHeight: deviceHeight * 0.4,
            }}
          >
            <View>
              <Text
                style={{
                  color: "#182E44",
                  fontSize: 20,
                  fontWeight: "500",
                  margin: 15,
                }}
              >
                {title}
              </Text>
            </View>
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

  textInfo: {
    flex: 1,
    backgroundColor: "#000000AA",
    justifyContent: "flex-end",
  },
});
