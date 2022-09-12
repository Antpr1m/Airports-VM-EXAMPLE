import { useParams } from "react-router-dom"
import axios from "../axios/index"
import { useEffect, useState } from 'react'
import { IAirportDetail } from "../components/models/models"


const AirportDetailPage = () => {

	const params = useParams<'id'>()													 //Берет параметр из адресной строки 
	const [airport, setAirport] = useState<IAirportDetail | null>(null)
	const [loading, setLoading] = useState(true)

	const fetchDetailAirport = async () => {
		const response = await axios.get<IAirportDetail>(`/airports/${params.id}`)
		setAirport(response.data)
		setLoading(false)

	}

	useEffect(() => {
		fetchDetailAirport()
	}, [])

	if (loading) return <p className="text-center">Loading...</p>


	return (
		<div className="container mx-auto pt-5 max-w-[760px] ">
			<h1 className="text-center text-2xl">{airport?.name}</h1>
		</div>
	)
}
export default AirportDetailPage