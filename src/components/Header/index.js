import React from "react";
import { View, SafeAreaView, Text } from "react-native";

import { styles } from "./styles";

export default class Header extends React.PureComponent {
  render() {
    const { title, renderLeft, renderRight } = this.props;

    return (
      <SafeAreaView>
        <View style={styles.container}>
          <Text numberOfLines={1} style={styles.title}>
            {title}
          </Text>
          {renderLeft ? <View style={styles.left}>{renderLeft()}</View> : null}
          {renderRight ? (
            <View style={styles.right}>{renderRight()}</View>
          ) : null}
        </View>
      </SafeAreaView>
    );
  }
}
