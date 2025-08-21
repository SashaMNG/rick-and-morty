const MainContent = ({ filters, onInputChange, onSubmit, characters, isLoading, error }) => {
	return (
		<main className='flex-1 flex flex-col items-center justify-center px-4 pb-12'>
			<div className='w-full max-w-4xl bg-slate-800/40 backdrop-blur-lg rounded-3xl p-8 md:p-10 shadow-2xl border border-purple-500/20'>
				<div className='text-center mb-10'>
					<h2 className='text-3xl font-bold text-cyan-400 mb-3'>
						Поиск персонажей
					</h2>
					<p className='text-purple-200'>
						Используй фильтры для точного поиска
					</p>
				</div>

				<form onSubmit={onSubmit} className='space-y-8'>
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
						<div className='space-y-3'>
							<label className='block text-lg font-semibold text-cyan-300'>
								Имя персонажа
							</label>
							<input
								type='text'
								value={filters.name}
								onChange={e => onInputChange('name', e.target.value)}
								placeholder='Рик, Морти, и т.д.'
								className='w-full px-5 py-4 bg-slate-700/50 border-2 border-cyan-400/30 rounded-xl text-white placeholder-purple-300/50 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300'
							/>
						</div>

						<div className='space-y-3'>
							<label className='block text-lg font-semibold text-cyan-300'>
								Статус
							</label>
							<select
								value={filters.status}
								onChange={e => onInputChange('status', e.target.value)}
								className='w-full px-5 py-4 bg-slate-700/50 border-2 border-cyan-400/30 rounded-xl text-white focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300'
							>
								<option value=''>Все статусы</option>
								<option value='alive'>Жив</option>
								<option value='dead'>Мёртв</option>
								<option value='unknown'>Неизвестно</option>
							</select>
						</div>

						<div className='space-y-3'>
							<label className='block text-lg font-semibold text-cyan-300'>
								Раса
							</label>
							<select
								value={filters.species}
								onChange={e => onInputChange('species', e.target.value)}
								className='w-full px-5 py-4 bg-slate-700/50 border-2 border-cyan-400/30 rounded-xl text-white focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300'
							>
								<option value=''>Все расы</option>
								<option value='human'>Человек</option>
								<option value='alien'>Пришелец</option>
								<option value='humanoid'>Гуманоид</option>
								<option value='robot'>Робот</option>
								<option value='animal'>Животное</option>
							</select>
						</div>

						<div className='space-y-3'>
							<label className='block text-lg font-semibold text-cyan-300'>
								Тип
							</label>
							<input
								type='text'
								value={filters.type}
								onChange={e => onInputChange('type', e.target.value)}
								placeholder='Генетический эксперимент, и т.д.'
								className='w-full px-5 py-4 bg-slate-700/50 border-2 border-cyan-400/30 rounded-xl text-white placeholder-purple-300/50 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300'
							/>
						</div>

						<div className='space-y-3'>
							<label className='block text-lg font-semibold text-cyan-300'>
								Пол
							</label>
							<select
								value={filters.gender}
								onChange={e => onInputChange('gender', e.target.value)}
								className='w-full px-5 py-4 bg-slate-700/50 border-2 border-cyan-400/30 rounded-xl text-white focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300'
							>
								<option value=''>Все полы</option>
								<option value='female'>Женский</option>
								<option value='male'>Мужской</option>
								<option value='genderless'>Без пола</option>
								<option value='unknown'>Неизвестно</option>
							</select>
						</div>
					</div>

					<div className='text-center pt-6'>
						<button
							type='submit'
              disabled={isLoading} 
							className='bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold text-lg py-4 px-12 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40'
						>
							 {isLoading ? 'Поиск...' : 'Найти персонажей'}
						</button>
					</div>
				</form>
			</div>

      {isLoading && (
    <div className="text-center py-12">
      <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-cyan-500 border-t-transparent mb-4"></div>
      <p className="text-cyan-300 text-lg">Загружаем персонажей...</p>
    </div>
  )}

{error && (
    <div className="text-center py-12">
      <div className="text-red-400 text-4xl mb-4">⚠️</div>
      <h3 className="text-2xl font-semibold text-red-300 mb-2">Ошибка</h3>
      <p className="text-red-200">{error}</p>
    </div>
  )}

		 {!isLoading && !error && characters.length > 0 && (
    <div>
      <div className="text-center mb-8">
        <h3 className="text-3xl font-bold text-cyan-400 mb-2">
          Найдено персонажей: {characters.length}
        </h3>
        <p className="text-purple-200">Результаты поиска</p>
      </div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {characters.map(character => (
          <div key={character.id} className="bg-slate-800/50 rounded-2xl p-4 border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300">
            <img 
              src={character.image} 
              alt={character.name}
              className="w-full h-48 object-cover rounded-xl mb-4"
            />
            <h4 className="text-lg font-semibold text-cyan-300 mb-2">
              {character.name}
            </h4>
            <div className="space-y-1 text-sm text-purple-200">
              <p>Статус: {character.status}</p>
              <p>Раса: {character.species}</p>
              <p>Пол: {character.gender}</p>
              {character.type && <p>Тип: {character.type}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  )}

  {!isLoading && !error && characters.length === 0 && (
    <div className="text-center py-16">
      <div className="text-cyan-400 text-5xl mb-4">🔍</div>
      <h3 className="text-2xl font-semibold text-cyan-300 mb-2">
        Персонажи не найдены
      </h3>
      <p className="text-purple-200">
        Попробуйте изменить параметры поиска
      </p>
    </div>
  )}

		</main>
	)
}

export default MainContent
