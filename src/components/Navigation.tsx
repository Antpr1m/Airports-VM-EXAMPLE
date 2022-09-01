import { Link } from "react-router-dom"


const Navigation = () => {
	return (
		<nav className="flex justify-between px-5 bg-gray-200 h-12 items-center shadow-md">
			<Link to={"/"}>Airport</Link>

			<Link to={"auth"}>Auth</Link>
		</nav>
	)
}
export default Navigation