import React from "react";
import { createStackNavigator } from "react-navigation";

import ClientsScreen from "../screens/ClientsScreen";
import ClientDetailScreen from "../screens/ClientDetailScreen";

import { CLIENTS_SCREEN, CLIENT_DETAIL_SCREEN } from "../utils/constants";

export default createStackNavigator(
  {
    [CLIENTS_SCREEN]: {
      screen: ({ screenProps, navigation }) => (
        <ClientsScreen
          {...screenProps}
          openDetail={id => navigation.navigate(CLIENT_DETAIL_SCREEN, { id })}
        />
      )
    },
    [CLIENT_DETAIL_SCREEN]: {
      screen: ({ screenProps, navigation: { goBack, state } }) => (
        <ClientDetailScreen
          {...screenProps}
          goBack={() => goBack()}
          id={state.params && state.params.id}
        />
      )
    }
  },
  { headerMode: "none" }
);
