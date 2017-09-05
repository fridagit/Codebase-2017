import { Component, OnInit } from '@angular/core';

export class Hero {
    id: number;
    name: string;
}

@Component({
    selector: 'app-component',
    template:
    `
    <h1>{{title}}</h1>
    <h2>{{hero.name}} details!</h2>
    <div><label>id: </label>{{hero.id}}</div>
    <div>
        <label>name: </label>
        <input [(ngModel)]="hero.name" placeholder="name" />
    </div>
    `,
    styles: [],
    providers: []
})
export class AppComponent implements OnInit {
    title = 'Tour of Heroes';
    hero: Hero = {
        id: 1,
        name: 'Windstorm'
    };

    constructor() { }

    ngOnInit() {

    }
}

