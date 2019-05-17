import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

    constructor() {

    }

    getUsers() {
        return fetch('http://localhost:3000/users');
    }
}
