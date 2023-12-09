import scss from '@/styles/Layout.module.scss';
import { useSession } from "next-auth/react";
import SideBar from "@/components/Layout/SideBar/SideBar";
import Header from "@/components/Layout/Header/Header";
import Footer from './Footer/Footer';


const Layout = ({ children } : {children: React.ReactNode}) => {
  const { data: session } = useSession();

  return (
    <>
      <Header />
      <main 
        className={scss.layout}
        style={{ padding: session ? "0 24px 0 80px" : 0 }}
      >
        {session && <SideBar />}
        <div className={scss.content}>
          {children}
        </div>
        <Footer />
      </main>
    </>
  );
};

export default Layout;