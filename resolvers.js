// You need the tables of the database
const Playlist = require('../server/models/PlaylistModel'); 
const Kids = require('../server/models/kidsModel');
const Video = require('../server/models/VideoModel');
const User = require('../server/models/UserModel');
const mongoose = require('../node_modules/mongoose');

const resolvers = {
    Query: {
       
        hello: () => {
            return "Hola Mundo";
        },
        playlists: async (_, {id}) => {

            const playlist = await Playlist.find({ ownerId: id })
                .populate('ownerId')
                .populate('profilesPartners', "path"["profilesPartners", 0, "profilesPartners"], null, { strictPopulate: false })
                .populate('videos', "path"["videos", 0, "videos"], null, { strictPopulate: false }).exec();

            console.log(playlist);
            return playlist;
        },
        Profiles: async (_, {id}) => {
            const kids = await Kids.find({ idUser: id })
                .populate('idUser').exec();

            return kids;
        },
        playlist: async (_, { id }) => {
            const playlis = await Playlist.find({ _id: id })
                .populate('ownerId')
                .populate('profilesPartners', "path"["profilesPartners", 0, "profilesPartners"], null, { strictPopulate: false })
                .populate('videos', "path"["videos", 0, "videos"], null, { strictPopulate: false }).exec();
            return playlis;
        },
        videos: async (_,{id}) => {
            const video = await Video.find({_id:id}).populate('userId').exec();
            return video;
        },
        playlistkids: async (_,{id}) => {

            const playlis = await Playlist.find({profilesPartners:id})
            .populate('ownerId')
            .populate('profilesPartners', "path"["profilesPartners", 0, "profilesPartners"], null, { strictPopulate: false })
            .populate('videos', "path"["videos", 0, "videos"], null, { strictPopulate: false }).exec();
            return playlis;

        }
    }
}

module.exports = {
    resolvers
};

