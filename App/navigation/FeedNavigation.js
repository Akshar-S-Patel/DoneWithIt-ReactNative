import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ListingScreen from "../screens/ListingScreen";
import ListingDetailsScreen from "../screens/ListingDetailsScreen";

const Stack = createStackNavigator();

export default FeedNavigation = () => (
  <Stack.Navigator mode="modal" screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Listing" component={ListingScreen} />
    <Stack.Screen name="ListingsDetails" component={ListingDetailsScreen} />
  </Stack.Navigator>
);
