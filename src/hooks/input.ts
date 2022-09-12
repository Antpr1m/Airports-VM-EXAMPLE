import { ChangeEvent, useState } from "react"

//Универсальный хук для обработки инпутов

interface InputReturn {
	value: string
	onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

export const useInput = (initialVAlue = ''): InputReturn => {

	const [value, setValue] = useState(initialVAlue)

	const onChange = (event: ChangeEvent<HTMLInputElement>) => {
		setValue(event.target.value)
	}
	return {
		value,
		onChange
	}
}