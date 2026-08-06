"use client"

import { Button } from '@/components/ui/button'
import { TriangleAlert } from 'lucide-react'
import React from 'react'
import { AlertDialog } from 'radix-ui'

type Props = {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    title: string;
    notice: string;
    onProceed: () => void;
}

/**
 * Confirms before leaving for a demo that may not be fully alive. AlertDialog
 * rather than Dialog: this interrupts a navigation the user already asked for,
 * so it takes focus, ignores outside-taps, and needs an explicit answer.
 */
const DemoNoticeDialog = ({ open, onOpenChange, title, notice, onProceed }: Props) => {
    return (
        <AlertDialog.Root open={open} onOpenChange={onOpenChange}>
            <AlertDialog.Portal>
                <AlertDialog.Overlay className='fixed inset-0 z-[1100] bg-black/70 backdrop-blur-sm
                  data-[state=open]:animate-in data-[state=open]:fade-in-0
                  data-[state=closed]:animate-out data-[state=closed]:fade-out-0' />
                <AlertDialog.Content
                    className='fixed left-1/2 top-1/2 z-[1100] -translate-x-1/2 -translate-y-1/2
                      rounded-2xl bg-white p-6 shadow-2xl dark:bg-gray-900
                      w-[min(26rem,calc(100vw-2rem-env(safe-area-inset-left)-env(safe-area-inset-right)))]
                      data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95
                      data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95'
                >
                    <div className='flex items-start gap-3'>
                        <span className='mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-full
                          bg-amber-100 text-amber-600 dark:bg-amber-500/15 dark:text-amber-400'>
                            <TriangleAlert className='size-5' />
                        </span>
                        <div className='min-w-0'>
                            <AlertDialog.Title className='text-base font-semibold text-black dark:text-white'>
                                Before you open {title}
                            </AlertDialog.Title>
                            <AlertDialog.Description className='mt-1.5 text-sm leading-relaxed text-muted-foreground'>
                                {notice}
                            </AlertDialog.Description>
                        </div>
                    </div>
                    {/*actions - the pair splits the full row, so neither is a small target*/}
                    <div className='mt-6 flex gap-2'>
                        <AlertDialog.Cancel asChild>
                            <Button variant={"destructive"} size={"lg"} className='flex-1'>
                                Cancel
                            </Button>
                        </AlertDialog.Cancel>
                        <AlertDialog.Action asChild>
                            {/* Opening happens straight from this click, so it stays inside the
                                user gesture and never trips a popup blocker. */}
                            <Button size={"lg"} onClick={onProceed} className='flex-1'>
                                Proceed
                            </Button>
                        </AlertDialog.Action>
                    </div>
                </AlertDialog.Content>
            </AlertDialog.Portal>
        </AlertDialog.Root>
    )
}

export default DemoNoticeDialog
