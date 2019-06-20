import React, { Component } from "react";
import { createAppContainer } from "react-navigation";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";

import persistantStore from "./src/redux/store";

import RootNavigator from "./src/navigators/rootNavigator";

import Loader from "./src/components/Loader";

const { store, persistor } = persistantStore;

const AppContainer = createAppContainer(RootNavigator);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={<Loader />} persistor={persistor}>
          <AppContainer />
        </PersistGate>
      </Provider>
    );
  }
}
