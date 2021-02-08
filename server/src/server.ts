import express from "express";
import routes from './routes'

const app = express();

app.use(express.json());
app.use(routes)
app.listen(3333);

// const aeronaves = [
//   {
//     id: 0,
//     nome: "E2-190",
//     marca: "Embraer",
//     ano: 2014,
//     descricao: "Aeronave de transporte de carga",
//     vendido: true,
//   },  
//   {
//     id: 1,
//     nome: "KC-390",
//     marca: "Embraer",
//     ano: 2015,
//     descricao: "Aeronave de transporte de carga",
//     vendido: false,
//   },
//   {
//     id: 2,
//     nome: "737-100",
//     marca: "Boeing",
//     ano: 1998,
//     descricao: "Aeronave de transporte comercial",
//     vendido: false,
//   },
//   {
//     id: 3,
//     nome: "A320",
//     marca: "Airbus",
//     ano: 1995,
//     descricao: "Aeronave de transporte de carga",
//     vendido: true,
//   },
// ];


// // get all
// app.get("/aeronaves", (request, response) => {
//   console.log("ola mundo");

//   return response.json(aeronaves);
// });

// //get by id
// app.get("/aeronaves/:id", (request, response) => {
//   const id = Number(request.params.id);

//   const aeronave = aeronaves[id];

//   return response.json(aeronave);
// });

// // filter
// app.get("/aeronaves/find", (request, response) => {
//   const search = String(request.query.search);

//   const filteredAeronaves = search
//     ? aeronaves.filter((aeronave) => aeronave.includes(search))
//     : aeronaves;

//   return response.json(filteredAeronaves);
// });

// // post
// app.post("/aeronaves", (request, response) => {
//   const data = request.body;

//   return response.json(data);
// });

