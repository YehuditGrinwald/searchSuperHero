import React, { createContext, useState } from "react";

interface Imageobject {
  url: string;
}

export interface IProps {
  id: number;
  name: string;
  powerstats: object;
  biography: object;
  appearance: object;
  work: object;
  connections: object;
  image: Imageobject;
  parent?: string;
  props: IProps;
  info: IProps[];
}

export interface Hero {
  id: string;
  name: string;
  powerstats: {
    intelligence: string;
    strength: string;
    speed: string;
    durability: string;
    power: string;
    combat: string;
  };
  biography: {
    "full-name": string;
    "alter-egos": string;
    aliases: string[];
    "place-of-birth": string;
    "first-appearance": string;
    publisher: string;
    alignment: string;
  };
  appearance: {
    gender: string;
    race: string;
    height: [string, string];
    weight: [string, string];
    "eye-color": string;
    "hair-color": string;
  };
  work: {
    occupation: string;
    base: string;
  };
  connections: {
    "group-affiliation": string;
    relatives: string;
  };
  image: {
    url: string;
  };
  parent?: string;
}


export type HeroContextType = {
  heros: Hero[] |[];
  setHeros: (data: any) => void;
};
export type  SelectedHeroContextType = {
  selectedHeros: Hero[] |[];
  setSelectedHeros: (data: any) => void;
};

export const HerosContext = createContext<HeroContextType>(
  { heros: [], setHeros: () => {} }
);
export const SelectedHerosContext = createContext<SelectedHeroContextType>(
  { selectedHeros: [], setSelectedHeros: () => {} }
);

interface HerosContextProviderProps {
  children: JSX.Element | JSX.Element[]
}

export const HerosContextProvider= ({ children }: HerosContextProviderProps) => {
  const [heros, setHeros] = useState<Hero[]>([]);
  return (
    <HerosContext.Provider value={{
      heros,
      setHeros
    }}>
      {children}
    </HerosContext.Provider>
  )
}

export const SelectedHerosContextProvider= ({ children }: HerosContextProviderProps) => {
  const [selectedHeros, setSelectedHeros] = useState<Hero[]>([]);
  return (
    <SelectedHerosContext.Provider value={{
      selectedHeros,
      setSelectedHeros
    }}>
      {children}
    </SelectedHerosContext.Provider>
  )
}