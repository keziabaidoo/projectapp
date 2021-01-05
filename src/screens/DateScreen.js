import React, { Component } from 'react'
import DatePicker from 'react-native-datepicker'

export default class MyDatePicker extends Component {
  constructor(props){
    super(props)
    this.state = {date:"2016-05-15"}
  }

  render(){
    return (
      <DatePicker
        style={{width: 300,padding: 20,position:'relative'}}
        date={this.state.date}
        mode="date"
        placeholder="select date"
        format="YYYY-MM-DD"
        minDate="2021-01-1"
        maxDate="2025-01-1"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        // customStyles={{
        //   dateIcon: {
        //     position:'absolute',
        //   },
        //   // dateInput: {
        //   //   marginLeft: 36
        //   // }
        //   // ... You can check the source to find the other keys.
        // }}
        onDateChange={(date) => {this.setState({date: date})}}
      />
    )
  }
}