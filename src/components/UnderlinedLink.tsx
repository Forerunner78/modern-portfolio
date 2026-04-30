import Link from "next/link";
import { useRouter } from "next/router";
import { ComponentProps, ReactNode } from "react";

type LinkProps = ComponentProps<typeof Link>;

interface UnderlinedLinkProps extends Omit<LinkProps, "children"> {
    children: ReactNode;
    className?: string;
}

const UnderlinedLink = ({ href, children, className = "", ...props }: UnderlinedLinkProps) => {
    const router = useRouter();
    const isActive = router.asPath === href;

    return (
        <Link href={href} className={`${className} relative group`} {...props}>
            {children}
            <span
                className={`h-[1.5px] inline-block absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
                    isActive ? "w-full" : "w-0"
                } bg-current`}
            >
                &nbsp;
            </span>
        </Link>
    );
};

export default UnderlinedLink;
