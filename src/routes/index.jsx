import {lazy} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
// const Home = lazy(() => import('../container/home'));
import Home from '../container/home';
const Products = lazy(() => import('../container/Products'));
const HookListner = lazy(() => import('../container/HookListner'));
const LoaderPage = lazy(() => import('../container/LoaderPage'));
const PostSuggestions = lazy(() => import('../container/PostSuggestions'));
const UserPage = lazy(() => import('../container/UserPage'));
const RenderPropsPage = lazy(() => import('../container/RenderProps'));
const RegisterPage = lazy(() => import('../container/Register'));
const ErrorContainer = lazy(() => import('../container/ErrorPage'));
const LetterTiles = lazy(() => import('../CoderByte/LetterTiles'));
const Phonebook = lazy(() => import('../CoderByte/Phonebook'));
const TicTacToe = lazy(() => import('../CoderByte/TicTacToe'));

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
                    <Route path='/props' element={<RenderPropsPage />}/>
                    <Route path='/register' element={<RegisterPage />}/>
                    <Route path='/error' element={<ErrorContainer />}/>
                    <Route path='/tiles' element={<LetterTiles />}/>
                    <Route path='/phonebook' element={<Phonebook />}/>
                    <Route path='/tic-tac-game' element={<TicTacToe />}/>
                </Routes>
            </>
        </BrowserRouter>
    );
}

export default RouteComponent;