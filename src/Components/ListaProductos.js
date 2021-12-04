
export const ListaProductos = [{
    id: 14,
    title:'Termómetro',
    description: 'Dispositivo para medir la temperatura corporal',
    price: 1900.00,
    pictureURL: 'https://www.farmacialeloir.com.ar/img/articulos/2020/09/tc_1aspen_termometro_digital_fever_blue.jpg',
    stock: 5,
    categoria: 'termometros',
},
{
    id: 15,
    title:'Termómetro',
    description: 'Dispositivo para medir la temperatura corporal',
    price: 3800.00,
    pictureURL: 'https://www.avasoluciones.com/wp-content/uploads/2020/05/TERMOMETRO-INFRARROJO-DIGITAL-HG01.jpg',
    stock: 10,
    categoria: 'termometros',
},
{
    id: 13,
    title:'Termómetro',
    description: 'Dispositivo para medir la temperatura corporal',
    price: 3000.00,
    pictureURL: 'https://http2.mlstatic.com/D_NQ_NP_2X_741708-MLA46964296518_082021-F.webp',
    stock: 15,
    categoria: 'termometros',
},
{
    id: 25,
    title: 'Oxímetro',
    description: 'Dispositivo para medir la saturación de la sangre en tiempo real',
    price: 4200.00,
    pictureURL: 'https://pardohogar.vtexassets.com/arquivos/ids/170824/OXIMETRO.jpg?v=637641209873200000g',
    stock: 7,
    categoria: 'oximetros',
},
{
    id: 154,
    title: 'Tensiómetro',
    description: 'Dispositivo para medir la presión arterial',
    price: 3800.00,
    pictureURL: 'https://d2ye0ltusw47tz.cloudfront.net/371194-large_default/tensiometro-digital-hipertension-automatico-citizen-chu304.jpg',
    stock: 2,
    categoria: 'tensiometros'
},
{
    id: 414,
    title: 'Martillo de Reflejos',
    description: 'Dispositivo para evocar los reflejos en humanos',
    price: 1500.00,
    pictureURL: 'https://m.media-amazon.com/images/I/71hsohCw7nL._SX342_.jpg',
    stock: 16,
    categoria: 'martillos',
}
]

const itemsPromise = new Promise((res) => {
    setTimeout(() => {
        res(ListaProductos);

    }, 2000);
});


const item = {
    id: "14",
    title: "Termómetro",
    img: 'https://www.farmacialeloir.com.ar/img/articulos/2020/09/tc_1aspen_termometro_digital_fever_blue.jpg',

}; 

export const itemPromise = new Promise((res) => {
    setTimeout(() => {
        res(item);

    }, 2000);
});

export default itemsPromise