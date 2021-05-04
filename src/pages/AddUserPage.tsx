import React from 'react';
import PageContainer from '../containers/PageContainer';
import UserForm from '../components/UserForm';
import {Button} from 'react-bootstrap';
import {useHistory} from 'react-router';

const AddUserPage: React.FC = () => {
    const history = useHistory();

    return (
        <PageContainer className={'add-user-page'}>
            <Button variant='link' className='user-page__back-link' onClick={() => history.goBack()}>&laquo;</Button>
            <h2 className='h2 mb-4'>Create user</h2>
            <UserForm/>
        </PageContainer>
    );
};

export default AddUserPage;