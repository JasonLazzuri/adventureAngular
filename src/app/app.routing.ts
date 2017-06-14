import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharacterBuildComponent }   from './character-build/character-build.component';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { StoryPage1Component } from './story-page1/story-page1.component';
import { StoryStartComponent } from './story-start/story-start.component';

const appRoutes: Routes = [
  {
     path: '',
     component: WelcomeComponent
   },
  {
    path: 'character-build',
    component: CharacterBuildComponent
  },
  {
    path: 'story-page1',
    component: StoryPage1Component
  },
  {
    path: 'characters/:id',
    component: StoryStartComponent
  },
 ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
