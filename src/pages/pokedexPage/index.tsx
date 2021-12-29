import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import * as S from './styles';

interface IApiRecive {
    results: [IPokemon]
}

interface IPokemon {
    name: string;
    url: string;
}

export function PokedexPage() {
    const [data, setData] = useState<IPokemon[]>([]);

    useEffect(() => {
        async function loadPokedex() {
            const { data } = await api.get<IApiRecive>(`pokemon`);

        setData(data.results);
        }
        loadPokedex();
    },[])
    console.log(data);

    return(
        <S.PokedexPage>
            {data.map((pokemon, i) => (
                <S.PokemonCard>
                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${i+1}.png`} alt="" />
                    <p>{pokemon.name}</p>
                    <S.CardBackground></S.CardBackground>
                </S.PokemonCard>
            ))}
        </S.PokedexPage>
    )
}