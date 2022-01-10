import React from 'react'
import Glider from 'react-glider';
import 'glider-js/glider.min.css';
import { FaArrowLeft } from 'react-icons/fa'
import Portfolio from './Portfolio';

const Carousel22 = () => {
    return (
        <div className="bg-gray-400">
            <Glider className="bg-red-300 m-4"
                draggable
                hasArrows
                hasDots
                resizeLock
                iconLeft = { <FaArrowLeft /> }
                //   arrows={ {prev: <h1>Hola</h1>} }iconLeft
                //   slidesToShow={1}
                  slidesToScroll={1}
            >
                <Portfolio />
            </Glider>
        </div>
    )
}

export default Carousel22
