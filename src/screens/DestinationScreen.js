import React, { Component } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Alert,
  TouchableOpacity,
} from "react-native";
import { Fontisto } from "@expo/vector-icons";
import {connect} from 'react-redux'

 class DestionationScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      refresh: false,
    };
  }

  renderHeader = () => {
    var header = (
      <View style={[styles.header_footer_style, styles.input]}>
        <Text style={styles.textStyle}>Select destination</Text>
        <TouchableOpacity>
          <Fontisto
            name="close-a"
            size={18}
            color="orange"
            style={{ marginLeft: 120 }}
          />
        </TouchableOpacity>
      </View>
    );
    return header;
  };
  renderSeparator = () => {
    return (
      <View
        style={{
          width: "100%",
          // backgroundColor: "#000",
          borderBottomColor: "gray",
          borderBottomWidth: 1,
        }}
      />
    );
  };

  onItemSelect = (item) => {
    console.log("item", item);
  };

  render() {
    const data = [
      { id: 1, key: "Abidjan,Felix,Houphouet Boigny,ABJ", title: "(ABJ)" },
      { id: 2, key: "Abuja,Nnamdi,Azikiwe,Intl Airport,ABV", title: "(ABV)" },
      { id: 3, key: "Accra,Kotoka Intl Airport,ACC", title: "(ACC)" },
      { id: 4, key: "Freetown,Lungi Intl Airport,FNA", title: "(FNA)" },
      { id: 5, key: "Kumasi,Airport,KMS" },
      { id: 6, key: "Lagos,Mohammed Murtala Intl Airport,LOS", title: "(LOS)" },
      { id: 7, key: "Monrovia,Roberts Intl Airport,ROB", title: "(ROB)" },
      { id: 8, key: "Takoradi Airport,TKD", title: "(TKD)" },
      { id: 9, key: "Tamale Airport,TML", title: "(TML)" },
      { id: 10, key: "Wa Airport,WZA", title: "(WZA)" },
    ];
    return (
      <View style={styles.container}>
        <FlatList
          data={data}
          extraData={this.data}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={this.renderSeparator}
          ListHeaderComponent={this.renderHeader}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  this.onItemSelect(item);
                }}
              >
                <View style={styles.item}>
                  <Text style={styles.textKey}>{item.key}</Text>
                  <Text style={styles.titleText}>{item.title}</Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 5,
  },
  item: {
    padding: 15,
    fontSize: 14,
    height: 44,
    fontFamily: "Roboto",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  header_footer_style: {
    flexDirection: "row",
    justifyContent: "center",
    margin: 10,
    alignContent: "center",
    paddingTop: 20,
    fontSize: 18,
  },

  textStyle: {
    marginLeft: 65,
  },
  input: {
    borderBottomWidth: 1,
    fontSize: 20,
    borderBottomColor: "gray",
    height: 50,
    marginTop: 20,
    width: "100%",
    marginHorizontal: 5,
  },

  textKey: {
    fontSize: 12,
  },
  titleText: {
    fontSize: 12,
    color: "gray",
  },
});


export default DestionationScreen;