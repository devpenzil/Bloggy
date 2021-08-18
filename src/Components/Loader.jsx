import React from 'react'

function Loader() {
    return (
        <div>
            <div className="w-full h-32  z-50 flex flex-col justify-center content-center items-center fixed">
            <lottie-player src="https://assets2.lottiefiles.com/packages/lf20_uaqb3mma.json"  background="transparent"  speed="1"  loop  autoplay></lottie-player>
            </div>
        </div>
    )
}

export default Loader
