import React from "react";
import { Text } from "react-native";
import { KeyboardAwareSectionList as SectionList } from "react-native-keyboard-aware-scroll-view";

import ClientListItem from "../ClientListItem";
import { styles } from "./styles";

export default class ClientsList extends React.PureComponent {
  get sections() {
    const { data } = this.props;

    const sections = data.reduce((prev, curr) => {
      const title = curr.firstName[0];

      if (!prev[title]) prev[title] = { title, data: [curr] };
      else prev[title].data.push(curr);

      return prev;
    }, {});

    return Object.values(sections);
  }

  keyExtractor = ({ id }) => id;

  renderItem = ({ item: client }) => {
    const { onItemPress } = this.props;

    return <ClientListItem client={client} onPress={onItemPress} />;
  };

  renderHeader = ({ section: { title } }) => (
    <Text style={styles.sectionHeader}>{title}</Text>
  );

  render() {
    return (
      <SectionList
        keyboardShouldPersistTaps="always"
        sections={this.sections}
        renderItem={this.renderItem}
        renderSectionHeader={this.renderHeader}
        keyExtractor={this.keyExtractor}
      />
    );
  }
}
