import Sidebar from "@components/Sidebar";
import Head from "next/head";

interface LayoutProps {
  children?: any;
  title?: string;
}

const Layout = ({ children, title }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{title || "Jambook"}</title>
        <meta name="description" content="Jambook - Headless CMS with a zen content editor." />
      </Head>
      <Sidebar />
      <main className="jb-container">{children}</main>
    </>
  );
};

export default Layout;
