import React from 'react'
import Portfolio from './Portfolio'

const Carousel = () => {
    const handleProject = (e) => {
        const project = e.target;
        const next = project.nextSilbing;
        console.log(next)
        // project.insertAdjacentHTML('afterend', <Portfolio />)
    };

    return (
        <div className="w-full overflow-hidden">
            <div className="flex carouselWidth">
                <Portfolio onClick={handleProject} />
                <Portfolio />
                <Portfolio />
            </div>
        </div>
    )
}

export default Carousel
