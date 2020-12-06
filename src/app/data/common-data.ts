import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ConfigData {
    public todoItems = [{ 'title': 'Example','message': `Keep close to Nature's heart... and break clear away, once in awhile,
    and climb a mountain or spend a week in the woods. Wash your spirit clean.`, 'done': true },
    { 'title': 'Example','message': `Keep close to Nature's heart... and break clear away, once in awhile,
    and climb a mountain or spend a week in the woods. Wash your spirit clean.`, 'done': false },
    { 'title': 'Example','message': `Keep close to Nature's heart... and break clear away, once in awhile,
    and climb a mountain or spend a week in the woods. Wash your spirit clean.`, 'done': true },
    { 'title': 'Example','message': `Keep close to Nature's heart... and break clear away, once in awhile,
    and climb a mountain or spend a week in the woods. Wash your spirit clean.`, 'done': true },
    { 'title': 'Example','message': `Keep close to Nature's heart... and break clear away, once in awhile,
    and climb a mountain or spend a week in the woods. Wash your spirit clean.`, 'done': true }
  ];
    constructor() { }
}