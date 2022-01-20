import { Component, Input, OnInit } from '@angular/core';
import { Film } from '../../model/film.model';

@Component({
	selector: 'app-film-item',
	templateUrl: './film-item.component.html',
	styleUrls: ['./film-item.component.scss']
})
export class FilmItemComponent implements OnInit {

	@Input() film!: Film;

	constructor() { }

	ngOnInit(): void {
	}

}
