const UsesCardSkeleton = () => {
    return (
        <div className="space-y-4 rounded bg-white p-3">
            <div className="h-[200px] animate-pulse rounded bg-gray-300 duration-75"></div>
            <div className="h-[100px] pr-10">
                <div className="h-[15px] animate-pulse rounded bg-gray-300"></div>
            </div>
        </div>
    );
};

export default UsesCardSkeleton;
