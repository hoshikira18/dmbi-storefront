import Button from '@/components/common/button';
import {
    Uses,
    Banner,
    BestSelling,
    AboutSection,
    PriceRequest,
    PartnersSection,
    News,
} from '@/components/sections/home';

export const metadata = {
    title: 'DMB Industrial',
    description:
        'DMB Industrial, chuyên cung cấp các sản phẩm công nghiệp, máy móc, thiết bị công nghiệp, dịch vụ sửa chữa, bảo trì máy móc công nghiệp',
};

export const dynamic = 'force-dynamic';

export default function Home() {
    return (
        <main className="mx-auto max-w-screen-xl">
            <Banner />
            <AboutSection />
            <PartnersSection />
            <Uses />
            <div className="my-10 flex flex-col items-center justify-between space-y-3 px-10 md:flex-row md:space-x-10 md:space-y-0 md:px-16">
                <Button className="w-full py-5 md:w-1/3">Tư vấn</Button>
                <Button className="w-full py-5 md:w-1/3">Nhận báo giá</Button>
                <Button className="w-full py-5 md:w-1/3">
                    Giới thiệu khách
                </Button>
            </div>
            <BestSelling />
            <div className="mb-20 grid grid-cols-4 gap-8 px-5 md:px-7 lg:grid-cols-3 lg:px-5 xl:px-0">
                <PriceRequest className="col-span-4 md:col-span-2 lg:col-span-1" />
                <News className="col-span-4 md:col-span-2 lg:col-span-2" />
            </div>
        </main>
    );
}
