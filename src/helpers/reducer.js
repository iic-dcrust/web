export const initialState = {
	user: null,
	events: [{ id: 0 }, { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }],
};

const reducer = (state, action) => {
	switch (action.type) {
		case "SET_USER":
			return {
				...state,
				user: action.user,
			};
		case "SET_EVENTS":
			return {
				...state,
				events: action.events,
			};

		default:
			return state;
	}
};

export default reducer;
