import { Footer, Header } from '../layout';

const Layout = ({ children }) => {
    return (
        <div className="bg-background min-h-screen">
            <Header />
            <div className="min-h-[80vh]">{children}</div>
            <Footer />
        </div>
    );
};

export default Layout;
