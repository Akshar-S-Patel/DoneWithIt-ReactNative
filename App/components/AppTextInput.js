import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import defaultStyle from "../config/styles";

function AppTextInput({ icon, width = "100%", ...otherProps }) {
  return (
    <View style={[styles.container, { width }]}>
      {icon && (
        <MaterialCommunityIcons
          style={styles.icon}
          name={icon}
          size={25}
          color={defaultStyle.colors.medium}
        />
      )}
      <TextInput
        placeholderTextColor={defaultStyle.colors.medium}
        style={[defaultStyle.text, { width: "100%" }]}
        {...otherProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyle.colors.light,
    borderRadius: 25,
    flexDirection: "row",
    padding: 10,
    marginVertical: 10,
    width: "100%",
  },
  icon: {
    marginRight: 10,
  },
});

export default AppTextInput;
