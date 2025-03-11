import {lazy} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
const Home = lazy(() => import('../container/home'));
const Products = lazy(() => import('../container/Products'));
const HookListner = lazy(() => import('../container/HookListner'));
const LoaderPage = lazy(() => import('../container/LoaderPage'));
const PostSuggestions = lazy(() => import('../container/PostSuggestions'));
const UserPage = lazy(() => import('../container/UserPage'));;
const RouteComponent = () => {
    return (
        <BrowserRouter>
            <>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/search-post' element={<PostSuggestions />} />
                    <Route path='/hook' element={<HookListner />} />
                    <Route path='/products' element={<Products />} />
                    <Route path='/loader' element={<LoaderPage />} />
                    <Route path='/user' element={<UserPage />} />
                </Routes>
            </>
        </BrowserRouter>
    );
}

export default RouteComponent;