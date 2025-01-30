import Header from '../components/Header'
import ThemeSelector from '../components/ThemeSelector'
import UploadMedia from '../components/UploadMedia'

const HomePage = () => {
    const handleThemeChange = (newTheme) => {
        console.log("Theme selected:", newTheme)
    }

    return (
        <div className="min-h-screen bg-gray-100">
            <Header />
            <main className="container mx-auto p-6">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-800">Create Your Event Memory Book</h1>
                    <p className="text-lg text-gray-600 mt-2">Add your photos, videos, and messages to make this day unforgettable.</p>
                </div>

                <ThemeSelector onChange={handleThemeChange} />
                <UploadMedia onUpload={(files) => console.log(files)} />

                <button className="bg-blue-500 hover:bg-blue-700 text-white py-3 px-6 rounded-lg shadow-lg mt-8">
                    Start Creating
                </button>
            </main>
        </div>
    )
}

export default HomePage