import { useState } from 'react'
import MainContent from './components/MainContect/index'
import { useCharacterSearch } from './hooks/useCharacterSearch'

function App() {
	const [filters, setFilters] = useState({
		name: '',
		status: '',
		species: '',
		type: '',
		gender: '',
	})

	 const { characters, isLoading, error, search } = useCharacterSearch()

  const handleInputChange = (field, value) => {
    setFilters(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await search(filters) // Используем функцию из хука
  }


	return (
		<div className='min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900'>
			<header className='text-center py-12 px-4'>
				<div className='max-w-4xl mx-auto'>
					<h1 className='text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-4'>
						Вселенная Рика и Морти
					</h1>
					<p className='text-purple-200 text-xl md:text-2xl font-light'>
						Найди своих любимых персонажей из мультивселенной
					</p>
				</div>
			</header>

			<MainContent
				filters={filters}
				onInputChange={handleInputChange}
				onSubmit={handleSubmit}
				characters={characters}
				isLoading={isLoading}
				error={error}
			/>
		</div>
	)
}

export default App
