import React from 'react';
import IPageContainerProps from '../interfaces/IPageContainerProps';
import Navigation from '../components/Navigation';

const PageContainer: React.FC<IPageContainerProps> = ({ className, children }) => {
    return (
        <div className={`page ${className || ''} p-3`}>
            <Navigation/>
            {children}
        </div>
    );
};

export default PageContainer;