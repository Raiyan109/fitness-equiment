import puma from '../assets/puma_trans-removebg-preview.png'
import addidas from '../assets/addidas.png'
import sega from '../assets/sega-removebg-preview.png'
import nike from '../assets/nike-removebg-preview.png'
import reebok from '../assets/reebok-removebg-preview.png'

const Brands = () => {
    return (
        <div className='flex items-center justify-center'>
            <div className='py-32 grid grid-cols-3 md:grid-cols-5 gap-36'>
                <img src={addidas} alt="addidas" className='w-20 h-20 lg:w-44 lg:h-44 object-contain' />
                <img src={sega} alt="addidas" className='w-20 h-20 lg:w-44 lg:h-44 object-contain' />
                <img src={nike} alt="addidas" className='w-20 h-20 lg:w-44 lg:h-44 object-contain' />
                <img src={reebok} alt="addidas" className='w-20 h-20 lg:w-44 lg:h-44 object-contain' />
                <img src={puma} alt="addidas" className='w-20 h-20 lg:w-44 lg:h-44 object-contain' />
            </div>
        </div>
    )
}

export default Brands