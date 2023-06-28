import { FC, PropsWithChildren } from "react";
import Header from "./header/Header";
import Meta from "../seo/Meta";
import { IMeta } from "../seo/meta.interface";
import Footer from "./Footer";
import dynamic from "next/dynamic";

const DynamicFooter = dynamic(() => import("./Footer"), {
    ssr: false,
});

const Layout: FC<PropsWithChildren<IMeta>> = ({
    children,
    title,
    description,
}) => {
    return (
        <Meta title={title} description={description}>
            <Header />
            <main>{children}</main>
            <DynamicFooter />
        </Meta>
    );
};

export default Layout;
