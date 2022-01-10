import React from 'react'
import SocialNetworks from './SocialNetworks';
import ImJulio from './ImJulio';
import BackgroundProfile from './BackgroundProfile';

const Presentation = () => {
    return (
        <div className="customGrid">
            <div className="flex items-center justify-center">
                <SocialNetworks />
                <ImJulio />  
            </div>
            <div className="flex justify-center">
                <BackgroundProfile />
            </div>
        </div>
    )
}

export default Presentation
