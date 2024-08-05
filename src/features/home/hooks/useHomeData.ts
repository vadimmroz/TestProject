import { useEffect, useState } from 'react'
import { homeApi } from '@features/home/services/homeApi'
import { TData } from '@/types/commonTypes'

export const useHomeData = () => {
    const [data, setData] = useState<TData[] | null>(null)

    useEffect(() => {
        const fetchData = async () => {
            const result = await homeApi.getData()
            setData(result)
        }
        fetchData()
    }, [])

    return data
}
