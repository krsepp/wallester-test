import React from 'react';
import {useParams} from 'react-router';
import PageContainer from '../containers/PageContainer';
import UserList from '../components/UserList';
import {NavLink} from "react-router-dom";
import HeaderContainer from '../containers/HeaderContainer';

const Page: React.FC = () => {
    const { page } = useParams<{ page: string }>();
    const pageNum = +page;

    return (
        <PageContainer>
            <HeaderContainer headerText='Users'>
                <NavLink to='/user/add' className='btn btn-primary ml-3'>
                    Add
                </NavLink>
            </HeaderContainer>
            <UserList page={pageNum}/>
        </PageContainer>
    );
};

export default Page;