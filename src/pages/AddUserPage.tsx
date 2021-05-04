import React from 'react';
import PageContainer from '../containers/PageContainer';
import UserForm from '../components/UserForm';
import HeaderContainer from '../containers/HeaderContainer';

const AddUserPage: React.FC = () => {
    return (
        <PageContainer className={'add-user-page'}>
            <HeaderContainer headerText='Add user'/>
            <UserForm/>
        </PageContainer>
    );
};

export default AddUserPage;