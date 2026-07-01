import { useEffect, useState } from "react";
import { NavLink } from "react-router";


export default function Categories() {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch("/categories.json")
            .then((res) => res.json())
            .then((data) => setCategories(data))
            .catch((err) => console.error("Failed to load categories:", err))
    }, [])


    return (
        <>
            <h2 className="text-base md:text-xl text-gray-700 font-semibold p-2">All Categories {categories.length}</h2>
            <div className="md:hidden flex gap-2 overflow-x-auto pb-2 px-2 scrollbar-hide">
                {
                    categories.map(category => <NavLink key={category.id} to={`/category/${category.id}`} className="text-accent font-semibold whitespace-nowrap px-4 py-2 rounded-lg bg-base-200 hover:bg-base-300 hover:font-extrabold text-sm">{category.name}</NavLink>)
                }
            </div>
            <div className="hidden md:flex flex-col gap-1 pt-5">
                {
                    categories.map(category => <NavLink key={category.id} to={`/category/${category.id}`} className="text-accent font-semibold px-4 md:px-14 py-3 hover:bg-base-300 hover:font-extrabold">{category.name}</NavLink>)
                }
            </div>


        </>
    )
}