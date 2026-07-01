import { Link } from "react-router";

const NewsDetailsCard = ({ news }) => {

    return (
        <div className="max-w-2xl mx-auto bg-white rounded-lg p-3 sm:p-4 shadow-lg mt-6 mx-2 sm:mx-0">
            {news.image_url && (
                <img src={news.image_url} alt={news.title || "News image"} className="w-full rounded-t-lg h-48 sm:h-60 object-cover"
                />
            )}
            <div className="py-4 sm:py-5">
                <h2 className="text-lg sm:text-xl font-semibold mb-2">
                    {news.title || "Untitled News"}
                </h2>

                {news.author?.published_date && (
                    <p className="text-xs sm:text-sm text-gray-500 mb-4">
                        {new Date(news.author.published_date).toLocaleDateString('en-US', {
                            weekday: 'long',
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                        })}
                    </p>
                )}

                {news.details && (
                    <p className="text-gray-700 text-xs sm:text-sm mb-4 leading-relaxed">
                        {news.details}
                    </p>
                )}

                <div className="flex items-center mt-6 sm:mt-10">
                    {news.author?.img && (
                        <img
                            src={news.author.img}
                            alt={news.author.name || "Author"}
                            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full mr-3 flex-shrink-0"
                        />
                    )}
                    <div>
                        <p className="text-xs sm:text-sm font-medium text-gray-800">
                            {news.author?.name || "Unknown Author"}
                        </p>
                        <p className="text-xs text-gray-500">
                            {news.total_view ?? 0} views
                        </p>
                    </div>
                </div>

                {news.others?.is_trending && news.rating?.badge && (
                    <span className="inline-block bg-pink-100 text-pink-600 text-xs font-semibold px-3 py-1 rounded-full mt-3">
                        {news.rating.badge.toUpperCase()}
                    </span>
                )}

                <div className="mt-6 sm:mt-10 mb-4">
                    <Link to={`/category/${news.category_id}`} className="inline-block bg-pink-600 hover:bg-pink-700 text-white text-xs sm:text-sm font-semibold py-2 px-4 sm:px-6 rounded">
                        ↪ All news
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NewsDetailsCard;
