import React from 'react';
// import '../../common.scss'
import { Hero} from '../../HerosContextProvider'
import SuperheroCard from '../SuperheroCard/SuperheroCard'

interface SearchResultsProps {
  heros: Hero[];
}
const SearchResults  = ({heros}:SearchResultsProps) => {
  console.log('SearchResults',heros)
  return (
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      maxWidth: '100vw',
      margin: '10px',
      justifyContent: 'center'
    }} >
        {/* className='cards-container'>    */}
     {heros.map((hero) => (
        <SuperheroCard
          hero={hero}
          key={hero.id}></SuperheroCard>
      ))}
    </div>


  )
}
export default React.memo(SearchResults);

