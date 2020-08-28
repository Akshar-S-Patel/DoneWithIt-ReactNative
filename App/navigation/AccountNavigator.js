import React from "react";
import { StyleSheet, FlatList } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import AccountScreen from "./../screens/AccountScreen";
import MessagesScreen from "./../screens/MessagesScreen";
import routes from "./routes";
import colors from "../config/colors";
import Screen from "./../components/Screen";
import Card from "./../components/Card";

const Stack = createStackNavigator();

export default AccountNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name={routes.ACCOUNT} component={AccountScreen} />
    <Stack.Screen name={routes.MESSAGE} component={MessagesScreen} />
    <Stack.Screen name="My Listing" component={demo} />
  </Stack.Navigator>
);

const Listings = [
  {
    id: 1,
    title: "Red Jacket for sale",
    price: 100,
    image: require("../assets/jacket.jpg"),
  },
  {
    id: 2,
    title: "Couch in great condition",
    price: 1000,
    image: require("../assets/couch.jpg"),
  },
];

function demo({ style, navigation }) {
  return (
    <Screen style={[styles.screen, style]}>
      <FlatList
        data={Listings}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={`$ ${item.price}`}
            url={item.image}
            onPress={() => navigation.navigate("ListingsDetails", item)}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
  },
});
