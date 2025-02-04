import { initialUserState, UserAction, UserState } from "../types/User";

const userReducer = (state: UserState, action: UserAction): UserState => {
    switch (action.type) {
        case "REGISTER":
        case "LOGIN":
            return {
                user: action.payload || initialUserState.user,
                isAuthenticated: !!action.payload
            };
        case "UPDATE":
            if (action.payload) {
                return {
                    ...state,
                    user: {
                        ...state.user,
                        ...action.payload,
                    },
                    isAuthenticated: true
                };
            }
            return state;
        case "LOGOUT":
            return initialUserState;
        default:
            return state;
    }
};

export default userReducer;