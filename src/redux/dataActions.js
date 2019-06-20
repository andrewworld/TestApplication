import { ADD_OR_UPDATE_CLIENT, DELETE_CLIENT } from "../utils/constants";

export function addOrUpdateClient(client) {
  return {
    type: ADD_OR_UPDATE_CLIENT,
    payload: client
  };
}

export function deleteClient(id) {
  return {
    type: DELETE_CLIENT,
    payload: id
  };
}
