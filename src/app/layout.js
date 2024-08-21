'use client';
import { Inter } from 'next/font/google';
import './globals.css';
import { MedusaProvider } from 'medusa-react';
import { QueryClient } from '@tanstack/react-query';
import { Layout } from '@/components/layout';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const queryClient = new QueryClient();
const inter = Inter({ subsets: ['latin'] });

const MedusaClient = ({ children }) => {
    return (
        <MedusaProvider
            queryClientProviderProps={{ client: queryClient }}
            baseUrl={
                process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:9000'
            }
        >
            {children}
        </MedusaProvider>
    );
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Layout>
                    <ToastContainer />
                    <MedusaClient>{children}</MedusaClient>
                </Layout>
            </body>
        </html>
    );
}
