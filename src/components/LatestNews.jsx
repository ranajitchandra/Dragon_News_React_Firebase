import Marquee from "react-fast-marquee";


export default function LatestNews() {

    return (
        <div className="flex items-center bg-base-300 p-3 mt-4 mb-2">
            <p className="bg-secondary px-6 py-2 text-base-100">Latest</p>
            <Marquee pauseOnHover={true} speed={60} gradient={true} gradientColor="#D72050">
                <p className="font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores unde cumque quod necessitatibus illum officia quos dignissimos quasi, provident rerum ex fuga, nam, minus culpa beatae. Nam, error! Sapiente, velit.</p>
            </Marquee>
        </div>
    )
}