import { useEffect, useState } from "react"
import { useAppDispatch, useAppSelector } from "../../hooks/redux"
import { fetchAirports } from "../../store/actions/airportActions"
import AirportCard from "./mainPageComponents/AirportCard"
import AirportFilter from "./mainPageComponents/AirportFilter"
import AirportSearch from "./mainPageComponents/AirportSearch"
import ReactPaginate from 'react-paginate';


const ITEMS_PER_PAGE = 50

const MainPage = () => {

	const dispatch = useAppDispatch()
	const { error, loading, airports, count } = useAppSelector(state => state.airport)
	const [page, setPage] = useState(0)

	const pageCount = Math.ceil(count / ITEMS_PER_PAGE)
	const pageChangeHandler = ({ selected }: { selected: number }) => {
		setPage(selected)

	}

	useEffect(() => {
		dispatch(fetchAirports(page, ITEMS_PER_PAGE))
	}, [dispatch, page])

	return (
		<div className="container mx-auto max-w-[760px] pt-5">
			<AirportSearch />

			<AirportFilter />

			{loading && <p className="text-center text-xl">Loading...</p>}
			{loading && <p className="text-center text-xl text-red-600">{error}</p>}

			{
				airports.map(airport => <AirportCard key={airport.id} airport={airport} />)
			}

			<ReactPaginate
				breakLabel="..."
				nextLabel=">"
				onPageChange={pageChangeHandler}
				pageRangeDisplayed={3}
				pageCount={pageCount}
				forcePage={page}
				previousLabel="<"
				containerClassName="flex"
				pageClassName="py-1 px-2 mr-2"
				previousClassName="py-1 px-2 mr-2"
				nextClassName="py-1 px-2"
				activeClassName="bg-gray-500 text-white"
			/>

		</div>
	)
}
export default MainPage