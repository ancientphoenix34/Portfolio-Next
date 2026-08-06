"use client"

import { X } from 'lucide-react'
import React, { useRef } from 'react'
import { Dialog } from 'radix-ui'

type Props = {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    src: string;
    title: string;
    poster?: string;
}

/**
 * Plays a project demo recording in a modal. Radix handles the focus trap,
 * scroll lock, Esc key and outside-tap; everything below is layout + playback.
 */
const VideoModal = ({ open, onOpenChange, src, title, poster }: Props) => {
    const videoRef = useRef<HTMLVideoElement>(null);

    // Stop playback on close so audio never outlives the modal, and rewind so
    // reopening starts from the top.
    const handleOpenChange = (nextOpen: boolean) => {
        if (!nextOpen && videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
        }
        onOpenChange(nextOpen);
    };

    return (
        <Dialog.Root open={open} onOpenChange={handleOpenChange}>
            <Dialog.Portal>
                <Dialog.Overlay className='fixed inset-0 z-[1100] bg-black/80 backdrop-blur-sm
                  data-[state=open]:animate-in data-[state=open]:fade-in-0
                  data-[state=closed]:animate-out data-[state=closed]:fade-out-0' />
                <Dialog.Content
                    aria-describedby={undefined}
                    className='fixed left-1/2 top-1/2 z-[1100] flex -translate-x-1/2
                      -translate-y-1/2 flex-col overflow-hidden rounded-2xl bg-white shadow-2xl
                      dark:bg-gray-900
                      w-[min(24rem,calc(100vw-2rem-env(safe-area-inset-left)-env(safe-area-inset-right)))]
                      max-h-[calc(100svh-2rem-env(safe-area-inset-top)-env(safe-area-inset-bottom))]
                      data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95
                      data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95'
                >
                    {/*header*/}
                    <div className='flex items-center justify-between gap-3 px-4 py-3'>
                        <Dialog.Title className='truncate text-sm font-semibold text-black dark:text-white'>
                            {title}
                        </Dialog.Title>
                        <Dialog.Close
                            aria-label='Close video'
                            className='shrink-0 rounded-md p-1 text-muted-foreground transition-colors
                              hover:bg-muted hover:text-foreground focus-visible:outline-none
                              focus-visible:ring-2 focus-visible:ring-ring'
                        >
                            <X className='w-4 h-4' />
                        </Dialog.Close>
                    </div>
                    {/*player*/}
                    <video
                        ref={videoRef}
                        src={src}
                        poster={poster}
                        controls
                        playsInline
                        preload='metadata'
                        controlsList='nodownload'
                        // The modal only mounts on click, so nothing here is fetched until
                        // the user asks for it. Autoplay may still be blocked by the browser,
                        // in which case the native controls take over.
                        onLoadedMetadata={(e) => { void e.currentTarget.play().catch(() => { }) }}
                        // Fixed box + object-contain: the player keeps one size whatever the
                        // recording's aspect ratio is, so nothing reflows when metadata lands.
                        className='h-[70svh] w-full bg-black object-contain'
                    />
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    )
}

export default VideoModal
