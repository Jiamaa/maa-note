'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { verifyService } from '../services/auth'

export function useAuth(){
    const router = useRouter()

    useEffect(() => {
        let intervalId: NodeJS.Timeout

        const check = async () => {
            const result = await verifyService()
            if (!result.success){
                clearInterval(intervalId)
                router.replace('/')
            }
        }

        check()

        intervalId = setInterval(check, 60 * 1000)

        return () => clearInterval(intervalId)
    }, [router])
}

