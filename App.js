import React from "react";
import { StyleSheet, Text, View ,Animated, Easing, Platform} from "react-native";
import WelcomePageScreen from "./src/screens/WelcomePageScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import DataScreen from "./src/screens/DateScreen";
import PassengersScreen from "./src/screens/PassengersScreen";
import DepartureScreen from "./src/screens/DepartureScreen";
import Departure from './src/Departure'
import ResultPageScreen from './src/screens/ResultPageScreen';
import PaymentScreen from './src/screens/PaymentScreen';
import CreditCardScreen from './src/screens/CreditCardScreen'
import MobilePaymentScreen from "./src/screens/MobilePaymentScreen";
import BookingSummaryScreen from './src/screens/BookingSummaryScreen'
import SignInScreen from './src/screens/SignInScreen'
import SignUpScreen from './src/screens/SignUpScreen';
import WelcomeHomeScreen from './src/screens/WelcomeHomeScreen'


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



export default function App() {
  return (
    <View style={styles.container}>

      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerTitle: "RentAir Ghana",
            headerTintColor: "white",
            headerTitleAlign: "left",
            fontWeight: "bold",

            headerStyle: {
              backgroundColor: "orange",
            },
          }}
        >

          <Stack.Screen name="WelcomePageScreen" component={WelcomePageScreen} />
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
    </View>
  );js
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 1,
    flex: 1,
  },
});
