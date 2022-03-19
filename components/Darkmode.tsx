import React, { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { BsMoonStarsFill, BsFillSunFill } from 'react-icons/bs'

const DarkMode: React.FC = ({ className }: any) => {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()
    useEffect(() => {
        setMounted(true)
        setTheme('dark')
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <button
            aria-label="Toggle Dark Mode"
            type="button"
            className="h-6 w-6"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
            {mounted && (
                <div>
                    {theme === 'dark' ? (
                        <BsFillSunFill className="h-6 w-6" />
                    ) : (
                        <BsMoonStarsFill className="h-5 w-5" />
                    )}
                </div>
            )}
        </button>
    )
}

export default DarkMode
