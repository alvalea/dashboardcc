import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Configuration } from './configuration';

@Injectable({
	providedIn: 'root'
})
export class ConfigService {

	private token = environment.token;
	private configURL = environment.configURL;

	constructor(private http: HttpClient) { }

	config() {
		return this.http.get<Configuration>(this.configURL, {headers: new HttpHeaders(
			{
				'Authorization': this.token,
				'Content-Type': 'application/json'
			})});
	}
}
