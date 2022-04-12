import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import View from '@ioc:Adonis/Core/View'
import { validator } from '@ioc:Adonis/Core/Validator'
import User from 'App/Models/User'

export default class RegistersController {
  public async index() {
    //Validating inputs

    return View.render('auth/register')
  }

  public async store({ ctx: HttpContextContract, request }) {
    const user = new User()
    user.name = request.input('name')
    user.email = request.input('email')
    user.country = request.input('country')
    user.password = request.input('password')
    user.role_id = request.input('role_id')
    await user.save()
  }
}
