const { makeExecutableSchema } = require('../node_modules/@graphql-tools/schema');
const { resolvers } = require('./resolvers');

const typeDefs = `
    type Query {
        hello : String
        playlists(id: ID!): [Playlist]
        Profiles(id: ID!): [kidsModel]
        playlist(id: ID!): [Playlist]
        videos(id:ID!): [Video]
        playlistkids(id:ID!): [Playlist]
    }

    type Playlist {
        _id : ID
        ownerId : User
        name : String!
        profilesPartners : [kidsModel]
        videos : [Video] 
    }

    type User {
        _id : ID
        name : String!
        lastname : String!
        email : String!
        password : String!
        pin : String!
        country : String!
        Datebirth : String!
        phone : String!
        estado : String!
    }
   
    type kidsModel {
        _id : ID
        idUser : User
        name : String!
        pin: String!
        avatar : String!
        edad : Int!
    }

    type Video {
        _id : ID
        name : String!
        url : String!
        description: String
        userId : User
    }
`
;

const schema = makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers: resolvers
});

module.exports = { schema };

/* 
    */