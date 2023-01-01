import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import { loads } from './features/water/waterSlice';

function App() {
    const route = useSelector(state => state.page);
    document.title = route.title;

    const dispatch = useDispatch();
    dispatch(loads());

    return (
        <>
            {route.page === '/'? <Home /> : ''}
            {route.page === '/login'? <Login /> : ''}
            {route.page === '/signup'? <Signup /> : ''}
        </>
    );
}

export default App;
