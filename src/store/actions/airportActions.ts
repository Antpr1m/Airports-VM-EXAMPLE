import { ServerResponce } from './../../components/models/models';
import { AppDispatch } from './../index';
import axios from "../../axios/index"
import { IAirport } from '../../components/models/models';
import { airportSlice } from '../slices/airportSlice';

export const fetchAirports = (page = 1, count = 50) => {
	return async (dispatch: AppDispatch) => {
		try {
			dispatch(airportSlice.actions.fetching())
			const response = await axios.get<ServerResponce<IAirport>>('airports', {
				params: { page, count }
			})
			dispatch(airportSlice.actions.fetchSuccess({
				airports: response.data.results,
				count: response.data.count
			}))
		} catch (e) {
			dispatch(airportSlice.actions.fetchError(e as Error))
		}
	}
}