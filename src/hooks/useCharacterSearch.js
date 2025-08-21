import { useState } from 'react'
import { searchCharacters } from '../services/api'

export const useCharacterSearch = () => {
	const [characters, setCharacters] = useState([])
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState(null)

	const search = async (filters = {}) => {
		setIsLoading(true)
		setError(null)

		const result = await searchCharacters(filters)

		if (result.success) {
			setCharacters(result.data)
		} else {
			setError(result.error)
			setCharacters([])
		}

		setIsLoading(false)
	}

	const resetSearch = () => {
		setCharacters([])
		setError(null)
	}

	return {
		characters,
		isLoading,
		error,
		search,
		resetSearch,
	}
}
