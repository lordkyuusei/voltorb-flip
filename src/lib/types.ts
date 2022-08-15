export type PokemonCell = {
    id: number;
    isFlipped: boolean;
    isMarked: boolean;
}

export type PokemonRow = PokemonCell[];
export type PokemonGame = PokemonRow[];

export type OddTable = {
    [key: number]: number[];
}