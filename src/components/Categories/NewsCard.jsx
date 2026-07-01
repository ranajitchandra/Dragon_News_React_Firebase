

import { FaStar, FaRegStar, FaEye, FaShareAlt, FaRegBookmark, } from "react-icons/fa";
import { Link } from "react-router";

const NewsCard = ({ news }) => {
    const {
        id,
        title,
        author,
        thumbnail_url,
        details,
        rating,
        total_view,
        tags,
    } = news;

    const publishedDate = new Date(author.published_date).toDateString();

    return (
        <div className="bg-white rounded-xl shadow-md p-2 border border-base-300 my-5">
            <div className="flex justify-between items-center bg-base-300 mb-4 p-3 rounded-tl-lg rounded-tr-lg">
                <div className="flex items-center space-x-3">
                    <img src={author.img} alt={author.name} className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                        <p className="font-semibold text-sm">{author.name}</p>
                        <p className="text-xs text-gray-500">{publishedDate}</p>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <FaRegBookmark />
                    <FaShareAlt className="text-gray-500 hover:text-gray-700 cursor-pointer" />
                </div>
            </div>

            <h2 className="text-lg font-bold mb-2">{title}</h2>

            <img src={thumbnail_url} alt="News" className="w-full h-48 object-cover rounded-md mb-3" />

            <p className="text-gray-600 text-sm mb-2">
                {details.length > 150 ? `${details.slice(0, 150)}...` : details}
                <Link to={`/news-details/${id}`} className="text-red-500 font-bold cursor-pointer"> Read More</Link>
            </p>

            <div className="text-xs text-gray-500 mb-2">
                Tags: {tags.join(", ")}
            </div>

            <div className="flex justify-between items-center border-t border-t-base-300 pt-2">
                <div className="flex items-center text-yellow-500">
                    {Array.from({ length: 5 }).map((_, idx) =>
                        idx < rating.number ? (
                            <FaStar key={idx} className="w-4 h-4" />
                        ) : (
                            <FaRegStar key={idx} className="w-4 h-4" />
                        )
                    )}
                    <span className="ml-2 text-gray-700 font-semibold">
                        {rating.number.toFixed(1)}
                    </span>
                </div>
                <div className="flex items-center text-gray-500 text-sm">
                    <FaEye className="w-4 h-4 mr-1" />
                    {total_view}
                </div>
            </div>
        </div>
    );
};

export default NewsCard;
