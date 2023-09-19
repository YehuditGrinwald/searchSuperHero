import React, { useContext } from 'react'
import { Hero, SelectedHeroContextType, SelectedHerosContext } from '../../HerosContextProvider'
import BasicCard from '../BasicCard/BasicCard'
import { Button } from '@mui/material'

interface IProps {
  hero: Hero,
}

function SuperheroCard({ hero }: IProps) {
  const { selectedHeros, setSelectedHeros } = useContext(SelectedHerosContext) as SelectedHeroContextType

  const selectedHerosLen = selectedHeros.length;
  const compareBtn = () => <Button size="small" disabled={selectedHerosLen === 6} onClick={() => setSelectedHeros([...selectedHeros, hero])}>Compare</Button>

  return (
    <BasicCard hero={hero} buttons={compareBtn} />
  )
}

export default React.memo(SuperheroCard)




