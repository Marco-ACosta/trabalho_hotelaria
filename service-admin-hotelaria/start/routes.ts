/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import { middleware } from './kernel.js'
const QuartosController = () => import('#controllers/quartos_controller')
const PrediosController = () => import('#controllers/predios_controller')
const UsersController = () => import('#controllers/users_controller')
const AuthController = () => import('#controllers/auth_controller')

router
  .get('/', async () => {
    return {
      hello: 'world',
    }
  })
  .use(middleware.auth({ guards: ['api'] }))

router.post('/login', [AuthController, 'login'])
router.post('/register', [UsersController, 'store'])
router.get('/users', [UsersController, 'index'])
router.get('/buildings', [PrediosController, 'index'])
router.post('/buildings', [PrediosController, 'store'])
router.post('/rooms', [QuartosController, 'store'])
router.get('/rooms', [QuartosController, 'index'])
router.get('/rooms/:id', [QuartosController, 'show'])
