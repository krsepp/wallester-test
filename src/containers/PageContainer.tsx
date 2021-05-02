import React from "react";
import IPageContainerProps from "../interfaces/IPageContainerProps";

const PageContainer: React.FC<IPageContainerProps> = ({className, children}) => {
    return (
        <div className={`py-4 page ${className || ''}`}>
            {children}
        </div>
    );
};

export default PageContainer;