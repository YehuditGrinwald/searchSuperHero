import React, { useContext } from 'react';
import { Hero, SelectedHeroContextType, SelectedHerosContext } from '../../HerosContextProvider';
import SuperheroCompareCard from '../SuperheroCompareCard/SuperheroCompareCard';

const Comparison = () => {
  const { selectedHeros } = useContext(SelectedHerosContext) as SelectedHeroContextType

  return (
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      maxWidth: '100vw',
      margin: '10px',
      justifyContent: 'center'
    }}> 
     {/* className='cards-container'> */}
      {selectedHeros.length ? <>
      <span>Comparison list:</span>
        {selectedHeros.map((hero: Hero) => (
          <SuperheroCompareCard hero={hero} key={hero.id}></SuperheroCompareCard>
        ))}
        </>  : ''}
    </div>
  );
};

export default Comparison;
