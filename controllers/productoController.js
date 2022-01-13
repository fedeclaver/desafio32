

const productosDao = require("../daos/productos/index.js");
const {loggerWarn,loggerTrace,loggerDefault,loggerError} = require("../logger/log4js");



exports.crearProducto = async (req, res) => {
    loggerTrace.trace("Ingreso a crearProducto");
    try {

        if (req.nombre || req.descripcion || req.código || req.foto || req.stock
        ) {
            const cantidad = await productosDao.find({}).count()
            if (cantidad == 0) {
                req.id = 1;
            } else {
                let max = await productosDao.find().sort({ id: -1 }).limit(1) //max id

                max = JSON.parse(max[0].id);
                req.id = max + 1;
            }
            const newItem = {
                id: req.id,
                timestamp: Date.now(),
                nombre: req.nombre,
                descripcion: req.descripcion,
                codigo: req.codigo,
                foto: req.foto,
                precio: req.precio,
                stock: req.stock
            };

            // Creamos nuestro producto
            producto = productosDao.save(newItem);

            if (producto) {
                res
                    .status(200)
                    .redirect("/producto.html")
                    .json({ msg: `Producto insertado correctamente id:${producto.id}` });
            } else {
                res.status(500).json({ msg: "Error al crearProducto" });
            }

        } else {
         
            loggerWarn.warn(
                `El usuario no ingresó un campo de Producto requerido .`
              );
                throw new Error(`Error al insertar Productos campos requeridos`);
         
        }

    } catch (error) {     
        loggerError.error(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerProductos = async (req, res) => {
    loggerTrace.trace("Ingreso a obtenerProductos");
    try {

        const productos = await productosDao.getAll();
        res.json(productos)

    } catch (error) {
        loggerError.error(error);
        res.status(500).send('Hubo un error');
    }

}

exports.actualizarProductos = async (req, res) => {
    loggerTrace.trace("Ingreso a actualizarProductos");
    try {
        const { nombre, descripcion, codigo, foto, precio, stock } = req.body;
        let producto = await productosDao.getById(req.params.id);

        if (!producto) {
            res.status(404).json({ msg: 'No existe el producto' })
        }
        producto.timestamp = Date.now();
        producto.nombre = nombre;
        producto.descripcion = descripcion;
        producto.codigo = codigo;
        producto.foto = foto;
        producto.precio = precio;
        producto.stock = stock;
        producto = await productosDao.update(producto)
        res.json(producto);

    } catch (error) {
        loggerError.error(error);
        res.status(500).send('Hubo un error');
    }
}


exports.obtenerProducto = async (req, res) => {
    loggerTrace.trace("Ingreso a obtenerProducto");
    try {
        let producto = await productosDao.getById(req.params.id);

        if (!producto) {
            res.status(404).json({ msg: 'No existe el producto' })
        }

        res.json(producto);

    } catch (error) {
        loggerError.error(error);
        res.status(500).send('Hubo un error');
    }
}

exports.eliminarProducto = async (req, res) => {
    loggerTrace.trace("Ingreso a eliminarProducto");
    try {
        let producto = await productosDao.getById(req.params.id);

        if (!producto) {
            res.status(404).json({ msg: 'No existe el producto' })
        }

        await productosDao.deleteById({ _id: req.params.id })
        res.json({ msg: 'Producto eliminado con exito' });

    } catch (error) {
        loggerError.error(error);
        res.status(500).send('Hubo un error');
    }
}