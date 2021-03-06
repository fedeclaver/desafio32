const carritosDao = require("../daos/carritos/index.js");

const productosDao = require("../daos/productos/index.js");

const parse_obj = obj => JSON.parse(JSON.stringify(obj))
var http = require("http");

exports.crearCarrito = async (req, res) => {
  try {
       objeto = Object.assign({ timestamp: Date.now() ,  productos: [''] });
       
    const idCarrito = await carritosDao.guardar(objeto);
    if (idCarrito) {
      res
        .status(200)
        .redirect("/index.html")
        .json({ msg: `Carrito insertado correctamente id:${idCarrito}` });
    } else {
      res.status(500).json({ msg: "Error al crearCarrito" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Error al crearCarrito" });
  }
};

exports.agregarProducto = async (req, res) => {
  try {
    let carrito = await carritosDao.getById(req.params.idCarrito);
    if (!carrito) {
      res.status(404).json({ msg: "Carrito no encontrado" });
    }
    let producto = await productosDao.getById(req.params.id_prod);
    if (!producto) {
      res.status(404).json({ msg: "Producto no encontrado" });
    }
    carrito.productos.push(producto)
    let carritoact = await carritosDao.update(carrito);
    if (carritoact) {
      res
        .status(200)
        .redirect("/index.html")
        .json({ msg: `El Producto se agregó correctamente` });
        
    } else {
      res.status(500).json({ msg: "Error al agregando el Producto" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Error  al agregar Productos");
  }
};

exports.obtenerCarritos = async (req, res) => {
  try {
    let carritos = await carritosDao.getAll();    
    res.json(carritos)
  } catch (error) {
    console.log(error);
    res.status(500).json("Error obtenerCarritos");
  }
};

exports.obtenerCarrito = async (req, res) => {
  try {
    let carrito = await carritosDao.getById(req.params.id);
    if (!carrito) {
      res.status(404).json({ msg: "Carrito no encontrado" });
    }
    res.json(carrito);
  } catch (error) {
    console.log(error);
    res.status(500).send("Error obtenerCarrito");
  }
};

exports.eliminarCarrito = async (req, res) => {
  try {
    let carrito = await Producto.deleteById(req.params.id);
    if (!carrito) {
      res.status(404).json({ msg: "Carrito no encontrado" });
    } else {
      res.json({ msg: "Carrito eliminado correctamente" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Error obtenerProductos");
  }
};

exports.eliminarProducto = async (req, res) => {
  try {
    let carrito = await carritosDao.getById(req.params.idCarrito);
    if (!carrito) {
      res.status(404).json({ msg: "Carrito no encontrado" });
    }
    let producto = await productosDao.getById(req.params.id_prod);
    if (!producto) {
      res.status(404).json({ msg: "Producto no encontrado" });
    }


    let resultado = carrito.productos.filter((e) => e.id !== parseInt(req.params.id_prod));
    carrito.productos = parse_obj(resultado[0]);
    let carritoact = await carritosDao.update(carrito);     
    if (carritoact) {
      res.status(200).json({ msg: `El Producto se elimino correctamente` });
    } else {
      res.status(500).json({ msg: "Error al eliminando el Producto" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Error  al agregar Productos");
  }
};
