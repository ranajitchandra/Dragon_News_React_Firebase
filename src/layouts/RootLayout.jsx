import { Outlet, useNavigation } from "react-router";
import Header from "../components/Header";
import LeftAside from "../components/HomeLayout/LeftAside";
import RightAside from "../components/HomeLayout/RightAside";
import LatestNews from "../components/LatestNews";
import Navbar from "../components/Navbar";
import { ScaleLoader } from "react-spinners";



export default function RootLayout() {


    const { state } = useNavigation()



    return (
        <div className="max-w-6xl mx-auto">
            <header>
                <Header></Header>
                <LatestNews></LatestNews>
                <Navbar></Navbar>
            </header>
            <main className="grid grid-cols-12 gap-6">
                <section className="col-span-3 sticky top-0 h-fit">
                    <LeftAside></LeftAside>
                </section>
                <section className="col-span-6">
                    {state == "loading" ? <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90">
                        <ScaleLoader color="#ffffff" />
                    </div> : <Outlet></Outlet>}
                </section>
                <section className="col-span-3 sticky top-0 h-fit">
                    <RightAside></RightAside>
                </section>
            </main>

        </div>
    )
}