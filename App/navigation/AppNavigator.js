import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import ListingEditingScreen from "./../screens/ListingEditingScreen";
import FeedNavigation from "./FeedNavigation";
import AccountNavigator from "./AccountNavigator";
import NewListingButton from "./NewListingButton";
import routes from "./routes";

const Tab = createBottomTabNavigator();

export default TabNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen
      name={routes.FEED_NAVIGATION}
      component={FeedNavigation}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name={routes.LISTING_EDITING_SCREEN}
      component={ListingEditingScreen}
      options={({ navigation }) => ({
        tabBarButton: () => (
          <NewListingButton onPress={() => navigation.navigate("Edit")} />
        ),
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons
            name="plus-circle"
            color={color}
            size={size}
          />
        ),
      })}
    />
    <Tab.Screen
      name={routes.ACCOUNT}
      component={AccountNavigator}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="account" color={color} size={size} />
        ),
      }}
    />
  </Tab.Navigator>
);
