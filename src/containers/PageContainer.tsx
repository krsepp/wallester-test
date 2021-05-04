import React from 'react';
import IPageContainerProps from '../interfaces/IPageContainerProps';

const PageContainer: React.FC<IPageContainerProps> = ({ className, children }) => {
    return (
        <div className={`page ${className || ''} p-3`}>
            {children}
        </div>
    );
};

export default PageContainer;