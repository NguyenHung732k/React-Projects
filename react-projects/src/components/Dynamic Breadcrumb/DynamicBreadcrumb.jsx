import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Breadcrumb from './Breadcrumb'

const Home = () => <div className="p-4">Home Page</div>
const Category = () => <div className="p-4">Category Page</div>
const Product = () => <div className="p-4">Product Page</div>

const DynamicBreadcrumb = () => {
    return (
        <Router>
            <div className="p-6">
                <Breadcrumb />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/category" element={<Category />} />
                    <Route path="/category/:id" element={<Product />} />
                </Routes>
            </div>
        </Router>
    )
}

export default DynamicBreadcrumb