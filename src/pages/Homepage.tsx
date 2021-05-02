import React from "react";
import PageContainer from "../containers/PageContainer";
import {UserList} from "../components/UserList";

const Homepage: React.FC = () => {
    const currentPage: number = 1;

    return (
        <PageContainer className={'homepage'}>
            <UserList page={currentPage}/>
        </PageContainer>
    );
};

export default Homepage;