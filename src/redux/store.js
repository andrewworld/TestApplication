import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-community/async-storage";

import rootReducer from "./dataReducer";

const store = createStore(
  persistReducer({ key: "root", storage: AsyncStorage }, rootReducer)
);

const persistor = persistStore(store);

export default { store, persistor };
