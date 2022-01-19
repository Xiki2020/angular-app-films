import { Component, OnInit } from '@angular/core';
import { OmdbService } from '../../service/omdb.service'
import { Film } from '../../model/film.model';

@Component({
	selector: 'app-form-search',
	templateUrl: './form-search.component.html',
	styleUrls: ['./form-search.component.scss']
})
export class FormSearchComponent implements OnInit {

	films: Film[] = [];
	value: string = "";

	constructor(private omdbService: OmdbService) { }

	ngOnInit(): void {
	}

	getFilms(name: string, type: string, page: string): void {
		this.omdbService.getFilms(name, type, page).subscribe((films: Film[]) => {
			this.films = films;
			console.log(this.films);
			console.log(this.value);
		})
	}



}
