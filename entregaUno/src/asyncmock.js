const misProductos = [
  {
    id: "doh001",
    nombre: "212 MEN - C.HERRERA",
    precio: 6800,
    img: "./img/doh/212MEN-C-HERRERA.png",
    idCategoria: "masc"
  },
  {
    id: "doh002",
    nombre: "212 MEN HEROES - C.HERRERA",
    precio: 6800,
    img: "./img/doh/212MENHEROES-C-HERRERA.png",
    idCategoria: "masc"
  },
  {
    id: "doh003",
    nombre: "212 SEXY MEN - C.HERRERA",
    precio: 6800,
    img: "./img/doh/212SEXYMEN-C-HERRERA.png",
    idCategoria: "masc"
  },
  {
    id: "dof001",
    nombre: "LA VIE EST BELLE EN ROSE - LANCOME",
    precio: 6800,
    img: "./img/dom/LAVIEESTBELLEENROSELANCOME.png",
    idCategoria: "fem"
  },
  {
    id: "dof002",
    nombre: "LA VIE EST BELLE L'ECLAT - LANCOME",
    precio: 6800,
    img: "./img/dom/LA_VIE_EST_BELLE_L_ECLAT-LANCOME.png",
    idCategoria: "fem"
  },
  {
    id: "dof003",
    nombre: "LA VIE EST BELLE LEGERE - LANCOME",
    precio: 6800,
    img: "./img/dom/LA_VIE_EST_BELLE_LEGERE-LANCOME.png",
    idCategoria: "fem"
  },

];

export const getProductos = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(misProductos);
    }, 100);
  });
};

export const getUnProducto = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const producto = misProductos.find((prod) => prod.id === id);
      resolve(producto);
    }, 100);
  });
};

//RETORNAR ARRAY CARTEGORÍA

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise (resolve => {
        setTimeout( () => {
            const productosCategoria = misProductos.filter(prod => prod.idCategoria === idCategoria);
            resolve(productosCategoria);
        }, 100)

    })

    }

