import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "../../../axios"
import { IAirport, ServerResponce } from "../../../components/models/models"
import { useDebounce } from "../../../hooks/debaunce"
import { useInput } from "../../../hooks/input"


const AirportSearch = () => {

	const input = useInput('')
	const [airports, setAirports] = useState<IAirport[]>([])
	const [dropdown, setDropdown] = useState(false)
	const debaunced = useDebounce(input.value)
	const navigate = useNavigate()

	async function searchAirports() {
		const response = await axios.get<ServerResponce<IAirport>>('airports', {
			params: {
				search: debaunced,
				count: 10
			}
		})
		setAirports(response.data.results)
	}
	//Простая отправка value на endpoint для поиска, с использованием useDebaunce и хука для заполнения поля ввода
	//И последующим отображением выпадающего списка с результатами поиска

	useEffect(() => {
		if (debaunced.length > 2) {
			searchAirports().then(() => setDropdown(true))
		} else {
			setDropdown(false)
		}

	}, [debaunced])

	return (
		<div className="mb-5 relative">
			<input type="text" className="border py-2 px-4 outline-0 w-full h-[42px]"
				placeholder="Type somesing here..."
				{...input}
			/>

			{dropdown && <ul className="list-none absolute left-0 right-0 h-[200px] top-[42px] shadow-md bg-white overflow-y-scroll">
				{
					airports.map(airport => <li
						key={airport.id}
						className='py-2 px-4 mb-2 hover: bg-gray-500 hover:transition-colors cursor-pointer hover:text-white'
						onClick={() => navigate(`/airport/${airport.id}`)}
					>{airport.name}</li>)
				}
			</ul>}
		</div>
	)
}
export default AirportSearch