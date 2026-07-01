import Marquee from "react-fast-marquee";


export default function LatestNews() {

    return (
        <div className="hidden md:flex items-center bg-base-300 p-2 sm:p-3 mt-3 sm:mt-4 mb-2">
            <p className="bg-secondary px-3 sm:px-6 py-1 sm:py-2 text-base-100 text-xs sm:text-sm font-semibold whitespace-nowrap">Latest</p>
            <Marquee pauseOnHover={true} speed={60} gradient={true} gradientColor="#D72050">
                <p className="font-semibold text-xs sm:text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores unde cumque quod necessitatibus illum officia quos dignissimos quasi, provident rerum ex fuga, nam, minus culpa beatae. Nam, error! Sapiente, velit.</p>
            </Marquee>
        </div>
    )
}