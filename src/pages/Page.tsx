import React from 'react';
import {useParams} from 'react-router';
import PageContainer from '../containers/PageContainer';
import UserList from '../components/UserList';

const Page: React.FC = () => {
    const { page } = useParams<{ page: string }>();
    const pageNum = +page;

    return (
        <PageContainer>
            <UserList page={pageNum}/>
        </PageContainer>
    );
};

export default Page;