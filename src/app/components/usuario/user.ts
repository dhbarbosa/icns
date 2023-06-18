export interface User {
    idUser?: string,
    username: string,
    name?: string,
    password?: string,
    authorities?: {
        authority?: string;
    }[]
}