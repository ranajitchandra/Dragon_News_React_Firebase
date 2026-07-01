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
        <div className="max-w-6xl mx-auto px-4 md:px-0">
            <header className="sticky top-0 z-50 bg-base-100">
                <div className="max-w-6xl mx-auto px-4 md:px-0">
                    <Header></Header>
                    <Navbar></Navbar>
                </div>
            </header>
            <LatestNews></LatestNews>
            <main className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-0 md:pt-4">
                <section className="hidden md:block md:col-span-3 sticky top-0 h-fit">
                    <LeftAside></LeftAside>
                </section>
                <section className="md:col-span-6">
                    {state == "loading" ? <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90">
                        <ScaleLoader color="#ffffff" />
                    </div> : <Outlet></Outlet>}
                </section>
                <section className="hidden lg:block lg:col-span-3 sticky top-0 h-fit">
                    <RightAside></RightAside>
                </section>
            </main>
            <section className="md:hidden mt-6">
                <LeftAside></LeftAside>
            </section>

        </div>
    )
}