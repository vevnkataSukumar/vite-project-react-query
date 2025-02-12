import {lazy} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
const Home = lazy(() => import('../container/home'));
const Products = lazy(() => import('../container/Products'));
const HookListner = lazy(() => import('../container/HookListner'));
const RouteComponent = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HookListner />} />
                <Route path='/home' element={<Home />} />
                <Route path='/products' element={<Products />} />
            </Routes>
        </BrowserRouter>
    );
}

export default RouteComponent;