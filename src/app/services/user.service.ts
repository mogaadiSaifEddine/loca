import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/User.model';
import { environment } from '../../environments/environment';
import { Template } from '@angular/compiler/src/render3/r3_ast';
import { PreTemplate } from '../models/Template.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  userToUpdate: User | undefined;
  templates: PreTemplate[] = [
    {
      id: 1,
      name: 'Treasure Hunt',
      icon: 'https://img.icons8.com/ios/50/undefined/treasure-chest.png',
      description:
        'Create a treasure hunt  game with treasures,  challenges, teams and  score.',
    },

    {
      id: 2,
      name: 'Indoor Guide',

      icon: 'https://img.icons8.com/ios/50/undefined/earbud-headphones.png',
      description:
        'Create a Indoor Guide  with questions, answers, teams and score.',
    },
    {
      id: 3,
      name: 'Tour Guide',
      icon: 'https://img.icons8.com/external-simple-solid-edt.graphics/50/undefined/external-flag-flags-simple-solid-edt.graphics-2.png',
      description:
        'Create a tour guide game with questions, answers, teams and score.',
    },
    {
      id: 4,
      name: 'Indoor Game',
      icon: 'https://img.icons8.com/external-dreamstale-lineal-dreamstale/32/undefined/external-domino-gambling-dreamstale-lineal-dreamstale-4.png',
      description:
        'Create a indoor game with questions, answers, teams and score.',
    },
    {
      id: 5,
      name: 'List',
      icon: 'https://img.icons8.com/ios/50/undefined/list.png',
    },
  ];
  constructor(private http: HttpClient) {}

  // get list of users
  getUsers() {
    return this.http.get<User[]>(environment.api);
  }

  // add new user
  addUser(user: User) {
    return this.http.post(environment.api, user);
  }
  //delete user
  deleteUser(id: number) {
    return this.http.delete(environment.api + '/' + id);
  }
  //get user by id
  getUserById(id: number) {
    return this.http.get<User>(environment.api + '/' + id);
  }
  //update user
  updateUser(user: User) {
    return this.http.patch(environment.api + '/' + user.id, user);
  }
}
