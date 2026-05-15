import SectionHeading from '@/components/Helper/SectionHeading'
import { highlights, stats } from '@/data'
import Image from 'next/image'
import React from 'react'

const About = () => {
    return (
        <div className='py-16 bg-gray-100 dark:bg-gray-900'>
            {/* section heading*/}
            <SectionHeading title_1='About' title_2='Me' description='Get to know the man behind solutions' />
            <div className='grid w-[80%] mx-auto lg:grid-cols-2 gap-12 items-center'>
                {/*Images*/}
                <div
                    data-aos="fade-right"
                    data-aos-delay="0"
                    data-aos-anchor-placement="top-center"
                    className='relative'>
                    <div className='aspect-square rounded-2xl overflow-hidden p-2'>
                        <Image src={"/images/user.jpg"} alt='Profile' width={700} height={700} className='w-full h-full object-center rounded-xl' />
                    </div>
                </div>
                {/*Content*/}
                <div
                    data-aos="fade-left"
                    data-aos-delay="150"
                    data-aos-anchor-placement="top-center"
                    className='space-y-6'>
                    <h3 className='text-2xl font-semibold'>
                        A passionate developer who loves to create
                    </h3>
                    <p className='text-muted-foreground leading-relaxed'>
                        I'm a full-stack developer with over 5 years of experience building web applications. My journey started with curiosity about how websites work, and it has evolved into a passion for creating seamless, user-focused digital experiences.
                    </p>
                    <p className='text-muted-foreground leading-relaxed'>Beyond coding, I'm dedicated to sharing knowledge. I've taught over 1000 students through online courses and mentorship programs. I believe in continuous learning and staying updated with the latest technologies.</p>
                    {/*Highligths*/}
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4'>
                        {highlights.map((item) => {
                            return <div key={item.text} className='flex items-center gap-3 text-sm'>
                                <div className='w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center'>
                                    <item.icon className='w-4 h-4 text-blue-500' />
                                </div>
                                <span className='text-muted-foreground'>{item.text}</span>
                            </div>
                        })}
                    </div>
                </div>
            </div>
            {/*stats*/}
            <div className='mt-16 w-[80%] mx-auto'>
                <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 '>
                    {stats.map((stat) => {
                        return <div
                            data-aos="zoom-in"
                            data-aos-delay="200"
                            data-aos-anchor-placement="top-center"
                            key={stat.label} className='bg-white dark:bg-800 shadow rounded-xl p-6 text-center'>
                            <div className='text-3xl md:text-4xl font-bold text-purple-600 mb-2'>
                                {stat.value}
                            </div>
                            <div className='text-sm text-muted-foreground'>
                                {stat.label}
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}

export default About
