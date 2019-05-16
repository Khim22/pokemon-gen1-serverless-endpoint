const gql = require('graphql')

export const typeDefs = gql`    
type Query{
    getPokemonInfo(handle: String!): Pokemon!
}

type Pokemon{
    poke_id : ID!
    name: String!
    base_exp: Int!
    height: Int!
    is_default: Boolean!
    order: Int!
    weight: Int!
    abilities: [PokeAbility]
    location_area_encounters : String!
    moves: [Move]
    species: [Species]
    types: [Type]
}

type PokeAbility{
    ability_id : ID!
    name: String!
    pokemon: [Pokemon]
}

type Move{
    move_id : ID!
    name: String!
    accuracy: Int!
    pp: Int!
    power: Int!
    type: Type
}

type Species{
    species_id: ID!
    name: String!
    gender_rate: Int!
    capture_rate: Int!
}

type Type{
    type_id: ID!
    name: String!
}
`