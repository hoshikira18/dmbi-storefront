/* eslint-disable @next/next/no-img-element */
'use client';

const ListNewsInNewsPage = ({news}) => {
    return (
        <div className="sm:w-1/1 md:mr-[10px] bg-green-400 md:w-3/4 lg:w-3/4">
            <ul>
                {news?.map((item, index) => (
                    <li key={item.id} className="p-[15px] block min-h-[225px]">
                        <div
                            className="sm:block md:flex"
                            id={index + 1}
                        >
                            <div className="mr-[20px] inline w-[30vw] min-h-[200px] sm:max-h-[20vh] md:h-[20vh] items-center">
                                <img
                                    className="inline object-cover h-[100%] max-h-[30vw] container"
                                    src={item.image}
                                    alt={item.title}
                                />
                            </div>
                            <div className="relative sm:w-1/1 md:mr-[5vw] min-h-[200px] content-between sm:max-h-[25vh] md:max-h-[30vh] md:w-3/4 sm:pt-[10px] md:pt-0">
                                <div>
                                    <div className="w-[70vw] md:w-[40vw] truncate text-2xl font-medium text-primary">
                                        {index}
                                        kkkkkk kkkkk kkkkkk kkkkkkk kkkkkk
                                        kkkkkk kkkkkk kkkkkk kkkkkk kkkkkk
                                        {item.title}
                                    </div>
                                    <div className="max-h-[4.5em] overflow-hidden text-ellipsis text-justify md:max-h-[7.5em]">
                                        {item.description}
                                        <p className="inline">
                                            Hồ Chí Minh (chữ Nho: 胡志明; 19
                                            tháng 5 năm 1890 – 2 tháng 9 năm
                                            1969), tên khai sinh là Nguyễn Sinh
                                            Cung (chữ Nho: 阮生恭), còn được
                                            biết với tên gọi Bác Hồ, là một nhà
                                            cách mạng và chính khách người Việt
                                            Nam. Ông là người sáng lập Đảng Cộng
                                            sản Việt Nam, từng là Chủ tịch nước
                                            Việt Nam Dân chủ Cộng hoà từ
                                            1945–1969, Thủ tướng Việt Nam Dân
                                            chủ Cộng hòa trong những năm
                                            1945–1955, Tổng Bí thư Ban Chấp hành
                                            Trung ương Đảng Lao động Việt Nam từ
                                            1956–1960, Chủ tịch Ban Chấp hành
                                            Trung ương Đảng Lao động Việt Nam từ
                                            năm 1951 cho đến khi qua đời.
                                        </p>
                                    </div>
                                </div>
                                <div className="mt-[20px] absolute bottom-0 left-0">
                                    <button className="btn w-[100px] rounded border-[2px] border-solid border-primary text-primary md:w-[120px]">
                                        Xem thêm
                                    </button>
                                </div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ListNewsInNewsPage;