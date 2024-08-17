const CarouselButton = ({ icon, onClick }) => {
    return (
        <button
            className="rounded-full border-4 border-white/50 bg-transparent p-2 text-white transition-all duration-300 hover:border-2 hover:bg-primary/80"
            onClick={onClick}
        >
            {icon}
        </button>
    );
};

export default CarouselButton;
