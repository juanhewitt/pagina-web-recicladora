const elementos = document.getElementsByClassName(".col-4");
const pagina = document.querySelector(".hola");
  let precios = [
  {
    name:"pet",
    precio:1400,
    img: "https://grupoglobalpack.com/wp-content/uploads/2020/10/Envases-pet.jpg",
  },
  {
    name: "pasta",
    precio:1600,
    img: "https://thumbs.dreamstime.com/b/botellas-detergentes-pl%C3%A1sticas-productos-de-limpieza-27979750.jpg",
  },
  {
    name: "carton",
    precio: 2000,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeVgD7wA7A0Aym4xWKRuD0pxx8AdgFNEVsYg&usqp=CAU",
  },
  {
    name: "plastico", 
    precio:700,
    img: "https://t2.ev.ltmcdn.com/es/posts/0/4/0/plasticos_de_un_solo_uso_que_son_ejemplos_consecuencias_y_prohibicion_3040_orig.jpg",
  },
  {
    name:"archivo", 
    precio:700,
    img: "https://definicion.de/wp-content/uploads/2011/04/archivo-1.jpg",
  },
  {
    name: "chatarra", 
    precio:700,
    img: "https://www.arcedianorecuperaciones.com/wp-content/uploads/2021/02/reciclaje-chatarra.jpg",
  },
  {
    name: "cable", 
    precio:4000,
    img: "https://conceptodefinicion.de/wp-content/uploads/2017/01/Cable.jpg",
  },
  {
    name: "aluminio", 
    precio:500,
    img: "https://www.abc.com.py/resizer/o_olFXGJww1MV6RO6n44-5XhBYk=/fit-in/770x495/smart/arc-anglerfish-arc2-prod-abccolor.s3.amazonaws.com/public/VC5KXXJMR5DUJJZQZK2BMDYNAE.jpg",
  },
  {
    name: "bronce", 
    precio:12000,
    img: "https://previews.123rf.com/images/tatabrada/tatabrada1707/tatabrada170700011/81856497-objetos-antiguos-de-bronce-y-lat%C3%B3n-a-la-venta-en-el-mercado-de-pulgas.jpg?fj=1",
  },
  {
    name: "bateria", 
    precio:1500,
    img: "https://blog.330ohms.com/wp-content/uploads/2016/03/pilas-y-baterias_705dfac0-0d14-4d67-b1ed-a29148ac5ee6_1800x.jpg",
  },
  {
    name: "plata", 
    precio:1000,
    img: "https://oroinformacion.com/wp-content/uploads/2020/10/objetos-plata-700x375.jpg",
  },
  {
    name: "acero_industrial", 
    precio:4000,
    img: "https://www.conasi.eu/blog/wp-content/uploads/2020/06/acero-inoxidable-en-la-cocina-des-1.jpg",
  } 
];
function materiales_reciclables(nombre) {
    let precio = precios.find(elemento => elemento.name == nombre);
      Swal.fire({
        title: `<h1> Hola <h1> <h3> material: ${nombre} esta a $${precio.precio} el kilo <h3> <p>si tienes un kilo o mas de ${nombre} llamanos al 3224223713`,
        imageUrl: precio.img,
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
      })
  };
