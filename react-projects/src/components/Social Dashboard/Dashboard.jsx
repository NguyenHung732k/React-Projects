import useFetch from './useFetch'
import Header from './Header'
import Sidebar from './Sidebar'
import AnalyticsCard from './AnalyticsCard'
import { toast } from 'react-toastify'

const Dashboard = () => {
    const { data: posts, loading: loadingPosts, error: errorPosts } = useFetch('https://jsonplaceholder.typicode.com/posts')
    const { data: users, loading: loadingUsers, error: errorUsers } = useFetch('https://jsonplaceholder.typicode.com/users')

    if (loadingPosts || loadingUsers) return <div className="flex justify-center items-center h-screen">Loading...</div>

    if (errorPosts || errorUsers) {
        toast.error(`Error fetching data: ${errorPosts?.message || errorUsers?.message}`)
        return <div className="text-red-500"><p>Error fetching data.</p></div>
    }

    toast.success("Data loaded successfully!")

    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-grow p-4">
                <Header />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <AnalyticsCard title="Total Posts" value={posts.length} />
                    <AnalyticsCard title="Total Users" value={users.length} />
                    <AnalyticsCard title="Comments" value={0} />
                </div>
            </div>
        </div>
    )
}

export default Dashboard