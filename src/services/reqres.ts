import IListUsers from "../interfaces/IListUsers";
import ISingleUser from "../interfaces/ISingleUser";

const API_ENDPOINT = 'https://reqres.in/api/';

export async function getListUsers(page: number): Promise<IListUsers> {
    const response = await fetch(`${API_ENDPOINT}users?page=${page}`);
    return await response.json();
}

export async function getSingleUser(id: number): Promise<ISingleUser> {
    const response = await fetch(`${API_ENDPOINT}users/${id}`);
    return await response.json();
}
