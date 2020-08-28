import React from "react";
import { View, Image, StyleSheet, TouchableHighlight } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";

import AppText from "../AppText";
import colors from "../../config/colors";
import Icon from "../Icon";

function ListItem({
  showClover,
  image,
  title,
  description,
  onPress,
  renderRightActions,
  IconComponent,
}) {
  return (
    <Swipeable renderRightActions={renderRightActions} onPress={onPress}>
      <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
        <View style={styles.container}>
          {!image && IconComponent}
          {image && <Image style={styles.image} source={image} />}
          <View style={styles.detailContainer}>
            <AppText style={styles.title} numberOfLines={1}>
              {title}
            </AppText>
            {description && (
              <AppText style={styles.subTitle} numberOfLines={2}>
                {description}
              </AppText>
            )}
          </View>
          {showClover && (
            <Icon
              name="chevron-right"
              backgroundColor={colors.white}
              iconColor={colors.medium}
              style={styles.chevron}
            />
          )}
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  chevron: {
    alignSelf: "center",
  },
  container: {
    flexDirection: "row",
    padding: 10,
  },
  detailContainer: {
    flex: 1,
    marginLeft: 10,
    justifyContent: "center",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  subTitle: {
    color: colors.medium,
  },
  title: {
    fontWeight: "bold",
  },
});

export default ListItem;
