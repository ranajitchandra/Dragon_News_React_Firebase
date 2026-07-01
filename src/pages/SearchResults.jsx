import { useEffect, useState } from "react"
import { useSearchParams } from "react-router"
import NewsCard from "../components/Categories/NewsCard"
import { ScaleLoader } from "react-spinners"

export default function SearchResults() {
    const [searchParams] = useSearchParams()
    const query = searchParams.get("q") || ""
    const [results, setResults] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        fetch("/news.json")
            .then(res => res.json())
            .then(data => {
                const filtered = data.filter(news =>
                    news.title.toLowerCase().includes(query.toLowerCase()) ||
                    news.details.toLowerCase().includes(query.toLowerCase()) ||
                    news.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
                )
                setResults(filtered)
                setLoading(false)
            })
            .catch(() => setLoading(false))
    }, [query])

    if (loading) {
        return (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90">
                <ScaleLoader color="#ffffff" />
            </div>
        )
    }

    return (
        <div>
            <h2 className="text-lg md:text-xl text-gray-700 font-semibold p-2 break-words">
                Search Results for "{query}" ({results.length})
            </h2>
            {results.length === 0 ? (
                <p className="text-accent p-4">No news found matching your search.</p>
            ) : (
                results.map(news => <NewsCard key={news.id} news={news} />)
            )}
        </div>
    )
}
