import React from "react";
import {useParams, useHistory} from "react-router";
import {Button} from "react-bootstrap";
import PageContainer from "../containers/PageContainer";
import {User} from "../components/User";

const UserPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    let idNum = +id;
    let history = useHistory();

    return (
      <PageContainer className={'user-page'}>
          <Button variant='link' className='user-page__back-link' onClick={() => history.goBack()}>&laquo;</Button>
          <User id={idNum}/>
      </PageContainer>
    );
};

export default UserPage;