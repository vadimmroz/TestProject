import { FC } from 'react'
import { useHomeData } from '@features/home/hooks/useHomeData.ts'
import Card from '@shared/components/Card.tsx'

const Home: FC = () => {
    const data = useHomeData()

    if (!data) return <div>Loading...</div>

    return (
        <div className="flex w-full flex-col">
            <h1 className="mx-auto text-4xl">Home Page</h1>
            <div className="flex flex-wrap gap-4 mx-auto justify-center mt-4">
                {data.map((e) => (
                    <Card {...e} key={e.id} />
                ))}
            </div>
        </div>
    )
}

export default Home
