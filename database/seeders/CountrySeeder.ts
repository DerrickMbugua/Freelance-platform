import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Country from 'App/Models/Country'

export default class CountrySeederSeeder extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method
    await Country.createMany([
      {
        name: 'Afghanistan',
        abbr: 'AF',
      },
      {
        name: 'Åland Islands',
        abbr: 'AX',
      },
      {
        name: 'Albania',
        abbr: 'AL',
      },
      {
        name: 'Algeria',
        abbr: 'DZ',
      },
      {
        name: 'American Samoa',
        abbr: 'AS',
      },
      {
        name: 'Andorra',
        abbr: 'AD',
      },
      {
        name: 'Angola',
        abbr: 'AO',
      },
      {
        name: 'Anguilla',
        abbr: 'AI',
      },
      {
        name: 'Antarctica',
        abbr: 'AQ',
      },
      {
        name: 'Antigua and Barbuda',
        abbr: 'AG',
      },
      {
        name: 'Argentina',
        abbr: 'AR',
      },
      {
        name: 'Armenia',
        abbr: 'AM',
      },
      {
        name: 'Aruba',
        abbr: 'AW',
      },
      {
        name: 'Australia',
        abbr: 'AU',
      },
      {
        name: 'Austria',
        abbr: 'AT',
      },
      {
        name: 'Azerbaijan',
        abbr: 'AZ',
      },
      {
        name: 'Bahamas',
        abbr: 'BS',
      },
      {
        name: 'Bahrain',
        abbr: 'BH',
      },
      {
        name: 'Bangladesh',
        abbr: 'BD',
      },
      {
        name: 'Barbados',
        abbr: 'BB',
      },
      {
        name: 'Belarus',
        abbr: 'BY',
      },
      {
        name: 'Belgium',
        abbr: 'BE',
      },
      {
        name: 'Belize',
        abbr: 'BZ',
      },
      {
        name: 'Benin',
        abbr: 'BJ',
      },
      {
        name: 'Bermuda',
        abbr: 'BM',
      },
      {
        name: 'Bhutan',
        abbr: 'BT',
      },
      {
        name: 'Bolivia, Plurinational State of',
        abbr: 'BO',
      },
      {
        name: 'Bonaire, Sint Eustatius and Saba',
        abbr: 'BQ',
      },
      {
        name: 'Bosnia and Herzegovina',
        abbr: 'BA',
      },
      {
        name: 'Botswana',
        abbr: 'BW',
      },
      {
        name: 'Bouvet Island',
        abbr: 'BV',
      },
      {
        name: 'Brazil',
        abbr: 'BR',
      },
      {
        name: 'British Indian Ocean Territory',
        abbr: 'IO',
      },
      {
        name: 'Brunei Darussalam',
        abbr: 'BN',
      },
      {
        name: 'Bulgaria',
        abbr: 'BG',
      },
      {
        name: 'Burkina Faso',
        abbr: 'BF',
      },
      {
        name: 'Burundi',
        abbr: 'BI',
      },
      {
        name: 'Cambodia',
        abbr: 'KH',
      },
      {
        name: 'Cameroon',
        abbr: 'CM',
      },
      {
        name: 'Canada',
        abbr: 'CA',
      },
      {
        name: 'Cape Verde',
        abbr: 'CV',
      },
      {
        name: 'Cayman Islands',
        abbr: 'KY',
      },
      {
        name: 'Central African Republic',
        abbr: 'CF',
      },
      {
        name: 'Chad',
        abbr: 'TD',
      },
      {
        name: 'Chile',
        abbr: 'CL',
      },
      {
        name: 'China',
        abbr: 'CN',
      },
      {
        name: 'Christmas Island',
        abbr: 'CX',
      },
      {
        name: 'Cocos (Keeling) Islands',
        abbr: 'CC',
      },
      {
        name: 'Colombia',
        abbr: 'CO',
      },
      {
        name: 'Comoros',
        abbr: 'KM',
      },
      {
        name: 'Congo',
        abbr: 'CG',
      },
      {
        name: 'Congo, the Democratic Republic of the',
        abbr: 'CD',
      },
      {
        name: 'Cook Islands',
        abbr: 'CK',
      },
      {
        name: 'Costa Rica',
        abbr: 'CR',
      },
      {
        name: "Côte d'Ivoire",
        abbr: 'CI',
      },
      {
        name: 'Croatia',
        abbr: 'HR',
      },
      {
        name: 'Cuba',
        abbr: 'CU',
      },
      {
        name: 'Curaçao',
        abbr: 'CW',
      },
      {
        name: 'Cyprus',
        abbr: 'CY',
      },
      {
        name: 'Czech Republic',
        abbr: 'CZ',
      },
      {
        name: 'Denmark',
        abbr: 'DK',
      },
      {
        name: 'Djibouti',
        abbr: 'DJ',
      },
      {
        name: 'Dominica',
        abbr: 'DM',
      },
      {
        name: 'Dominican Republic',
        abbr: 'DO',
      },
      {
        name: 'Ecuador',
        abbr: 'EC',
      },
      {
        name: 'Egypt',
        abbr: 'EG',
      },
      {
        name: 'El Salvador',
        abbr: 'SV',
      },
      {
        name: 'Equatorial Guinea',
        abbr: 'GQ',
      },
      {
        name: 'Eritrea',
        abbr: 'ER',
      },
      {
        name: 'Estonia',
        abbr: 'EE',
      },
      {
        name: 'Ethiopia',
        abbr: 'ET',
      },
      {
        name: 'Falkland Islands (Malvinas)',
        abbr: 'FK',
      },
      {
        name: 'Faroe Islands',
        abbr: 'FO',
      },
      {
        name: 'Fiji',
        abbr: 'FJ',
      },
      {
        name: 'Finland',
        abbr: 'FI',
      },
      {
        name: 'France',
        abbr: 'FR',
      },
      {
        name: 'French Guiana',
        abbr: 'GF',
      },
      {
        name: 'French Polynesia',
        abbr: 'PF',
      },
      {
        name: 'French Southern Territories',
        abbr: 'TF',
      },
      {
        name: 'Gabon',
        abbr: 'GA',
      },
      {
        name: 'Gambia',
        abbr: 'GM',
      },
      {
        name: 'Georgia',
        abbr: 'GE',
      },
      {
        name: 'Germany',
        abbr: 'DE',
      },
      {
        name: 'Ghana',
        abbr: 'GH',
      },
      {
        name: 'Gibraltar',
        abbr: 'GI',
      },
      {
        name: 'Greece',
        abbr: 'GR',
      },
      {
        name: 'Greenland',
        abbr: 'GL',
      },
      {
        name: 'Grenada',
        abbr: 'GD',
      },
      {
        name: 'Guadeloupe',
        abbr: 'GP',
      },
      {
        name: 'Guam',
        abbr: 'GU',
      },
      {
        name: 'Guatemala',
        abbr: 'GT',
      },
      {
        name: 'Guernsey',
        abbr: 'GG',
      },
      {
        name: 'Guinea',
        abbr: 'GN',
      },
      {
        name: 'Guinea-Bissau',
        abbr: 'GW',
      },
      {
        name: 'Guyana',
        abbr: 'GY',
      },
      {
        name: 'Haiti',
        abbr: 'HT',
      },
      {
        name: 'Heard Island and McDonald Mcdonald Islands',
        abbr: 'HM',
      },
      {
        name: 'Holy See (Vatican City State)',
        abbr: 'VA',
      },
      {
        name: 'Honduras',
        abbr: 'HN',
      },
      {
        name: 'Hong Kong',
        abbr: 'HK',
      },
      {
        name: 'Hungary',
        abbr: 'HU',
      },
      {
        name: 'Iceland',
        abbr: 'IS',
      },
      {
        name: 'India',
        abbr: 'IN',
      },
      {
        name: 'Indonesia',
        abbr: 'ID',
      },
      {
        name: 'Iran, Islamic Republic of',
        abbr: 'IR',
      },
      {
        name: 'Iraq',
        abbr: 'IQ',
      },
      {
        name: 'Ireland',
        abbr: 'IE',
      },
      {
        name: 'Isle of Man',
        abbr: 'IM',
      },
      {
        name: 'Israel',
        abbr: 'IL',
      },
      {
        name: 'Italy',
        abbr: 'IT',
      },
      {
        name: 'Jamaica',
        abbr: 'JM',
      },
      {
        name: 'Japan',
        abbr: 'JP',
      },
      {
        name: 'Jersey',
        abbr: 'JE',
      },
      {
        name: 'Jordan',
        abbr: 'JO',
      },
      {
        name: 'Kazakhstan',
        abbr: 'KZ',
      },
      {
        name: 'Kenya',
        abbr: 'KE',
      },
      {
        name: 'Kiribati',
        abbr: 'KI',
      },
      {
        name: "Korea, Democratic People's Republic of",
        abbr: 'KP',
      },
      {
        name: 'Korea, Republic of',
        abbr: 'KR',
      },
      {
        name: 'Kuwait',
        abbr: 'KW',
      },
      {
        name: 'Kyrgyzstan',
        abbr: 'KG',
      },
      {
        name: "Lao People's Democratic Republic",
        abbr: 'LA',
      },
      {
        name: 'Latvia',
        abbr: 'LV',
      },
      {
        name: 'Lebanon',
        abbr: 'LB',
      },
      {
        name: 'Lesotho',
        abbr: 'LS',
      },
      {
        name: 'Liberia',
        abbr: 'LR',
      },
      {
        name: 'Libya',
        abbr: 'LY',
      },
      {
        name: 'Liechtenstein',
        abbr: 'LI',
      },
      {
        name: 'Lithuania',
        abbr: 'LT',
      },
      {
        name: 'Luxembourg',
        abbr: 'LU',
      },
      {
        name: 'Macao',
        abbr: 'MO',
      },
      {
        name: 'Macedonia, the Former Yugoslav Republic of',
        abbr: 'MK',
      },
      {
        name: 'Madagascar',
        abbr: 'MG',
      },
      {
        name: 'Malawi',
        abbr: 'MW',
      },
      {
        name: 'Malaysia',
        abbr: 'MY',
      },
      {
        name: 'Maldives',
        abbr: 'MV',
      },
      {
        name: 'Mali',
        abbr: 'ML',
      },
      {
        name: 'Malta',
        abbr: 'MT',
      },
      {
        name: 'Marshall Islands',
        abbr: 'MH',
      },
      {
        name: 'Martinique',
        abbr: 'MQ',
      },
      {
        name: 'Mauritania',
        abbr: 'MR',
      },
      {
        name: 'Mauritius',
        abbr: 'MU',
      },
      {
        name: 'Mayotte',
        abbr: 'YT',
      },
      {
        name: 'Mexico',
        abbr: 'MX',
      },
      {
        name: 'Micronesia, Federated States of',
        abbr: 'FM',
      },
      {
        name: 'Moldova, Republic of',
        abbr: 'MD',
      },
      {
        name: 'Monaco',
        abbr: 'MC',
      },
      {
        name: 'Mongolia',
        abbr: 'MN',
      },
      {
        name: 'Montenegro',
        abbr: 'ME',
      },
      {
        name: 'Montserrat',
        abbr: 'MS',
      },
      {
        name: 'Morocco',
        abbr: 'MA',
      },
      {
        name: 'Mozambique',
        abbr: 'MZ',
      },
      {
        name: 'Myanmar',
        abbr: 'MM',
      },
      {
        name: 'Namibia',
        abbr: 'NA',
      },
      {
        name: 'Nauru',
        abbr: 'NR',
      },
      {
        name: 'Nepal',
        abbr: 'NP',
      },
      {
        name: 'Netherlands',
        abbr: 'NL',
      },
      {
        name: 'New Caledonia',
        abbr: 'NC',
      },
      {
        name: 'New Zealand',
        abbr: 'NZ',
      },
      {
        name: 'Nicaragua',
        abbr: 'NI',
      },
      {
        name: 'Niger',
        abbr: 'NE',
      },
      {
        name: 'Nigeria',
        abbr: 'NG',
      },
      {
        name: 'Niue',
        abbr: 'NU',
      },
      {
        name: 'Norfolk Island',
        abbr: 'NF',
      },
      {
        name: 'Northern Mariana Islands',
        abbr: 'MP',
      },
      {
        name: 'Norway',
        abbr: 'NO',
      },
      {
        name: 'Oman',
        abbr: 'OM',
      },
      {
        name: 'Pakistan',
        abbr: 'PK',
      },
      {
        name: 'Palau',
        abbr: 'PW',
      },
      {
        name: 'Palestine, State of',
        abbr: 'PS',
      },
      {
        name: 'Panama',
        abbr: 'PA',
      },
      {
        name: 'Papua New Guinea',
        abbr: 'PG',
      },
      {
        name: 'Paraguay',
        abbr: 'PY',
      },
      {
        name: 'Peru',
        abbr: 'PE',
      },
      {
        name: 'Philippines',
        abbr: 'PH',
      },
      {
        name: 'Pitcairn',
        abbr: 'PN',
      },
      {
        name: 'Poland',
        abbr: 'PL',
      },
      {
        name: 'Portugal',
        abbr: 'PT',
      },
      {
        name: 'Puerto Rico',
        abbr: 'PR',
      },
      {
        name: 'Qatar',
        abbr: 'QA',
      },
      {
        name: 'Réunion',
        abbr: 'RE',
      },
      {
        name: 'Romania',
        abbr: 'RO',
      },
      {
        name: 'Russian Federation',
        abbr: 'RU',
      },
      {
        name: 'Rwanda',
        abbr: 'RW',
      },
      {
        name: 'Saint Barthélemy',
        abbr: 'BL',
      },
      {
        name: 'Saint Helena, Ascension and Tristan da Cunha',
        abbr: 'SH',
      },
      {
        name: 'Saint Kitts and Nevis',
        abbr: 'KN',
      },
      {
        name: 'Saint Lucia',
        abbr: 'LC',
      },
      {
        name: 'Saint Martin (French part)',
        abbr: 'MF',
      },
      {
        name: 'Saint Pierre and Miquelon',
        abbr: 'PM',
      },
      {
        name: 'Saint Vincent and the Grenadines',
        abbr: 'VC',
      },
      {
        name: 'Samoa',
        abbr: 'WS',
      },
      {
        name: 'San Marino',
        abbr: 'SM',
      },
      {
        name: 'Sao Tome and Principe',
        abbr: 'ST',
      },
      {
        name: 'Saudi Arabia',
        abbr: 'SA',
      },
      {
        name: 'Senegal',
        abbr: 'SN',
      },
      {
        name: 'Serbia',
        abbr: 'RS',
      },
      {
        name: 'Seychelles',
        abbr: 'SC',
      },
      {
        name: 'Sierra Leone',
        abbr: 'SL',
      },
      {
        name: 'Singapore',
        abbr: 'SG',
      },
      {
        name: 'Sint Maarten (Dutch part)',
        abbr: 'SX',
      },
      {
        name: 'Slovakia',
        abbr: 'SK',
      },
      {
        name: 'Slovenia',
        abbr: 'SI',
      },
      {
        name: 'Solomon Islands',
        abbr: 'SB',
      },
      {
        name: 'Somalia',
        abbr: 'SO',
      },
      {
        name: 'South Africa',
        abbr: 'ZA',
      },
      {
        name: 'South Georgia and the South Sandwich Islands',
        abbr: 'GS',
      },
      {
        name: 'South Sudan',
        abbr: 'SS',
      },
      {
        name: 'Spain',
        abbr: 'ES',
      },
      {
        name: 'Sri Lanka',
        abbr: 'LK',
      },
      {
        name: 'Sudan',
        abbr: 'SD',
      },
      {
        name: 'Suriname',
        abbr: 'SR',
      },
      {
        name: 'Svalbard and Jan Mayen',
        abbr: 'SJ',
      },
      {
        name: 'Swaziland',
        abbr: 'SZ',
      },
      {
        name: 'Sweden',
        abbr: 'SE',
      },
      {
        name: 'Switzerland',
        abbr: 'CH',
      },
      {
        name: 'Syrian Arab Republic',
        abbr: 'SY',
      },
      {
        name: 'Taiwan',
        abbr: 'TW',
      },
      {
        name: 'Tajikistan',
        abbr: 'TJ',
      },
      {
        name: 'Tanzania, United Republic of',
        abbr: 'TZ',
      },
      {
        name: 'Thailand',
        abbr: 'TH',
      },
      {
        name: 'Timor-Leste',
        abbr: 'TL',
      },
      {
        name: 'Togo',
        abbr: 'TG',
      },
      {
        name: 'Tokelau',
        abbr: 'TK',
      },
      {
        name: 'Tonga',
        abbr: 'TO',
      },
      {
        name: 'Trinidad and Tobago',
        abbr: 'TT',
      },
      {
        name: 'Tunisia',
        abbr: 'TN',
      },
      {
        name: 'Turkey',
        abbr: 'TR',
      },
      {
        name: 'Turkmenistan',
        abbr: 'TM',
      },
      {
        name: 'Turks and Caicos Islands',
        abbr: 'TC',
      },
      {
        name: 'Tuvalu',
        abbr: 'TV',
      },
      {
        name: 'Uganda',
        abbr: 'UG',
      },
      {
        name: 'Ukraine',
        abbr: 'UA',
      },
      {
        name: 'United Arab Emirates',
        abbr: 'AE',
      },
      {
        name: 'United Kingdom',
        abbr: 'GB',
      },
      {
        name: 'United States',
        abbr: 'US',
      },
      {
        name: 'United States Minor Outlying Islands',
        abbr: 'UM',
      },
      {
        name: 'Uruguay',
        abbr: 'UY',
      },
      {
        name: 'Uzbekistan',
        abbr: 'UZ',
      },
      {
        name: 'Vanuatu',
        abbr: 'VU',
      },
      {
        name: 'Venezuela, Bolivarian Republic of',
        abbr: 'VE',
      },
      {
        name: 'Viet Nam',
        abbr: 'VN',
      },
      {
        name: 'Virgin Islands, British',
        abbr: 'VG',
      },
      {
        name: 'Virgin Islands, U.S.',
        abbr: 'VI',
      },
      {
        name: 'Wallis and Futuna',
        abbr: 'WF',
      },
      {
        name: 'Western Sahara',
        abbr: 'EH',
      },
      {
        name: 'Yemen',
        abbr: 'YE',
      },
      {
        name: 'Zambia',
        abbr: 'ZM',
      },
      {
        name: 'Zimbabwe',
        abbr: 'ZW',
      },
    ])
  }
}
