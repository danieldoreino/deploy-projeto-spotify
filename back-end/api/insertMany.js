// Arquivo usado para transferir o banco de dados de artistas e músicas para o Mongo.

import { artistArray } from "../../front-end/src/assets/database/artists.js";
import { songsArray } from "../../front-end/src/assets/database/songs.js";
import { db } from "./connect.js";

const newArtistArray = artistArray.map((currentArtistObj) => {
  const newArtistObj = { ...currentArtistObj };
  delete newArtistObj.id;

  return newArtistObj;
});
// A função acima pega o banco de dados de artistas, copia para uma nova array e exclui o 'id', já que o Mongo já atribui um ID para cada artista.

const newSongsArray = songsArray.map((currentSongObj) => {
  const newSongObj = { ...currentSongObj };
  delete newSongObj.id;

  return newSongObj;
});
// A função acima pega o banco de dados de músicas, copia para uma nova array e exclui o 'id', já que o Mongo já atribui um ID para cada música.

const responseSongs = await db.collection("songs").insertMany(newSongsArray);
const responseArtists = await db
  .collection("artists")
  .insertMany(newArtistArray);
// Estas duas funções acima inserem os novos arrays de artistas e músicas no banco de dados do Mongo.

console.log(responseSongs);
console.log(responseArtists);

// console.log(newArtistArray);
// console.log(newSongsArray);
