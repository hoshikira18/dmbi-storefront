/* eslint-disable @next/next/no-img-element */
const BodyOfNews = ({news, number, page}) => {
    return (
        <div className="flex">
                <div className="sm:w-1/1 mr-[10px] bg-green-400 md:w-3/4 lg:w-3/4">
                    <ul>
                        {news?.map((item, index) =>
                            index >= number * (page - 1) &&
                            index < number * page ? (
                                <li key={item.id} className="p-[15px]">
                                    <div
                                        className="sm:block md:flex lg:flex"
                                        id={index + 1}
                                    >
                                        <div className="mr-[20px] inline w-[25vw] pt-[10px] sm:h-[20vh] md:h-[30vh] lg:h-[30vh]">
                                            <img
                                                className="inline h-full w-full"
                                                src={item.image}
                                                alt="news image"
                                            />
                                        </div>
                                        <div className="sm:w-1/1 mr-[5vw] grid content-between pt-[10px] sm:h-[30vh] md:h-[30vh] md:w-3/4">
                                            <div>
                                                <div className="max-w-[40vw] truncate text-2xl font-medium text-primary">
                                                    {index}
                                                    kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk
                                                    {item.title}
                                                </div>
                                                <div className="max-h-[4.5em] overflow-hidden text-ellipsis text-justify md:max-h-[7.5em]">
                                                    {item.description}
                                                    <p className="inline">
                                                        Hồ Chí Minh (chữ Nho:
                                                        胡志明; 19 tháng 5 năm
                                                        1890 – 2 tháng 9 năm
                                                        1969), tên khai sinh là
                                                        Nguyễn Sinh Cung (chữ
                                                        Nho: 阮生恭), còn được
                                                        biết với tên gọi Bác Hồ,
                                                        là một nhà cách mạng và
                                                        chính khách người Việt
                                                        Nam. Ông là người sáng
                                                        lập Đảng Cộng sản Việt
                                                        Nam, từng là Chủ tịch
                                                        nước Việt Nam Dân chủ
                                                        Cộng hoà từ 1945–1969,
                                                        Thủ tướng Việt Nam Dân
                                                        chủ Cộng hòa trong những
                                                        năm 1945–1955, Tổng Bí
                                                        thư Ban Chấp hành Trung
                                                        ương Đảng Lao động Việt
                                                        Nam từ 1956–1960, Chủ
                                                        tịch Ban Chấp hành Trung
                                                        ương Đảng Lao động Việt
                                                        Nam từ năm 1951 cho đến
                                                        khi qua đời.
                                                    </p>
                                                </div>
                                            </div>
                                            <div>
                                                <button className="btn w-[80px] rounded border-[2px] border-solid border-primary text-primary md:w-[120px]">
                                                    Xem thêm
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ) : null
                        )}
                    </ul>
                </div>
                <div className="mr-[10px] hidden w-1/4 bg-red-400 md:flex lg:flex">
                    kaka
                </div>
            </div>
    );
};

export default BodyOfNews;