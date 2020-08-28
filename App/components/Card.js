import React from "react";
import { View, StyleSheet, Image } from "react-native";
import AppText from "./AppText";

import colors from "../config/colors";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

function Card({ title, subTitle, url, onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <Image style={styles.image} source={url} />
        <View style={styles.detailsContainer}>
          <AppText style={styles.title} numberOfLines={1}>
            {title}
          </AppText>
          <AppText style={styles.subTitle} numberOfLines={2}>
            {subTitle}
          </AppText>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    borderRadius: 15,
    overflow: "hidden",
    margin: 15,
    marginBottom: 0,
  },
  detailsContainer: {
    padding: 15,
  },
  image: {
    width: "100%",
    height: 150,
  },
  subTitle: {
    fontWeight: "bold",
    color: colors.secondary,
  },
  title: {
    marginBottom: 5,
  },
});

export default Card;
