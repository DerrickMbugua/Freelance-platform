// |--------------------------------------------------------------------------
// | Routes
// |--------------------------------------------------------------------------
// |
// | This file is dedicated for defining HTTP routes. A single file is enough
// | for majority of projects, however you can define routes in different
// | files and just make sure to import them inside this file. For example
// |
// | Define routes in following two files
// | ├── start/routes/cart.ts
// | ├── start/routes/customer.ts
// |
// | and then import them inside `start/routes.ts` as follows
// |
// | import './routes/cart'
// | import './routes/customer''
// |

import Route from '@ioc:Adonis/Core/Route'
import Country from 'App/Models/Country'
// import RegistersController from 'App/Controllers/Http/RegistersController'

Route.get('/', async ({ view }) => {
  return view.render('home')
})
//landing page
Route.on('home').render('home')
Route.on('/index').render('home')

// register view
Route.get('register', 'RegistersController.index')

Route.post('register', 'RegistersController.store')
