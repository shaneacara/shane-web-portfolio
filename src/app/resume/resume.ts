import { Component } from '@angular/core';
import { Skills } from './skills/skills';
import { Experiences } from './experiences/experiences';

@Component({
  selector: 'app-resume',
  imports: [Skills, Experiences],
  templateUrl: './resume.html',
  styleUrl: './resume.scss',
})
export class Resume {}
