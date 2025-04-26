import PageTransition from "./PageTransition"

const Home = () => {
    return (
        <PageTransition type="slide">
            <div className="p-10 bg-white shadow-xl rounded-xl max-w-3xl mx-auto transition-all">
                <h1 className="text-5xl font-bold mb-6 text-blue-600">Home Page</h1>
                <p className="text-lg leading-relaxed text-gray-700">
                    Welcome to the home page. Enjoy the animation magic ✨
                </p>
            </div>
        </PageTransition>
    )
}

export default Home