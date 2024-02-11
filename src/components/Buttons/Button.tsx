import React from "react";
import { View, Text } from "react-native";
import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors.tsx";
import { TouchableOpacity } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    color: Colors.white,
    fontSize: 20
  },
  button: {
    backgroundColor: Colors.secondary,
    padding: 10,
    margin: 10,
    borderRadius: 20
  },
  buttonText: {
    fontSize: 16,
    paddingHorizontal: 20,
  }
});

const Button = (props: any) => {
  const filledBgColor = props.color || Colors.primary;
  const textColor = props.filled ? Colors.white : Colors.primary;
  const outlinedColor = Colors.white;
  const bgColor = props.filled ? filledBgColor : outlinedColor;

  return (
    <TouchableOpacity
      style={{
        ...styles.button,
        ...{ backgroundColor: bgColor },
        ...props.style
      }}
      onPress={props.onPress}
    >
      <Text style={[styles.buttonText, {...{color: textColor}}]}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
