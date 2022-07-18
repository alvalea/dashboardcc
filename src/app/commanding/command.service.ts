import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

import { Command } from './command';

import { environment } from '../../environments/environment';

@Injectable({
	providedIn: 'root'
})
export class CommandService {

	private token = environment.token;
	private commandURL = environment.commandURL;

	constructor(private http: HttpClient) { }

	loadCommand(command: Command) {
    let cmd: string = JSON.stringify(command);
		return this.http.post<string>(this.commandURL, cmd, {headers: new HttpHeaders(
			{
				'Authorization': this.token,
				'Content-Type': 'application/json'
			})});
	}
}
