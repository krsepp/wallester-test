import React from 'react';
import PageContainer from '../containers/PageContainer';
import UserList from '../components/UserList';
import HeaderContainer from '../containers/HeaderContainer';
import {NavLink} from 'react-router-dom';

const Homepage: React.FC = () => {
    const currentPage: number = 1;

    return (
        <PageContainer className={'homepage'}>
            <HeaderContainer headerText='Users'>
                <NavLink to='/user/add' className='btn btn-primary ml-3'>
                    Add
                </NavLink>
            </HeaderContainer>
            <UserList page={currentPage}/>
        </PageContainer>
    );
};

export default Homepage;