import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'

export default class LoginController {
  public async index({ request, view, response }) {
    try {
      const user = await Database.from('users')
        .where('email', request.input('email'))
        .where('password', request.input('password'))

      if (user.length === 0) {
        return view.render('errors/unauthorized')
      } else {
        return view.render('client/dashboard')
      }
    } catch (error) {
      response.badRequest(error.messages)
    }
  }
}
