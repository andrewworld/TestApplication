import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export default class ClientsListItem extends React.PureComponent {
  onPress = () => {
    const { onPress, client } = this.props;

    onPress(client);
  };

  onLongPress = () => {
    const { onLongPress, client } = this.props;

    onLongPress(client);
  };

  render() {
    const {
      client: { firstName, lastName, phone }
    } = this.props;

    return (
      <TouchableOpacity
        onLongPress={this.onLongPress}
        onPress={this.onPress}
        style={styles.container}
      >
        <View style={styles.initialsContainer}>
          <Text style={styles.initials}>
            {firstName[0].toUpperCase() + lastName[0].toUpperCase()}
          </Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.name}>
            {firstName} {lastName}
          </Text>
          <Text style={styles.phoneNumber}>{phone}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}
