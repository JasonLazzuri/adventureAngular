import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';
import { CharacterService } from '../character.service';
import { Router } from '@angular/router';
import { Character } from '../character.model';
import { StoryStartComponent} from '../story-start/story-start.component'

@Component({
  selector: 'app-story-page1',
  templateUrl: './story-page1.component.html',
  styleUrls: ['./story-page1.component.css'],
  providers: [CharacterService]
})
export class StoryPage1Component implements OnInit {
  characters: FirebaseListObservable<any[]>;
  characterToDisplay;

  constructor(private router: Router, private characterService: CharacterService){}

  goToStoryStart(clickedCharacter: Character) {

    // this.router.navigate(['characters', clickedCharacter.id]);
  };

  ngOnInit(){

    // this.characters = this.characterService.getCharacterById(.id);
  }
}
