import { Injectable } from '@angular/core';
import { Character } from './character.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { CHARACTERS } from './mock-characters';



@Injectable()
export class CharacterService {
  characters: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.characters = database.list('characters');
   }

   getCharacterById(characterId: number){
      return this.database.object('characters/' + characterId);
   }

}
