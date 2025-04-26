import PageTransition from "./PageTransition"

const Contact = () => {
    return (
        <PageTransition type="overlay">
            <div className="p-10 bg-white shadow-xl rounded-xl max-w-3xl mx-auto transition-all">
                <h1 className="text-5xl font-bold mb-6 text-green-600">Contact</h1>
                <p className="text-lg text-gray-700">
                    We'd love to hear from you. Drop us a line anytime.
                </p>
            </div>
        </PageTransition>
    )
}

export default Contact