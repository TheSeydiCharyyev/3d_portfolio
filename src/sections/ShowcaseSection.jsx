import React from 'react'

const ShowcaseSection = () => {
    return (
        <div id='work' className='app-showcase'>ShowcaseSection
            <div className='w-full'>
                <div className='showcaselayout'>
                    {/* LEFT */}

                    <div className='first-project-wrapper'>
                        <div className='image-wrapper'>
                            <img src='/images/project1.png' alt='Ryde' />
                        </div>
                        <div className='text-content'>
                            <h2>On-Demand Rides Made Simple with a powerful, User-Friendly App called Ryde</h2>

                        </div>

                    </div>

                    {/* RIGHT */}

                </div>

            </div>
        </div>
    )
}

export default ShowcaseSection