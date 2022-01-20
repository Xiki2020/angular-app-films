import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Omdb } from '../model/film.model';

const API_URL = "http://www.omdbapi.com/?";
const API_KEY = "e5d789fc";

@Injectable({
	providedIn: 'root'
})
export class OmdbService {

	constructor(private httpClient: HttpClient) { }

	getFilms(name: string, type: string, page: string): Observable<Omdb> {
		const queryParams = {
			apiKey: API_KEY,
			s: name,
			type: type,
			page: page,
		};
		return this.httpClient.get<Omdb>(API_URL + new URLSearchParams(queryParams));
	}
}
