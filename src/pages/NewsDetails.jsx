import { useLoaderData, useParams } from "react-router"
import NewsDetailsCard from "../components/Categories/NewsDetailsCard"
import { useEffect, useState } from "react"
import RightAside from "../components/HomeLayout/RightAside"
import { ScaleLoader } from "react-spinners"


export default function NewsDetails() {
    const newsData = useLoaderData()
    const { id } = useParams()
    const [news, setNews] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        const getNews = newsData.find(oneNews => oneNews.id === id)
        setNews(getNews || null)
        setLoading(false)
    }, [id, newsData])

    if (loading) {
        return (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90">
                <ScaleLoader color="#ffffff" />
            </div>
        )
    }

    if (!news) {
        return (
            <div className="max-w-6xl mx-auto p-8 text-center">
                <h2 className="text-2xl font-bold text-gray-700">News not found</h2>
            </div>
        )
    }

    return (
        <div className="max-w-6xl mx-auto">
            <main className="grid grid-cols-12 gap-4">
                <section className="col-span-9">
                    <h2 className="max-w-2xl mx-auto text-xl text-gray-700 font-semibold p-2">Dragon News</h2>
                    <NewsDetailsCard news={news}></NewsDetailsCard>
                </section>
                <section className="col-span-3">
                    <RightAside></RightAside>
                </section>
            </main>
        </div>

    )
}