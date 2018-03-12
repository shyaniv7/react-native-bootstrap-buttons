/* @flow weak */

import React from "react";
import PropTypes from "prop-types";
import {
  View,
  Text,
  TouchableOpacity
} from "react-native";
import styles from "./Button.styles.js"
import themes from "./Button.themes.js";

const CURVED = "curved";
const ROUNDED = "rounded";
const SQUARE = "square";

const Button = ({
  onPress,
  label,
  labelStyle,
  containerStyle,
  disabled,
  buttonType,
  curved,
  rounded,
  square,
  outline,
  iconRight,
  iconComponent,
}) => {
  const { themeContainer, themeLabel } = themes[buttonType].style(disabled);
  let buttonStyle = CURVED;

  if ( rounded ) {
    buttonStyle = ROUNDED;
  } else if ( square ) {
    buttonStyle = SQUARE;
  }

  return (
    <TouchableOpacity
      disabled={disabled}
      style={[styles[buttonStyle], themeContainer, containerStyle]}
      onPress={onPress}
    >
      { !iconRight && iconComponent && iconComponent() }
      <Text style={[styles.buttonLabel, themeLabel, labelStyle]}>{label}</Text>
      { iconRight && iconComponent && iconComponent() }
    </TouchableOpacity>
  );
}

Button.defaultProps = {
  label: "",
  containerStyle: {},
  labelStyle: {},
  disabled: false,
  buttonType: "primary",
  onPress: null,
  rounded: false,
  square: false,
  curved: true,
  iconRight: false,
  iconComponent: null
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onPresS: PropTypes.func,
  containerStyle: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number
  ]),
  buttonStyle: PropTypes.oneOf(Object.keys(themes)),
  labelStyle: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number
  ]),
  iconRight: PropTypes.bool,
  iconComponent: PropTypes.any
};
export default Button;
