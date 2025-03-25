import NewsFeed from './Newsfeed'

const OverTopNewsfeed = () => {
    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 p-6">
            <div className="max-w-4xl mx-auto">
                <header className="text-center mb-8">
                    <h1 className="text-5xl font-extrabold text-white shadow-lg mb-2">
                        The Over-the-Top Newsfeed
                    </h1>
                    <p className="text-xl text-white/80">Ridiculous news for your entertainment</p>
                </header>
                <NewsFeed />
            </div>
        </div>
    )
}

export default OverTopNewsfeed