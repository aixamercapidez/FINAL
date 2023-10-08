// const {Router} =require('express')

// const router = Router()
// const{getCarts, CreateCart, getById,AddProduct,DeleteProduct,Deletecart,UpdateCart,UpdateQuantity,purchase}=require("../controllers/carts.controller.js")

// router.get('/', getCarts)

// router.post('/', CreateCart)

// router.get('/:cid', getById)

// router.get('/:cid/products/:pid', AddProduct)

// router.get('/delete/:cid/product/:pid',DeleteProduct )

// router.delete('/:cid',Deletecart )

// router.put('/:cid', UpdateCart)

// router.put('/:cid/product/:pid', UpdateQuantity )

// router.get('/:cid/purchase',purchase)

// module.exports = router

const CartsController = require("../controllers/carts.controller");
//const cartValidator = require("../middleware/userCartValidation");
const RouterClass = require("./RouterClass");

const cart = new CartsController()

class CartRouter extends RouterClass {
    init() {
        this.get('/', ['PUBLIC'], cart.getCarts)//Funciona
        this.post('/', ['PUBLIC'], cart.CreateCart)//generar un carrito nuevo
        this.get('/:cid', ['PUBLIC'], cart.getById)//Funciona
        this.get('/:cid/products/:pid', ['USER', 'PREMIUM'], cart.AddProduct)//Funciona
        this.get('/delete/:cid/product/:pid', ['PUBLIC'], cart.DeleteProduct)//Funciona
        this.delete('/:cid', ['PUBLIC'], cart.Deletecart)//Funciona
        this.put('/:cid', ['PUBLIC'], cart.UpdateCart)//Funciona
        this.put('/:cid/product/:pid', ['PUBLIC'], cart.UpdateQuantity)//Funciona
        this.get('/:cid/purchase', ['USER', "PREMIUM", "ADMIN"], cart.purchase)//Funciona
    }
}

module.exports = CartRouter