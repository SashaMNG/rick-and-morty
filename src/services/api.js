const BASE_URL = 'https://rickandmortyapi.com/api'

export const searchCharacters = async (filters = {}) => {
	try {
		const params = new URLSearchParams()

		Object.entries(filters).forEach(([key, value]) => {
			if (value) params.append(key, value)
		})

		const response = await fetch(`${BASE_URL}/character?${params}`)

		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`)
		}

		const data = await response.json()
		return {
			success: true,
			data: data.results || [],
			info: data.info || {},
		}
	} catch (error) {
		return {
			success: false,
			error: error.message || 'Ошибка при загрузке персонажей',
		}
	}
}
