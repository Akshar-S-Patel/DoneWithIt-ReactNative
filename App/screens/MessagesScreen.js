import React, { useState } from "react";
import { FlatList, StyleSheet } from "react-native";

import ListItem from "../components/lists/ListItem";
import Screen from "../components/Screen";
import ListItemSeparator from "../components/lists/ListItemSeparator";
import ListItemDeleteAction from "../components/lists/ListItemDeleteAction";

const initialMessage = [
  {
    id: 1,
    title: "Akshar",
    des: "Patel",
    img: require("../assets/axar.jpg"),
  },
  {
    id: 2,
    title: "Axar",
    des: "Patel",
    img: require("../assets/axar.jpg"),
  },
  {
    id: 3,
    title: "Axar",
    des: "Patel",
    img: require("../assets/axar.jpg"),
  },
  {
    id: 4,
    title: "Axar",
    des: "Patel",
    img: require("../assets/axar.jpg"),
  },
  {
    id: 5,
    title: "Axar",
    des: "Patel",
    img: require("../assets/axar.jpg"),
  },
];

function MessagesScreen() {
  const [messages, setMessages] = useState(initialMessage);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (item) => {
    setMessages(messages.filter((m) => m.id !== item.id));
  };

  return (
    <Screen style={styles.screen}>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            image={item.img}
            title={item.title}
            description={item.des}
            onPress={() => console.log(item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
            showClover
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 1,
              title: "Akshar",
              des: "Patel",
              img: require("../assets/axar.jpg"),
            },
            {
              id: 2,
              title: "Axar",
              des: "Patel",
              img: require("../assets/axar.jpg"),
            },
          ]);
        }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default MessagesScreen;
