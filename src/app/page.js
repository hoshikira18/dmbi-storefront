import { Banner } from '@/components/sections/home';
import AboutSection from '@/components/sections/home/about';

export const metadata = {
    title: 'DMB Industrial',
    description:
        'DMB Industrial, chuyên cung cấp các sản phẩm công nghiệp, máy móc, thiết bị công nghiệp, dịch vụ sửa chữa, bảo trì máy móc công nghiệp',
};

export default function Home() {
    return (
        <main className="mx-auto max-w-screen-xl">
            <Banner />
            <AboutSection />
        </main>
    );
}
