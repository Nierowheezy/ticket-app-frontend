import {
  GET_ALL_TICKETS,
  GET_USER_TICKETS,
  SELECTED_TICKET,
  UPDATE_TABLE_ENTRIES,
} from "../types";

const intialState = {
  userTickets: [],
  tickets: [],
  selectedTicket: null,
  entries: 0,
};

const ticketReducer = (state = intialState, action) => {
  switch (action.type) {
    case GET_USER_TICKETS:
      return {
        ...state,
        userTickets: action.payload,
      };
    case GET_ALL_TICKETS:
      return {
        ...state,
        tickets: action.payload,
      };
    case UPDATE_TABLE_ENTRIES:
      return {
        ...state,
        entries: action.payload,
      };
    case SELECTED_TICKET:
      return {
        ...state,
        selectedTicket: action.payload,
      };
    default:
      return state;
  }
};

export default ticketReducer;
