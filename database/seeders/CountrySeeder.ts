import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Country from 'App/Models/Country'

export default class CountrySeederSeeder extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method
    await Country.createMany([
      {
        name: 'kenya',
        abbr: 'ke',
      },
      {
        name: 'Tanzania',
        abbr: 'tz',
      },
    ])
  }
}
