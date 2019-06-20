import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { connect } from "react-redux";
import { KeyboardAwareScrollView as ScrollView } from "react-native-keyboard-aware-scroll-view";

import { addOrUpdateClient, deleteClient } from "../../redux/dataActions";
import Header from "../../components/Header";
import Input from "../../components/Input";
import { styles } from "./styles";

class ClientDetailScreen extends React.PureComponent {
  state = {
    firstName: this.client ? this.client.firstName : "",
    lastName: this.client ? this.client.lastName : "",
    email: this.client ? this.client.email : "",
    phone: this.client ? this.client.phone : ""
  };

  get client() {
    return (
      this.props.id && this.props.data.find(({ id }) => id === this.props.id)
    );
  }

  get disabled() {
    const { firstName, lastName, email, phone } = this.state;

    return !firstName || !lastName || !email || !phone;
  }

  setValue = (value, field) => this.setState({ [field]: value });

  onSavePress = () => {
    const { addOrUpdateClient, goBack } = this.props;
    const { firstName, lastName, email, phone } = this.state;

    addOrUpdateClient({ firstName, lastName, email, phone });

    goBack();
  };

  onDeletePress = () => {
    const { id, deleteClient, goBack } = this.props;

    deleteClient(id);

    goBack();
  };

  renderHeaderRight = () => (
    <TouchableOpacity
      disabled={this.disabled}
      style={[
        styles.headerRightContainer,
        this.disabled && styles.headerRightContainerDisabled
      ]}
      onPress={this.onSavePress}
    >
      <Text style={styles.headerRightText}>Save</Text>
    </TouchableOpacity>
  );

  renderHeaderLeft = () => (
    <TouchableOpacity onPress={this.props.goBack}>
      <Text style={styles.headerLeft}>Cancel</Text>
    </TouchableOpacity>
  );

  render() {
    const { firstName, lastName, email, phone } = this.state;

    return (
      <View style={styles.container}>
        <Header
          extraData={this.disabled}
          title={
            this.client
              ? `${this.client.firstName} ${this.client.lastName}`
              : "New Client"
          }
          renderRight={this.renderHeaderRight}
          renderLeft={this.renderHeaderLeft}
        />
        <ScrollView style={styles.container}>
          <Input
            placeholder="Client First Name"
            label="First Name"
            field="firstName"
            value={firstName}
            onChange={this.setValue}
          />
          <Input
            placeholder="Client Last Name"
            label="Last Name"
            field="lastName"
            value={lastName}
            onChange={this.setValue}
          />
          <Input
            placeholder="Client Phone"
            label="Phone"
            field="phone"
            keyboardType="phone-pad"
            value={phone}
            onChange={this.setValue}
          />
          <Input
            placeholder="Client Email"
            label="Email"
            field="email"
            keyboardType="email-address"
            value={email}
            onChange={this.setValue}
          />
          {this.client ? (
            <TouchableOpacity onPress={this.onDeletePress}>
              <Text style={styles.deleteButton}>Delete Client</Text>
            </TouchableOpacity>
          ) : null}
        </ScrollView>
      </View>
    );
  }
}

export default connect(
  ({ data }) => ({ data }),
  (dispatch, { id }) => ({
    addOrUpdateClient: client => dispatch(addOrUpdateClient({ ...client, id })),
    deleteClient: id => dispatch(deleteClient(id))
  })
)(ClientDetailScreen);
