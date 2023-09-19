import React, { useContext } from 'react'
import { Hero, SelectedHeroContextType, SelectedHerosContext } from '../../HerosContextProvider'
import { Button } from '@mui/material'
import BasicCard from '../BasicCard/BasicCard'

interface IProps {
  hero: Hero,
}

function SuperheroCompareCard({ hero }: IProps) {
  const { selectedHeros, setSelectedHeros } = useContext(SelectedHerosContext) as SelectedHeroContextType

  const removeBtn = () => <Button onClick={() => setSelectedHeros(selectedHeros.filter((item) => item.id != hero.id))}>remove</Button>

  return (
    <div>
      <BasicCard hero={hero} buttons={removeBtn} displayMoreInfo={true} />
    </div>
  )
}

export default SuperheroCompareCard;
