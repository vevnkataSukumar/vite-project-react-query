import {lazy} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
const Home = lazy(() => import('../container/home'));
const Products = lazy(() => import('../container/Products'));
const HookListner = lazy(() => import('../container/HookListner'));
const LoaderPage = lazy(() => import('../container/LoaderPage'));
const PostSuggestions = lazy(() => import('../container/PostSuggestions'));
const RouteComponent = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<PostSuggestions />} />
                <Route path='/hook' element={<HookListner />} />
                <Route path='/home' element={<Home />} />
                <Route path='/products' element={<Products />} />
                <Route path='/loader' element={<LoaderPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default RouteComponent;