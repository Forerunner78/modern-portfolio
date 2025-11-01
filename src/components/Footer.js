import Layout from "./Layout";
import UnderlinedLink from "./UnderlinedLink";
import { colors } from "../styles/theme";

const Footer = () => {
    return (
        <footer className="w-full border-t border-gray-200 dark:border-neutral-800 bg-gray-50/95 dark:bg-neutral-900/95 shadow-[0_-1px_3px_rgba(0,0,0,0.05)] dark:shadow-[0_-1px_3px_rgba(0,0,0,0.3)] backdrop-blur-sm mt-16">
            <Layout className="max-w-6xl mx-auto px-8 py-8 flex items-center justify-between gap-12 xs:flex-col">
                <div className="flex flex-row items-center">
                    <div className={`${colors.text.base} text-sm font-medium text-balance`}>
                        Build with{" "}
                        <span className={colors.text.violet}>&#9825;</span>
                        {" "}by{" "}
                        <UnderlinedLink href="https://github.com/Forerunner78" className={colors.text.violet} >
                            Alexandre Ribault
                        </UnderlinedLink>
                    </div>
                </div>

                <div className="flex flex-col items-end text-sm text-gray-500 dark:text-gray-400 xs:items-center xs:mt-6">
                    <div className="mb-2 font-medium">{new Date().getFullYear()} &copy; All Rights Reserved</div>
                    <div className="text-xs">
                        Thanks to{" "}
                        <UnderlinedLink href="https://github.com/codebucks27" className={colors.text.violet}>
                            CodeBucks
                        </UnderlinedLink>
                    </div>
                </div>
            </Layout>
        </footer>
    );
};
export default Footer;
