import { useEffect, useLayoutEffect, useState } from 'react'
import { homeApi } from '@features/home/services/homeApi'
import { TData } from '@/types/commonTypes'
import { useNavigate } from '@tanstack/react-router'

export const useHomeData = () => {
    const [data, setData] = useState<TData[] | null>(null)
    const navigate = useNavigate()
    useEffect(() => {
        const fetchData = async () => {
            const result = await homeApi.getData()
            setData(result)
        }
        fetchData()
    }, [])

    useLayoutEffect(() => {
        !localStorage.getItem('token') && navigate({ to: '/login' })
    })

    return data
}
