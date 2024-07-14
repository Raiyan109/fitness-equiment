import { FaStarOfLife } from "react-icons/fa";
import { CgGym } from "react-icons/cg";
const Hero = () => {
    return (
        <div className="bg-gray mx-20 my-7 rounded-2xl py-7 px-16">
            <h3 className="pb-6">Make your body fit this spring with us.</h3>
            <div className="border-b "></div>
            <div className="flex items-end gap-80">
                <div>
                    <h1 className="inline-flex gap-7 items-center mt-5">Improve your <span className=""><CgGym className="text-orange border border-orange border-dashed rounded-2xl font-bold p-1" size={70} /></span></h1>

                    <h1 className=""> fitness level for</h1>
                    <h1 className=" inline-flex items-center gap-6">the better <h5 className="capitalize max-w-[200px] font-semibold tracking-tighter">More Than 1900 Fitness Group Classes per month, find new friends who will motivate your fitness goals</h5></h1>
                </div>
                <div className="flex flex-col gap-12">
                    <FaStarOfLife className="text-orange" size={180} />
                    <button className="btn-orange">Free pass</button>
                </div>
            </div>



        </div>
    )
}

export default Hero