
import swimming from "../../assets/swimming.png"
import classImg from "../../assets/class.png"
import playground from "../../assets/playground.png"


export default function QZone() {

    return (
        <>
            <div className="bg-base-200 mt-8">
                <h2 className="text-xl text-gray-700 font-semibold p-2">Q-Zone</h2>
                <img className="w-full my-8" src={swimming} alt="Photo" />
                <img className="w-full my-8" src={classImg} alt="Photo" />
                <img className="w-full my-8" src={playground} alt="Photo" />
            </div>

        </>
    )
}