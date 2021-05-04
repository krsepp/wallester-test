import React from 'react';
import {NavLink} from 'react-router-dom';

const UserListHeader: React.FC = () => {
    return (
        <div className='mb-4 d-flex justify-content-between align-items-baseline'>
            <h2 className='h2'>Users</h2>
            <NavLink to='/user/add' className='btn btn-primary'>
                Add
            </NavLink>
        </div>
    );
};

export default UserListHeader;