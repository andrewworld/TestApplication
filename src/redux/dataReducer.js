import cuid from "cuid";
import { ADD_OR_UPDATE_CLIENT, DELETE_CLIENT } from "../utils/constants";

const initialState = {
  data: []
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ADD_OR_UPDATE_CLIENT:
      const newData = [...state.data];

      if (!payload.id) {
        newData.push({ ...payload, id: cuid() });
      } else {
        const index = newData.findIndex(({ id }) => id === payload.id);

        newData[index] = { ...payload };
      }

      return { ...state, data: newData };
    case DELETE_CLIENT:
      return {
        ...state,
        data: state.data.filter(({ id }) => id !== payload)
      };
    default:
      return state;
  }
}
