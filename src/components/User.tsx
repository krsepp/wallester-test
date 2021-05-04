import React, {useEffect, useState} from 'react';
import IUserProps from '../interfaces/IUserProps';
import ISingleUser from '../interfaces/ISingleUser';
import {getSingleUser} from '../services/reqres';
import {Table} from 'react-bootstrap';
import HeaderContainer from "../containers/HeaderContainer";

const User: React.FC<IUserProps> = ({ id }) => {
    const [user, setUser] = useState<ISingleUser|null>(null);

    useEffect(() => {
        getSingleUser(id).then(user => setUser(user));
    }, [id]);

    return user !== null ? (
        <div className='user'>
            <HeaderContainer headerText={`${user.data.first_name} ${user.data.last_name}`}/>

            <Table responsive hover>
                <thead>
                    <tr>
                        <th scope='col'>avatar</th>
                        <th scope='col'>id</th>
                        <th scope='col'>First</th>
                        <th scope='col'>Last</th>
                        <th scope='col'>email</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <img src={user.data.avatar} alt='user avatar' className='img-fluid user-avatar'/>
                        </td>
                        <th scope='row'>{user.data.id}</th>
                        <td>{user.data.first_name}</td>
                        <td>{user.data.last_name}</td>
                        <td>{user.data.email}</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    ) : (
        <p>No user</p>
    );
};

export default User;