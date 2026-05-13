"use client"
import React from 'react'

import { TypeAnimation } from 'react-type-animation'
import { Button } from '../../ui/button'
import { Download, FolderOpen } from 'lucide-react'

const Hero = () => {
    return (
        <div className='relative min-h-screen bg-[radial-gradient(circle_476px_at_54.8%_51.5%,rgba(168,229,253,1)_0%,rgba(244,244,254,1)_42.3%,rgba(244,244,254,1)_100.2%)] flex 
    items-center justify-center overflow-hidden dark:bg-[radial-gradient(circle_farthest-corner_at_50.3%_47.3%,rgba(113,42,92,1)_0.1%,rgba(40,25,46,1)_90%)]'>
            {/*contents*/}
            <div className='relative z-10 text-center'>
                {/*sub title*/}
                <div className='sm:mb-6'>
                    <span className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white
            dark:bg-gray-600 text-sm text-muted-foreground dark:text-gray-200 mb-8'>
                        <span className='w-2 h-2 rounded-full bg-green-500'>
                        </span>
                        Available for opportunities
                    </span>
                </div>
                {/*title*/}
                <h1 className='text-4xl sm:test-5xl md:text-6xl lg:text-7xl font-bold mb-6'>
                    Hi, I&apos;m <span className='text-purple-800 dark:text-yellow-300'>Mohammed Farseen</span>
                </h1>
                {/*Type write effects*/}
                <div className='text-xl sm:text-2xl md:text-3xl text-black dark:text-white font-semibold mb-4 sm:mb-8 h-12'>
                    <TypeAnimation
                        sequence={[
                            "MERN Stack Devolper", 2000,
                            "Tech Instructor", 2000,
                            "Open Source Contributer", 2000
                        ]}

                        wrapper='span'
                        speed={50}
                        repeat={Infinity}
                        className='font-mono'
                    />
                </div>
                {/*description*/}
                <p className='text-lg text-muted-foreground dark:text-gray-200 max-w-2xl mx-auto mb-10'>
                    Crafting exceptional digital experiences with modern technologies. Passionate
                    about building scalable applications and teaching others.
                </p>
                {/*buttons*/}
                <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                    <Button size={"lg"} asChild className='w-fit mx-auto sm:mx-0'>
                        <a href="#_">
                            <FolderOpen className='w-5 h-5 mr-2' />
                            View Projects
                        </a>
                    </Button>
                    <Button size={"lg"} asChild className='w-fit mx-auto sm:mx-0'>
                        <a href="#_">
                            <Download className='w-5 h-5 mr-2' />
                            Download CV
                        </a>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Hero
