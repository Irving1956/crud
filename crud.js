
const request = require('request');
const URL_BASE = 'https://goodreads-devf-aaron.herokuapp.com/api/v1/';

 const getAllAuthors = () => {
     const URI = 'authors/';

     return new Promise((resolve, rejects) =>{

        request.get(`${URL_BASE}${URI}`, (err, response, body) =>{

            const json = JSON.parse(body);
            response.statusCode === 200
            ? resolve(json)
            : rejects(err);
        });
     });
 }

//  ejecuciones

// getAllAuthors()
// .then(respuesta => console.log(respuesta))
// .catch(err => console.log(err));

const getAuthorById = (id) => {
    const URI = 'authors/';
    return new Promise ((resolve, reject)=>{
        request.get(`${URL_BASE}${URI}${id}`,(err, response, body)=>{
            const json = JSON.parse(body)
            response.statusCode === 200
            ? resolve(json)
            : reject (err);
        })
    })
 }
 getAuthorById (2586)
   .then (respuesta => console.log(respuesta))
   .catch (err => console.log(err));

// CREATE
const createAuthor = (nombre, apellido, bio, genero, edad) =>{
    const URI = 'authors/';
    const authorEnviar = {
        name :  nombre,
        last_name : apellido,
        nacionalidad: 'MX',
        biography: bio,
        gender: genero,
        age: edad
    }
    const URL = `${URL_BASE}${URI}`;

    return new Promise((resolve, reject) =>{
        request.post(
            {url: URL, 
            form: authorEnviar},
            (err, response, body) =>{

                const json = JSON.parse(body);
                console.log(response.statusCode);
                
                response.statusCode === 201
                ? resolve(json)
                : reject(err);
            });
    });
}
// // EJECUCION DEL CREATE
// createAuthor(
//     'Irving',
//     'Medina',
//     'Macho Alfa',
//     'M',
//     28
// ).then(respuesta => console.log(respuesta))
// .catch(err => console.log(err));


// UPADTE
const updateAuthor = (nombre, apellido, bio, genero, edad, id) =>{
const URI = 'authors/';
const authorNuevo = {
    name :  nombre,
    last_name : apellido,
    nacionalidad: 'MX',
    biography: bio,
    gender: genero,
    age: edad
    }
    const URL = `${URL_BASE}${URI}${id}/`;
    return new Promise((resolve, reject) =>{

        request.put({url: URL, form: authorNuevo},
            (err, response, body) =>{
                const json = JSON.parse(body);
                response.statusCode === 200
                ? resolve(json)
                : reject(err);
            });
    });
}
// EJECUCION UPDATE
// updateAuthor(
//     'Irving',
//     'Juarez',
//     'Macho Alfa',
//     'M',
//     28,
//     2586
// ).then(respuesta => console.log(respuesta))
// .catch(err => console.log(err));

const deleteAuthor = (id) =>{
    const URI = 'authors/';
    return new Promise((resolve, reject) =>{
    
        request.delete(`${URL_BASE}${URI}${id}/`,
        (err, response, body) =>{
            response.statusCode === 204
            ? resolve(response.statusCode)
            : reject(err)
        });
    });
}
// EJECUCION DELETE
deleteAuthor(2586).then(respuesta => console.log(respuesta)).catch(err => console.log(err));
