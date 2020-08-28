import React from "react";
import { View, StyleSheet, FlatList, Alert } from "react-native";

import colors from "../config/colors";
import ListItem from "../components/lists/ListItem";
import Icon from "../components/Icon";
import ListItemSeparator from "../components/lists/ListItemSeparator";
import routes from "../navigation/routes";

const menuItem = [
  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
    targetScreen: "My Listing",
  },
  {
    title: "My Messaging",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
    targetScreen: routes.MESSAGE,
  },
];

function AccountScreen({ navigation }) {
  return (
    <View style={styles.content}>
      <View style={styles.user}>
        <ListItem
          image={require("../assets/axar.jpg")}
          title="Axar Patel"
          description="akshar3366@gmail.com"
        />
      </View>

      <View style={styles.myContent}>
        <FlatList
          data={menuItem}
          keyExtractor={(item) => item.title}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
              onPress={() => navigation.navigate(item.targetScreen)}
            />
          )}
          ItemSeparatorComponent={ListItemSeparator}
        />
      </View>

      <View style={styles.logout}>
        <ListItem
          IconComponent={
            <Icon name="logout" backgroundColor={colors.warning} />
          }
          title="Log Out"
          onPress={() => {
            Alert.alert("Log Out", "Are you sure you want to log out", [
              {
                text: "Yes",
                onPress: () => navigation.navigate(routes.WELCOME),
              },
              { text: "No" },
            ]);
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  content: { flex: 1, backgroundColor: colors.light },
  logout: { backgroundColor: colors.white },
  myContent: { backgroundColor: colors.white, marginBottom: 20 },
  user: {
    backgroundColor: colors.white,
    marginVertical: 40,
  },
});

export default AccountScreen;
