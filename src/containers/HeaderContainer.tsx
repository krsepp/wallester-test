import React from 'react';

interface IHeaderContainerProps {
    headerText: string
}

const HeaderContainer: React.FC<IHeaderContainerProps> = ({ children, headerText }) => {
    return (
        <div className='mb-4 d-flex align-items-baseline'>
            <h1 className='h4'>{headerText}</h1>
            {children}
        </div>
    );
};

export default HeaderContainer;