import { useLoaderData, useParams } from "react-router"
import Header from "../components/Header"
import NewsDetailsCard from "../components/Categories/NewsDetailsCard"
import { useEffect, useState } from "react"
import RightAside from "../components/HomeLayout/RightAside"


export default function NewsDetails() {
    const newsData = useLoaderData()
    const { id } = useParams()
    const [news, setNews] = useState({})

    useEffect(() => {
        const getNews = newsData.find(oneNews => oneNews.id == id)
        setNews(getNews)
    }, [id, newsData])

    // console.log(id, newsData)

    return (
        <div className="max-w-6xl mx-auto">
            <Header></Header>
            <main className="grid grid-cols-12 gap-4">
                <section className="col-span-9">
                    <h2 className="max-w-2xl mx-auto text-xl text-gray-700 font-semibold p-2">Dragon News</h2>
                    <NewsDetailsCard key={news.id} news={news}></NewsDetailsCard>
                </section>
                <section className="col-span-3">
                    <RightAside></RightAside>
                </section>
            </main>
        </div>

    )
}