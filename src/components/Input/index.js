import React from "react";
import { View, TextInput, Text } from "react-native";
import PropTypes from "prop-types";

import { styles } from "./styles";

export default class Input extends React.PureComponent {
  onChangeText = text => {
    const { field, onChange } = this.props;

    onChange(text, field);
  };

  render() {
    const { placeholder, value, label, keyboardType } = this.props;

    return (
      <View style={styles.container}>
        {label ? <Text style={styles.label}>{label}</Text> : null}
        <TextInput
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#222222"
          keyboardType={keyboardType}
          style={styles.input}
          onChangeText={this.onChangeText}
        />
      </View>
    );
  }
}
