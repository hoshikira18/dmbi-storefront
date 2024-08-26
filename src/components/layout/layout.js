import { Footer, Header } from '../layout';

export const revalidate = 60 * 2000;
// export const dynamic = 'force-dynamic';

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen bg-background">
            <Header />
            <div className="min-h-[80vh]">{children}</div>
            <Footer />
        </div>
    );
};

export default Layout;
