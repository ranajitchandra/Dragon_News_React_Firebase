import { use, useContext } from "react";
import { NavLink } from "react-router";
import { AuthContext } from "../../provider/AuthProvider";


const categoryPromise = fetch("/categories.json").then((res) => res.json())




export default function Categories() {

    const categories = use(categoryPromise)


    return (
        <>
            <h2 className="text-xl text-gray-700 font-semibold p-2">All Categories {categories.length}</h2>
            <div className="flex flex-col gap-1 pt-5">
                {
                    categories.map(category => <NavLink key={category.id} to={`category/${category.id}`} className="text-accent font-semibold px-14 py-3 hover:bg-base-300 hover:font-extrabold">{category.name}</NavLink>)
                }
            </div>


        </>
    )
}