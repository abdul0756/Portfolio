const Card = ({ title, value }) => {
  return (
    <div
      className="
        backdrop-blur-xl bg-black/30
        w-96 max-sm:w-75
        h-[140px] max-sm:h-[120px]
        rounded-3xl flex flex-col items-center justify-center
        border border-white/10
        shadow-lg hover:shadow-2xl
        hover:scale-105 transition-all duration-500
      "
    >
      <h1 className="text-white text-xl sm:text-2xl md:text-3xl font-light tracking-wide">
        {title}
      </h1>

      <input
        type="range"
        className="w-[80%] mt-5 accent-white"
        max={100}
        min={0}
        value={value}
        disabled
      />
    </div>
  );
};

export default Card;
