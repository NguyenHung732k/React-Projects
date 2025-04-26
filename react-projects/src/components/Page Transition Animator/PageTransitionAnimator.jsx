import { Routes, Route } from "react-router-dom"
import { AnimatePresence } from "framer-motion"
import { BrowserRouter } from "react-router-dom"
import Home from "./Home"
import About from "./About"
import Contact from "./Contact"

const PageTransitionAnimator = () => {

    return (
        <BrowserRouter>
            <div className="min-h-screen bg-gray-100 text-gray-800">
                <AnimatePresence mode="wait">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </AnimatePresence>
            </div>
        </BrowserRouter>
    )
}

export default PageTransitionAnimator