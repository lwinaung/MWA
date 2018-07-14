import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { appConfig } from '../app.config';
import { User } from '../_models/index';

@Injectable()
export class UserService {
    constructor(private http: HttpClient) { }

    getById(_id: string) {
        return this.http.get(appConfig.apiUrl + '/users/' + _id);
    }

    create(user: User) {
        return this.http.post(appConfig.apiUrl + '/users/register', user);
    }
}