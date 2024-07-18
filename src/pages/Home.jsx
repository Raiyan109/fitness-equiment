import Brands from '../components/Brands';
import Carousel from '../components/Carousel';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';

const Home = () => {
    return (
        // max-w-[1440px]
        <div className='mx-5 lg:mx-20 overflow-hidden'>
            <Navbar />
            <Hero />
            <Brands />
            <Carousel />
        </div>
    );
};

export default Home;