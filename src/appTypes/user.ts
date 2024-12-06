export type User = {
    name: string;
    avatarUrl: string;
    isPro: boolean;
    email: string;
    token: string;
};

export type SomePerson = {
    name: string;
    avatarUrl: string;
    isPro: boolean;
}

export type AuthData = {
    email: string;
    password: string;
}
