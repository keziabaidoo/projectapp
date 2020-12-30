import React from "react";
import { StyleSheet, Text, View ,Animated, Easing, Platform} from "react-native";
// import WelcomePageScreen from "./src/screens/WelcomePageScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import DateScreen from "../screens/DateScreen";
import PassengersScreen from "../screens/PassengersScreen";
import DepartureScreen from "../screens/DepartureScreen";
// import Departure from './src/Departure'
import ResultPageScreen from '../screens/ResultPageScreen';
import PaymentScreen from '../screens/PaymentScreen';
import CreditCardScreen from '../screens/CreditCardScreen'
import MobilePaymentScreen from "../screens/MobilePaymentScreen";
import BookingSummaryScreen from '../screens/BookingSummaryScreen'
import SignInScreen from '../screens/SignInScreen'
import SignUpScreen from '../screens/SignUpScreen';
import WelcomeHomeScreen from '../screens/WelcomeHomeScreen';
import DestinationScreen from '../screens/DestinationScreen';




const Stack = createStackNavigator();

let SlideFromRight = (index, position, width) => {
  const inputRange = [index - 1, index, index + 1];
  const translateX = position.interpolate({
    inputRange: [index - 1, index, index + 1],
    outputRange: [width, 0, 0]
  })
  const slideFromRight = { transform: [{ translateX }] }
  return slideFromRight
};

const TransitionConfiguration = () => {
  return {
    transitionSpec: {
      duration: 750,
      easing: Easing.out(Easing.poly(4)),
      timing: Animated.timing,
      useNativeDriver: true,
    },
    screenInterpolator: (sceneProps) => {
      const { layout, position, scene } = sceneProps;
      const width = layout.initWidth;
      const { index, route } = scene
      const params = route.params || {}; // <- That's new
      const transition = params.transition || 'default'; // <- That's new
      return {
        default: SlideFromRight(index, position, width),
      }[transition];
    },
  }
}



 function AppContainer() {
  return (

      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerTitle: "RentAir",
            headerTintColor: "white",
            headerTitleAlign: "left",
            fontWeight: "bold",
            

            headerStyle: {
              backgroundColor: "orange",
            
            },
          }}
        >
         

            <Stack.Screen 
          // Options={{
          //   headerTitle: "RentAir Ghana",
          //   headerTintColor: "white",
          //   headerTitleAlign: "left",
          //   fontWeight: "bold",
          //   headerStyle: {
          //   backgroundColor: "orange",
          //   },
          // }}
          name="WelcomeHomeScreen" component={WelcomeHomeScreen} />
          {/* <Stack.Screen name="Date" component={DataScreen} /> */}
          <Stack.Screen
            Options={{
              headerTitle: "RentAir Ghana",
              headerTintColor: "white",
              headerTitleAlign: "left",
              fontWeight: "bold",
              headerStyle: {
                backgroundColor: "orange",
              },
            }}
            name="PassengersScreen"
            component={PassengersScreen}
          />
          <Stack.Screen 
          Options={{
            headerTitle: "RentAir Ghana",
            headerTintColor: "white",
            headerTitleAlign: "left",
            fontWeight: "bold",
            headerStyle: {
            backgroundColor: "orange",
            },
          }}
          name='DepartureScreen' component={DepartureScreen}/>
          <Stack.Screen
            Options={{
              headerTitle: "RentAir Ghana",
              headerTintColor: "white",
              headerTitleAlign: "left",
              fontWeight: "bold",
              headerStyle: {
                backgroundColor: "orange",
              },
            }}
           
          name ="ResultPageScreen" component ={ResultPageScreen}/>
 
         <Stack.Screen 
          Options={{
            headerTitle: "RentAir Ghana",
            headerTintColor: "white",
            headerTitleAlign: "left",
            fontWeight: "bold",
            headerStyle: {
              backgroundColor: "orange",
            },
          }} 
          name='PaymentScreen' component={PaymentScreen}
          />

<Stack.Screen 
          Options={{
            headerTitle: "RentAir Ghana",
            headerTintColor: "white",
            headerTitleAlign: "left",
            fontWeight: "bold",
            headerStyle: {
              backgroundColor: "orange",
            },
          }} 
          name='DateScreen' component={DateScreen}
          />

          <Stack.Screen
           Options={{
            headerTitle: "RentAir Ghana",
            headerTintColor: "white",
            headerTitleAlign: "left",
            fontWeight: "bold",
            headerStyle: {
              backgroundColor: "orange",
            },
          }} 
          name='CreditCardScreen' component={CreditCardScreen}
          />

        <Stack.Screen
           Options={{
            headerTitle: "RentAir Ghana",
            headerTintColor: "white",
            headerTitleAlign: "left",
            fontWeight: "bold",
            headerStyle: {
              backgroundColor: "orange",
            },
          }} 
          name='MobilePaymentScreen' component={MobilePaymentScreen}
          />

<Stack.Screen
           Options={{
            headerTitle: "RentAir Ghana",
            headerTintColor: "white",
            headerTitleAlign: "left",
            fontWeight: "bold",
            headerStyle: {
              backgroundColor: "orange",
            },
          }} 
          name='DestinationScreen' component={DestinationScreen}
          />

         <Stack.Screen
           Options={{
            headerTitle: "RentAir Ghana",
            headerTintColor: "white",
            headerTitleAlign: "left",
            fontWeight: "bold",
            headerStyle: {
              backgroundColor: "orange",
            },
          }} 
          name='BookingSummaryScreen' component={BookingSummaryScreen}
          />

<Stack.Screen 
          Options={{
            headerTitle: "RentAir Ghana",
            headerTintColor: "white",
            headerTitleAlign: "left",
            fontWeight: "bold",
            headerStyle: {
              backgroundColor: "orange",
            },
          }} 
          name='SignInScreen' component={SignInScreen}
          />


<Stack.Screen 
          Options={{
            headerTitle: "RentAir Ghana",
            headerTintColor: "white",
            headerTitleAlign: "left",
            fontWeight: "bold",
            headerStyle: {
              backgroundColor: "orange",
            },
          }} 
          name='SignUpScreen' component={SignUpScreen}
          /> 
  </Stack.Navigator>
      </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
  backgroundColor:'white'
   
  },
});


export default AppContainer;