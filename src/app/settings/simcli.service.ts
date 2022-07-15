import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Simcli } from './simcli';

@Injectable({
  providedIn: 'root'
})
export class SimcliService {

	private token = environment.token;
	private simcliURL = environment.simcliURL;

	constructor(private http: HttpClient) { }

	startTM() {
		return this.http.get<Simcli>(this.simcliURL+'/startTM', {headers: new HttpHeaders(
			{
				'Authorization': this.token,
				'Content-Type': 'application/json'
			})});
	}

	stopTM() {
		return this.http.get<Simcli>(this.simcliURL+'/stopTM', {headers: new HttpHeaders(
			{
				'Authorization': this.token,
				'Content-Type': 'application/json'
			})});
	}
}
