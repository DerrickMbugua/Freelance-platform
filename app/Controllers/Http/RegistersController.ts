import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import View from '@ioc:Adonis/Core/View'

export default class RegistersController {
  public async index(ctx: HttpContextContract) {
    return View.render('auth/register')
  }
}
