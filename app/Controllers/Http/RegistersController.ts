import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import View from '@ioc:Adonis/Core/View'
import { schema, rules } from '@ioc:Adonis/Core/Validator'
import User from 'App/Models/User'
import Database from '@ioc:Adonis/Lucid/Database'
import Logger from '@ioc:Adonis/Core/Logger'

export default class RegistersController {
  public async index({ view }: HttpContextContract) {
    const countries = await Database.from('countries').orderBy('name', 'asc')
    return View.render('auth/register', {
      countries: countries,
    })
  }

  public async store({ ctx: HttpContextContract, request, response }) {
    const newUserSchema = schema.create({
      name: schema.string(),
      email: schema.string([rules.email()]),
      password: schema.string([rules.minLength(8)]),
      role_id: schema.number(),
      country: schema.string(),
    })

    try {
      /**
       * Step 2 - Validate request body against
       *          the schema
       */
      const payload = await request.validate({
        schema: newUserSchema,
      })

      const user = await await Database.table('users').insert(payload)

      return View.render('home', {
        user: user,
      })
    } catch (error) {
      /**
       * Step 3 - Handle errors
       */
      response.badRequest(error.messages)
    }
  }
}
