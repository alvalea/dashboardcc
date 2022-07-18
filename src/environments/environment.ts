// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoidXNlciJ9.NUoV6cCxBPLWho9ZeWhqz2b59vfHazxz0teIJQUDF9I',
  configGetURL: 'http://localhost:8080/proxy/config/get?key=',
  historyURL: 'http://localhost:8080/proxy/history/tm?pageSize=2&page=1',
  simcliURL: 'http://localhost:8080/proxy/simcli',
  commandDocURL: 'http://localhost:8080/proxy/command/docs',
  commandURL: 'http://localhost:8080/proxy/command/api/cmd'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
