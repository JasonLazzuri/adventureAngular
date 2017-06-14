import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';
import { CharacterService } from '../character.service';
import { Router } from '@angular/router';
import { Character } from '../character.model';
import { Location } from '@angular/common';

@Component({
  selector: 'app-story-start',
  templateUrl: './story-start.component.html',
  styleUrls: ['./story-start.component.css'],
  providers: [CharacterService]

})
export class StoryStartComponent implements OnInit {
  characters: FirebaseListObservable<any[]>;
  characterToDisplay;
  characterId;

  constructor(private route: ActivatedRoute, private location: Location, private router: Router, private characterService: CharacterService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
     this.characterId = urlParameters['id'];
   });
   this.characterToDisplay = this.characterService.getCharacterById(this.characterId);
  }

}
