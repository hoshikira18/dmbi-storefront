/* eslint-disable @next/next/no-img-element */
'use client';

const ListProductInNewsPage = ({ products }) => {
    return (
        <ul className="flex justify-between md:pb-[10px] md:grid grid-cols-1 gap-5">
            {products?.map((item, index) => (
                <li key={item.id} className="m-0 w-[32%] md:mb-[20px] md:w-5/6 md:max-h-[40vh]">
                    <div className="inline">
                        <div className="w-1/1 md:w-1/1 inline">
                            <div className="h-[22vh] min-h-[200px]">
                                <img
                                    className="h-full w-full object-cover"
                                    src={item.thumbnail}
                                    alt={item.title}
                                />
                            </div>
                            <div className="max-h-[4.5em] md:max-h-[3em] overflow-hidden text-ellipsis text-center mt-[20px]">
                                <p className="inline">
                                    {item.handle}
                                    {index}
                                    kkkk kkkk kkk kkkk kkk kkk kkk kkkkk kkkkkk
                                    kkkkk kkk
                                </p>
                            </div>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default ListProductInNewsPage;
