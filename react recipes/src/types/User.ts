export interface User {
    id?: number;
    email: string;
    password?: string;
    firstName: string;
    lastName: string;
    address: string;
    phone: string;
}

export type UserRegistration = Required<Pick<User, 'email' | 'password'>> & Omit<User, 'id'>;

export type UserUpdate = Omit<User, 'password'>;

export interface UserResponse {
    userId: number;
    user?: User;
}

export interface UserState {
    user: User;
    isAuthenticated: boolean;
}

export type UserActionType = "LOGIN" | "REGISTER" | "UPDATE" | "LOGOUT";

export interface UserAction {
    type: UserActionType;
    payload: User | null;
}

export const initialUserState: UserState = {
    user: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        address: "",
        phone: "",
    },
    isAuthenticated: false
};