// const { Router } = require('express')


// const router = Router()
// const{getProducts,getById, AddProduct, UpdateProduct,DeleteProduct}=require("../controllers/products.controller.js")

// router.get('/', getProducts)

// router.get('/:pid',getById )

// router.post('/', AddProduct)

// router.put('/:pid', UpdateProduct)

// router.get('/delete/:pid',DeleteProduct )

// module.exports = router

const ProductsController = require("../controllers/products.controller");
//const uploader = require('../middleware/multer');
const RouterClass = require("./RouterClass");

const product = new ProductsController()

//ROUTER CLASS SE ENCARGA UNICAMENTE DE VALIDAR LAS RUTAS y los middleware, para validar las peticiones y respuestas es el controller.
class ProductRouter extends RouterClass {
    init() {
        this.get('/', ['PUBLIC'],product.getProducts)//Funciona
        this.get('/:pid', ['PUBLIC'], product.getById)//Funciona
        this.post('/', ['ADMIN', 'PREMIUM'], product.AddProduct)//Funciona ADMIN
        this.put('/:pid', ['ADMIN', 'PREMIUM'], product.UpdateProduct)//Funciona ADMIN
        this.get('/delete/:pid', ['ADMIN', 'PREMIUM'], product.DeleteProduct)//Funciona ADMIN
    }
}

module.exports = ProductRouter