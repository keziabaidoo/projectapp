// import React, { Component } from "react";
// import { View, Button, TouchableOpacity, StyleSheet } from "react-native";
// import DateTimePicker from "@react-native-community/datetimepicker";

// export default class DateScreen extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isDateTimePickervisible: false,
//     };
//   }

//   showDateTimePicker = (value) => {
//     this.setState({ isDateTimePickervisible: true });
//   };

//   handleDatePicked = (value) => {
//     this.setState({ isDateTimePickervisible: false });
//   };
//   handleTDateimePicker = (value) => {
//     this.setState({ isDateTimePickervisible: true });
//   };

//   render() {
//     return (
//       <View style={styles.container}>
//         <DateTimePicker
//           isVisible={this.state.isDateTimePickervisible}
//           onConfirm={this.handleDatePicked}
//           onCancle={this.handleTDateimePicker}
//         />
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     // horizontal: 1,
//   },
// });
