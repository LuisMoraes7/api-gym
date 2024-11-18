/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
const GymBrosController = () => import('#controllers/gym_bros_controller')
router.group(() => {

  router.get('/', async () => {
    return {
      hello: 'world',
    }
  })

  // router.get('/users/:username', "GymBrosController.show")
  router.resource('/gym', GymBrosController).apiOnly()
})
