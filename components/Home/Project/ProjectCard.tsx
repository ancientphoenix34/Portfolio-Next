"use client"

import { Button } from '@/components/ui/button';
import { ExternalLink, PlayCircle } from 'lucide-react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import React, { useState } from 'react'
import { FaGithub } from 'react-icons/fa6';

// Keeps the dialog and the recording out of the initial bundle — both are
// fetched the first time someone asks for the video.
const VideoModal = dynamic(() => import('./VideoModal'), { ssr: false });
// Same deal: only the one project carrying a notice ever loads this.
const DemoNoticeDialog = dynamic(() => import('./DemoNoticeDialog'), { ssr: false });

type Props = {
    title: string;
    description: string;
    image: string;
    techStack: string[];
    demoUrl?: string;
    githubUrl?: string;
    demoVideo?: string;
    demoNotice?: string;
}
const ProjectCard = ({
    title,
    description,
    image,
    techStack,
    demoUrl,
    githubUrl,
    demoVideo,
    demoNotice
}: Props) => {
    const [isVideoOpen, setIsVideoOpen] = useState(false);
    // Stays true after the first open so the modal keeps its closing animation.
    const [isVideoMounted, setIsVideoMounted] = useState(false);
    const [isNoticeOpen, setIsNoticeOpen] = useState(false);
    const [isNoticeMounted, setIsNoticeMounted] = useState(false);

    const openVideo = () => {
        setIsVideoMounted(true);
        setIsVideoOpen(true);
    };

    // Projects that carry a notice hold the navigation back until the warning has
    // been acknowledged; the dialog's Proceed does the opening instead.
    const handleDemoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        if (!demoNotice) return;
        // Let ctrl/cmd/middle-click and friends open the link the way the
        // browser normally would.
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

        e.preventDefault();
        setIsNoticeMounted(true);
        setIsNoticeOpen(true);
    };

    return (
        <div className='group relative bg-white dark:bg-gray-800 shadow-md rounded-2xl overflow-hidden '>
            {/*Image container*/}
            <div className='relative h-48 overflow-hidden'>
                <Image src={image} alt={title} width={400} height={400} className='w-full h-full object-cover' />
            </div>
            {/*main content */}
            <div className='p-6'>
                <h3 className='text-xl text-black dark:text-white font-semibold
        mb-2 group-hover:text-blue-500 transition-colors'>
                    {title}
                </h3>
                <p className='text-muted-foreground text-sm mb-4 line-clamp-2'>{description}</p>

                {/*tech stas*/}
                <div className='flex flex-wrap gap-2 mb-6'>
                    {
                        techStack.map((tech) => {
                            return <span key={tech} className='text-xs px-3 py-3 rounded-full bg-indigo-600
                    text-white font-medium'>
                                {tech}
                            </span>
                        })
                    }
                </div>
                {/*buttons - always one row; the row is the query container, so the
                   secondary labels drop to icons on cards too narrow for all three*/}
                <div className='@container flex items-center gap-2'>
                    {
                        demoUrl && (
                            <Button asChild size={"sm"} className='min-w-0 flex-auto gap-1.5 px-2 text-xs'>
                                <a href={demoUrl} target='_blank' rel="noopener noreferrer"
                                    onClick={handleDemoClick}>
                                    <ExternalLink className='w-4 h-4 shrink-0' />
                                    <span className='truncate'>Live Demo</span>
                                </a>
                            </Button>
                        )
                    }
                    {
                        githubUrl && (
                            <Button asChild variant={"outline"} size={"sm"}
                                className='shrink-0 gap-1.5 px-2 text-xs @min-[19rem]:min-w-0 @min-[19rem]:flex-auto'>
                                <a href={githubUrl} target='_blank' rel="noopener noreferrer"
                                    aria-label='GitHub' title='GitHub'>
                                    <FaGithub className='w-4 h-4 shrink-0' />
                                    <span className='hidden truncate @min-[19rem]:block'>GitHub</span>
                                </a>
                            </Button>
                        )
                    }
                    {
                        demoVideo && (
                            <Button
                                type='button'
                                variant={"secondary"}
                                size={"sm"}
                                onClick={openVideo}
                                aria-label='Demo Video'
                                title='Demo Video'
                                className='shrink-0 gap-1.5 px-2 text-xs @min-[19rem]:min-w-0 @min-[19rem]:flex-auto'
                            >
                                <PlayCircle className='w-4 h-4 shrink-0' />
                                <span className='hidden truncate @min-[19rem]:block'>Demo Video</span>
                            </Button>
                        )
                    }
                </div>
            </div>
            {
                demoNotice && demoUrl && isNoticeMounted && (
                    <DemoNoticeDialog
                        open={isNoticeOpen}
                        onOpenChange={setIsNoticeOpen}
                        title={title}
                        notice={demoNotice}
                        onProceed={() => window.open(demoUrl, '_blank', 'noopener,noreferrer')}
                    />
                )
            }
            {
                demoVideo && isVideoMounted && (
                    <VideoModal
                        open={isVideoOpen}
                        onOpenChange={setIsVideoOpen}
                        src={demoVideo}
                        title={title}
                        poster={image}
                    />
                )
            }
        </div>
    )
}

export default ProjectCard
