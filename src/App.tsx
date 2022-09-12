import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import { useAppDispatch } from './hooks/redux';
import AirportDetailPage from './pages/AirportDetailPage';
import AuthPage from './pages/AuthPage';
import MainPage from './pages/MainPage/MainPage';
import { fetchHandbook } from './store/actions/handbookActions';


function App() {

	const dispatch = useAppDispatch()
	useEffect(() => {
		dispatch(fetchHandbook())
	}, [dispatch])

	return (
		<>
			<Navigation />
			<Routes>
				<Route path='/' element={<MainPage />} />
				<Route path='/auth' element={<AuthPage />} />
				<Route path='/airport/:id' element={<AirportDetailPage />} />
			</Routes>
		</>
	);
}

export default App;
