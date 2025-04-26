import PageTransition from "./PageTransition"

const About = () => {
    return (
        <PageTransition type="scale">
            <div className="p-10 bg-white shadow-xl rounded-xl max-w-3xl mx-auto transition-all">
                <h1 className="text-5xl font-bold mb-6 text-purple-600">About Us</h1>
                <p className="text-lg text-gray-700">
                    This is a demo of a smooth, beautiful page transition using Tailwind and Framer Motion.
                </p>
            </div>
        </PageTransition>
    )
}

export default About