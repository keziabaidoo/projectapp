import React from "react";
import { StyleSheet, Text, View } from "react-native";
import WelcomePageScreen from "./src/screens/WelcomePageScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import DataScreen from "./src/screens/DateScreen";
import PassengersScreen from "./src/screens/PassengersScreen";
import DepartureScreen from "./src/screens/DepartureScreen";


const Stack = createStackNavigator();

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
          <Stack.Screen name="WelcomePage" component={WelcomePageScreen} />
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
