import React from "react";
import { View, ActivityIndicator } from "react-native";

import { styles } from "./styles";

export default class Loader extends React.PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator animating color="#fff" />
      </View>
    );
  }
}
