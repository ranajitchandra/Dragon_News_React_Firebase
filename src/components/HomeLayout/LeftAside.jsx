import { Suspense } from "react";
import Categories from "../Categories/Categories";
import { ScaleLoader } from "react-spinners";


export default function LeftAside() {

    return (
        <>
            {/* <Suspense fallback=
                {
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90">
                        <ScaleLoader color="#ffffff" />
                    </div>
                }
            >
            </Suspense> */}
            <Categories></Categories>

        </>
    )
}