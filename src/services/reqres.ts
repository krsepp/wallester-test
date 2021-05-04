import IListUsers from '../interfaces/IListUsers';
import ISingleUser from '../interfaces/ISingleUser';

const API_ENDPOINT = 'https://reqres.in/api/';

export async function getListUsers(page: number): Promise<IListUsers> {
    const response = await fetch(`${API_ENDPOINT}users?page=${page}`);
    return await response.json();
}

export async function getSingleUser(id: number): Promise<ISingleUser> {
    const response = await fetch(`${API_ENDPOINT}users/${id}`);
    return await response.json();
}

export async function createUser(name: string, job: string) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let body = JSON.stringify({
        'name': name,
        'job': job
    });

    let requestOptions: object = {
        method: 'POST',
        headers: headers,
        body: body,
    };

    const response = await fetch(`${API_ENDPOINT}users`, requestOptions);
    return await response.json();
}
