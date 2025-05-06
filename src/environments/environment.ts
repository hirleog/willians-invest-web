// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  // apiUrl: 'http://localhost:3000', // URL da API do backend
  apiUrl: 'http://89.116.73.70:3000', // URL da API do backend
  urlToken: 'admin',
  adminKey: '28d4639e283f488d36b2ae20ca3e28ce62ba9a47374c76a3180317b7d865e55a', // chave secreta para o dashboard
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
