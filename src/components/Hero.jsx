import { FaStarOfLife } from "react-icons/fa";
import { CgGym } from "react-icons/cg";
import burble from '../assets/burble.jpg'
import punchBag from '../assets/punch-bag.jpg'
const Hero = () => {
    return (
        <div className="bg-gray mx-5 lg:mx-20 my-2 lg:my-2 rounded-2xl py-7 px-6 lg:px-16">
            <h4 className="pb-3">Make your body fit this spring with us.</h4>
            <div className="border-b "></div>
            <div className="flex gap-8 flex-col md:flex-row">
                <div className="flex-2 ">
                    <h1 className="inline-flex gap-7 items-center mt-5">Improve your
                        <span className="">
                            <CgGym className="text-orange border border-orange border-dashed rounded-2xl font-bold p-1 text-[50px] lg:text-[80px]" />
                        </span>
                    </h1>

                    <h1 className="">fitness level for</h1>
                    <h1 className=" inline-flex items-center gap-6 mb-5">the better
                        <h5 className="capitalize max-w-[150px] lg:max-w-[200px] font-semibold tracking-tighter leading-3 lg:leading-none">More Than 1900 Fitness Group Classes per month, find new friends who will motivate your fitness goals
                        </h5>
                    </h1>
                    <div>
                        <button className="btn-orange">Free Pass</button>
                    </div>
                </div>
                <div className="bg-black rounded-2xl flex-1 mt-6 border border-8 relative">
                    <img src={burble} alt="" className="rounded-2xl  object-cover object-center " />
                    <div className="absolute bottom-10 left-12">
                        <h2 className="text-gray/80 opacity-40 leading-snug">Lets try</h2>
                        <h2 className="text-white leading-snug">Reach our body goals</h2>
                        <h2 className="text-gray opacity-75 leading-snug">body goals target</h2>
                    </div>
                </div>
            </div>

            {/* <div className="grid grid-cols-3 gap-5">
                <div className="col-span-1 flex flex-col gap-3 bg-black rounded-2xl">
                    <div className="bg-black rounded-2xl w-full">
                        <img src={burble} alt="" className="rounded-2xl  object-cover object-center h-96 w-96" />
                    </div>
                </div>
                <div className="col-span-2 bg-blue rounded-2xl w-full">
                    <img src={punchBag} alt="" className="rounded-2xl  object-cover object-center h-96 w-96" />
                </div>
            </div> */}

        </div>
    )
}

export default Hero