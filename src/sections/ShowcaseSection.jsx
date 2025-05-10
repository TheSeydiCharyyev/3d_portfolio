import React from 'react'

const ShowcaseSection = () => {
    return (
        <div id='work' className='app-showcase'>
            <div className='w-full'>
                <div className='showcaselayout'>
                    {/* LEFT */}
                    <div className='first-project-wrapper'>
                        <div className='image-wrapper'>
                            <img src="/images/project1.png" alt="Ryde" />
                            <div className='text-content'>
                                <h2>On-Demand Rides Made Simple with a Powerful, User-Friendly App called Ryde</h2>
                                <p className='text-white-50 md:text-xl'>
                                    Ann built with React Native, Expo, & TailwindCSS for a fast, user-friendly experience.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT */}
                    <div className='project-list-wrapper overflow-hidden'>
                        <div className='project'>
                            <div>
                                <img src="/images/project2.png" alt="Library Management Platform" />
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default ShowcaseSection