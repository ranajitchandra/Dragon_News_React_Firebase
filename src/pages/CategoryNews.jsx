import { useEffect, useState } from "react"
import { useLoaderData, useParams } from "react-router"
import NewsCard from "../components/Categories/NewsCard"


export default function CategoryNews(){
    const [categoryNews, setCategoryNews] = useState([])
    const { id } = useParams()
    const newsData = useLoaderData()

    useEffect(() => {
        if(id == 0){
            setCategoryNews(newsData)
        }else if(id == 1){
            const getNews = newsData.filter( news => news.others.is_today_pick == true)
            setCategoryNews(getNews)
        }else{
            const getNews = newsData.filter( news => news.category_id == id)
            setCategoryNews(getNews)

        }
    }, [id, newsData])


    return(
        <>
            <h2 className="text-xl text-gray-700 font-semibold p-2">Category News {categoryNews.length}</h2>

            {
                categoryNews.map( news => <NewsCard key={news.id} news={news}></NewsCard>)
            }
        
        </>
    )
}