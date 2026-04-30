import { ReactNode } from "react";

interface LayoutProps {
    children: ReactNode;
    className?: string;
}

const Layout = ({ children, className = "" }: LayoutProps) => {
    return (
        <div className={`w-full h-full inline-block z-0 bg-light dark:bg-dark ${className}`}>
            {children}
        </div>
    );
};

export default Layout;
