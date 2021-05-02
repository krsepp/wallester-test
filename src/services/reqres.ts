import IListUsers from "../interfaces/IListUsers";

const API_ENDPOINT = 'https://reqres.in/api/';

export async function getListUsers(page: number): Promise<IListUsers> {
    const response = await fetch(`${API_ENDPOINT}users?page=${page}`);
    return await response.json();
}
