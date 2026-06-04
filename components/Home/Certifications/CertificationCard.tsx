import { BadgeCheck, Calendar, ExternalLink, Hash } from 'lucide-react'
import { Button } from '@/components/ui/button'
import React from 'react'
import { Certification } from '@/data'

const CertificationCard = ({
    title, issuer, issuedDate, expiryDate, credentialId, credentialUrl, skills
}: Omit<Certification, 'id'>) => {
    return (
        <div className='group relative bg-white dark:bg-gray-800 shadow-md rounded-2xl
          overflow-hidden hover:shadow-lg hover:scale-[1.02] transition-all duration-300'>
            <div className='h-16 bg-linear-to-r from-purple-500 to-blue-600 flex
              items-center justify-center'>
                <BadgeCheck className='w-8 h-8 text-white' />
            </div>
            <div className='p-6 flex flex-col gap-3'>
                <div>
                    <h3 className='text-lg font-semibold text-black dark:text-white
                      group-hover:text-purple-600 transition-colors leading-tight'>
                        {title}
                    </h3>
                    <p className='text-sm text-muted-foreground mt-0.5'>{issuer}</p>
                </div>
                <div className='flex items-center gap-1.5 text-xs text-muted-foreground'>
                    <Calendar className='w-3.5 h-3.5 text-purple-500 shrink-0' />
                    <span>
                        {issuedDate}
                        {expiryDate && ` · Expires ${expiryDate}`}
                    </span>
                </div>
                {credentialId && (
                    <div className='flex items-center gap-1.5 text-xs text-muted-foreground'>
                        <Hash className='w-3.5 h-3.5 text-purple-500 shrink-0' />
                        <span className='truncate'>{credentialId}</span>
                    </div>
                )}
                <div className='flex flex-wrap gap-2 mt-1'>
                    {skills.map((skill) => (
                        <span key={skill} className='text-xs px-2 py-1 rounded-md
                          bg-purple-600/10 text-purple-700 dark:text-purple-300 font-medium'>
                            {skill}
                        </span>
                    ))}
                </div>
                <Button asChild variant='outline' size='sm' className='mt-2 w-full'>
                    <a href={credentialUrl} target='_blank' rel='noopener noreferrer'>
                        <ExternalLink className='w-4 h-4 mr-2' />
                        Verify Credential
                    </a>
                </Button>
            </div>
        </div>
    )
}

export default CertificationCard
