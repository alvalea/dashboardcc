import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

	private token = environment.token;
	private historyURL = environment.historyURL;

	constructor(private http: HttpClient) { }

	history() {
		return this.http.get(this.historyURL, {headers: new HttpHeaders(
			{
				'Authorization': this.token,
				'Content-Type': 'application/json'
			})});
	}
}
