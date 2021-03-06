import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Configuration } from './configuration';

@Injectable({
	providedIn: 'root'
})
export class ConfigService {

	private token = environment.token;
	private configGetURL = environment.configGetURL;

	constructor(private http: HttpClient) { }

	getConfig(key: string) {
		return this.http.get<Configuration>(this.configGetURL+key, {headers: new HttpHeaders(
			{
				'Authorization': this.token,
				'Content-Type': 'application/json'
			})});
	}
}
