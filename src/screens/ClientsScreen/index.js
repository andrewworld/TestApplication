import React from "react";
import { View, TouchableOpacity, TextInput, Text } from "react-native";
import { connect } from "react-redux";

import { deleteClient } from "../../redux/dataActions";
import ClientsList from "../../components/ClientsList";
import Header from "../../components/Header";
import { styles } from "./styles";
import { filterByText } from "../../utils/utils";

class ClientsScreen extends React.PureComponent {
  state = { searchText: "" };

  get data() {
    const { data } = this.props;
    const { searchText } = this.state;

    return data.filter(client =>
      filterByText(client, searchText, [
        `${client.firstName} ${client.lastName}`
      ])
    );
  }

  setSearchText = searchText => this.setState({ searchText });

  onItemPress = ({ id }) => this.props.openDetail(id);

  onItemLongPress = ({ id }) => this.props.deleteClient(id);

  onHeaderRightPress = () => this.props.openDetail();

  renderHeaderRight = () => (
    <TouchableOpacity
      style={styles.headerRightContainer}
      onPress={this.onHeaderRightPress}
    >
      <Text style={styles.headerRightText}>Add</Text>
    </TouchableOpacity>
  );

  render() {
    const { searchText } = this.state;

    return (
      <View style={styles.container}>
        <Header title="Clients" renderRight={this.renderHeaderRight} />
        <TextInput
          placeholderTextColor="#777777"
          placeholder="Search client by name, phone or email"
          value={searchText}
          style={styles.search}
          onChangeText={this.setSearchText}
        />
        <ClientsList
          data={this.data}
          onItemPress={this.onItemPress}
          onItemLongPress={this.onItemLongPress}
        />
      </View>
    );
  }
}

export default connect(
  ({ data }) => ({ data }),
  dispatch => ({
    deleteClient: id => dispatch(deleteClient(id))
  })
)(ClientsScreen);
