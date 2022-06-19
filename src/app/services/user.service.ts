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

      icon: 'https://img.icons8.com/ios/50/undefined/Indoor Guide.png',
      description:
        'Create a Indoor Guide  with questions, answers, teams and score.',
    },
    {
      id: 3,
      name: 'Tour Guide',
      icon: 'https://img.icons8.com/ios/50/undefined/tour-guide.png',
      description:
        'Create a tour guide game with questions, answers, teams and score.',
    },
    {
      id: 4,
      name: 'Indoor Game',
      icon: 'https://img.icons8.com/ios/50/undefined/indoor-game.png',
      description:
        'Create a indoor game with questions, answers, teams and score.',
    },
    {
      id: 5,
      name: 'List',
      icon: 'https://img.icons8.com/ios/50/undefined/list.png',
      description: 'Create a list with questions, answers, teams and score.',
    },
  ];
  constructor(private http: HttpClient) {}

  // get list of users
  getUsers() {
    return this.http.get<User[]>(environment.api);
  }
}
