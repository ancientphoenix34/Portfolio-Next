import SectionHeading from '@/components/Helper/SectionHeading'
import { certifications } from '@/data'
import React from 'react'
import CertificationCard from './CertificationCard'

const Certifications = () => {
    return (
        <div id='certifications' className='py-16 bg-white dark:bg-gray-900'>
            <SectionHeading
                title_1='My'
                title_2='Certifications'
                description='Professional credentials and completed courses that validate my expertise'
            />
            <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-[80%] mx-auto'>
                {certifications.map((cert, index) => (
                    <div
                        key={cert.id}
                        data-aos='fade-up'
                        data-aos-delay={index * 100}
                        data-aos-anchor-placement='top-center'
                    >
                        <CertificationCard {...cert} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Certifications
