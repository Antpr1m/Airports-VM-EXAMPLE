import { IAirportType, IAirportRegion, IAirportCountry } from './../../components/models/models';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface hanbookState {
	loading: boolean
	types: IAirportType[]
	regions: IAirportRegion[]
	countries: IAirportCountry[]

}

const initialState: hanbookState = {
	loading: false,
	types: [],
	regions: [],
	countries: []
}

interface HandbookPayload {
	types: IAirportType[]
	countries: IAirportCountry[]
	regions: IAirportRegion[]
}

export const handbookSlice = createSlice({
	name: 'handbook',
	initialState,
	reducers: {
		fetching(state) {
			state.loading = true
		},
		fetchSuccess(state, action: PayloadAction<HandbookPayload>) {
			state.loading = false
			state.types = action.payload.types
			state.countries = action.payload.countries
			state.regions = action.payload.regions
		}
	}
})

export default handbookSlice.reducer