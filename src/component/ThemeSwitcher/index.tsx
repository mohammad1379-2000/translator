'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Switch } from '@nextui-org/react'
import Image from 'next/image'

export const ThemeSwitcher = ({ className }: { className?: string }) => {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    return (
        <div className={`flex flex-row ${className}`}>
            <div className={'flex items-center'}>
                {theme === 'dark' ? (
                    <Image
                        width={25}
                        height={25}
                        src={'/icon/moonDark.png'}
                        alt={'sunIcon'}
                    />
                ) : (
                    <Image
                        width={25}
                        height={25}
                        src={'/icon/moon.png'}
                        alt={'sunIcon'}
                    />
                )}
            </div>
            <Switch
                defaultSelected={false}
                size="lg"
                className={'mr-0 ml-2'}
                color={'default'}
                onChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                thumbIcon={() => (
                    <div
                        className={'rounded-full w-full h-full bg-default-0'}
                    />
                )}
            />
            <div className={'flex items-center'}>
                <Image
                    width={25}
                    height={25}
                    src={'/icon/sun.png'}
                    alt={'sunIcon'}
                />
            </div>
        </div>
    )
}
