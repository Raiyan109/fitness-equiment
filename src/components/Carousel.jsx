import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TfiBlackboard } from "react-icons/tfi";
import { IoIosPeople } from "react-icons/io";
import { SlCalender } from "react-icons/sl";

const data = [
    {
        id: 1,
        icon: <TfiBlackboard />,
        title: 'Class',
        paragraph: 'Our Facilities Help you to get the maximum exercise and experience in the gym.'
    },
    {
        id: 2,
        icon: <IoIosPeople />,
        title: 'Club',
        paragraph: 'our club has state-of-the-art fitness equipment that will .'
    },
    {
        id: 3,
        icon: <SlCalender />,
        title: 'TimeTable',
        paragraph: 'looking for a class that fits your schedule? we have plenty of time options to suit you.'
    },
]

const Carousel = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    // initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };


    return (
        <div className="py-32">
            <Slider {...settings}>
                {data.map((item, idx) => (
                    <div key={idx} id='slider-boxes' className='bg-[#353535] rounded-[50px] gap-5 p-10 flex flex-col justify-center items-end h-56 lg:h-80' >
                        <h2 className='text-white opacity-40 '>{item.icon}</h2>
                        <h2 className='text-white'>{item.title}</h2>
                        <h5 className='text-white/80 max-w-[230px] item-pr'>{item.paragraph}</h5>
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default Carousel