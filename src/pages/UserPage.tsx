import React from 'react';
import {useParams} from 'react-router';
import PageContainer from '../containers/PageContainer';
import User from '../components/User';

const UserPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const idNum = +id;

    return (
      <PageContainer className={'user-page'}>
          <User id={idNum}/>
      </PageContainer>
    );
};

export default UserPage;