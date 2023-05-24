const products = [
    {
        id: 1,
        name: "Avengers: Endgame",
        price: 9.99,
        stock: 15,
        category: "Películas",
        img: "ruta-de-la-imagen-1.jpg",
        description: "Después de los devastadores eventos de 'Avengers: Infinity War', los superhéroes de Marvel se reúnen una vez más para deshacer las acciones de Thanos y restaurar el equilibrio del universo."
    },
    {
        id: 2,
        name: "Stranger Things",
        price: 12.99,
        stock: 15,
        category: "Series",
        img: "ruta-de-la-imagen-2.jpg",
        description: "Un grupo de niños en una pequeña ciudad descubre misteriosos sucesos y fuerzas sobrenaturales cuando su amigo desaparece misteriosamente y una niña con poderes telequinéticos aparece en escena."
    },
    {
        id: 3,
        name: "Cosmos: A Spacetime Odyssey",
        price: 7.99,
        stock: 15,
        category: "Documentales",
        img: "ruta-de-la-imagen-3.jpg",
        description: "Una serie documental que explora el vasto universo y sus maravillas, llevándonos a viajes a través del tiempo y el espacio para comprender la ciencia y la naturaleza del cosmos."
    },
    {
        id: 4,
        name: "The Tonight Show Starring Jimmy Fallon",
        price: 4.99,
        stock: 15,
        category: "Programas de TV",
        img: "ruta-de-la-imagen-4.jpg",
        description: "Un popular programa de entrevistas y entretenimiento presentado por Jimmy Fallon, con invitados famosos, actuaciones musicales y segmentos cómicos que deleitan al público todas las noches."
    },
    {
        id: 5,
        name: "Joker",
        price: 8.99,
        stock: 15,
        category: "Películas",
        img: "ruta-de-la-imagen-5.jpg",
        description: "La historia del famoso villano de DC Comics, el Joker, explorando sus orígenes y su transformación en un peligroso criminal en la ciudad de Gotham."
    },
    {
        id: 6,
        name: "Breaking Bad",
        price: 14.99,
        stock: 15,
        category: "Series",
        img: "ruta-de-la-imagen-6.jpg",
        description: "La vida de un profesor de química da un giro inesperado cuando se ve involucrado en el mundo del narcotráfico, produciendo y distribuyendo metanfetaminas junto a un exestudiante."
    },
    {
        id: 7,
        name: "Planet Earth II",
        price: 6.99,
        stock: 15,
        category: "Documentales",
        img: "ruta-de-la-imagen-7.jpg",
        description: "Un fascinante documental que nos lleva a través de diferentes ecosistemas del planeta, mostrando la belleza y la diversidad de la vida animal en cada uno de ellos."
    },
    {
        id: 8,
        name: "The Big Bang Theory",
        price: 3.99,
        stock: 15,
        category: "Programas de TV",
        img: "ruta-de-la-imagen-8.jpg",
        description: "Una divertida serie que sigue la vida de un grupo de físicos brillantes pero socialmente torpes que trabajan en Caltech. Sus intereses nerd, su amor por los cómics y la ciencia, y sus peculiares habilidades sociales los llevan a situaciones cómicas y a tener que enfrentarse a los desafíos de la vida diaria junto a sus amigos y vecinos."
    }

];

export const getProducts = () =>{
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve (products)
        }, 800)
    })
}