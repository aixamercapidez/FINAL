// const { Router } = require('express')
// const { auth } = require('../middlewares/autenticacion.middleware')

 const passport = require('passport')


// const router = Router()
// const{login, failurelogin,register,failure,logout,current,counter,privada, restore, newPass}= require("../controllers/session.controller")


// router.post('/login', passport.authenticate('login', {failureRedirect:'/failurelogin'}), login )   

// router.get('/failurelogin', failurelogin)

// router.post('/register', passport.authenticate('register', {
//     failureRedirect: '/failure',
//     successRedirect: '/login'
// }), register)

// router.get('/failure', failure)
// router.get('/logout', logout)
// router.get('/current', current)

// router.get('/github', passport.authenticate('github', {scope: ['user:email']}), ()=>{})
// router.get('/githubcallback', passport.authenticate('github', {failureRedirect: '/views/login'}), async (req, res)=>{
//     req.session.user = req.user
//      res.redirect('/api/products')
//  })



// // sesiones 
// router.get('/counter',counter )

// router.get('/privada', auth, privada)
// router.post('/restore', restore)
// router.put('/restore/:UID', newPass)



    

// module.exports = router

const SessionController = require("../controllers/session.controller");

const RouterClass = require("./RouterClass");

const session = new SessionController()

class SessionRouter extends RouterClass {
    init() {
        this.post('/login', ['PUBLIC'], passport.authenticate('login', {failureRedirect:'/failurelogin'}),  session.login)
        this.get('/logout', ['USER', 'ADMIN', 'PREMIUM'], session.logout)
        this.get('/failurelogin', ['PUBLIC'], session.failurelogin)
        this.post('/register',['PUBLIC'] ,passport.authenticate('register', {
              failureRedirect: '/failure',
                 successRedirect: '/login'
             }), session.register)

        this.get('/github', ['PUBLIC'], passport.authenticate('github', {scope: ['user:email']}), ()=>{})
        this.get('/githubcallback', ['PUBLIC'],  passport.authenticate('github', {failureRedirect: '/views/login'}), async (req, res)=>{
                 req.session.user = req.user
                  res.redirect('/api/products')
              })
        this.get('/current', ['USER', 'ADMIN', 'PREMIUM'], session.current)
        this.post('/restore',['USER', 'ADMIN', 'PREMIUM'], session.restore)
        this.put('/restore/:UID',['USER', 'ADMIN', 'PREMIUM'], session.newPass)
    }
}

module.exports = SessionRouter