import * as S from './styles';

export function InitialPage() {
    return(
        <S.InitialPage>
           <S.Background>
            <S.Content>
                <S.Cta>
                <h1>What is this site?</h1>
                <h2>
                This site is a pokédex,<br/>
                a place to search for a pokémon<br/>
                and if you want,<br/>
                save your favorite pokémons<br/>
                in your bag
                </h2>
                    <S.Btn>Search Pokémon</S.Btn>
                </S.Cta>
            </S.Content>
           </S.Background>
        </S.InitialPage>
    )
}