import React from "react";
import IPageContainerProps from "../interfaces/IPageContainerProps";

const PageContainer: React.FC<IPageContainerProps> = ({className, children}) => {
    return (
        <div className={`page ${className || ''} py-4`}>
            {children}
        </div>
    );
};

export default PageContainer;