import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Introduction } from './introduction/introduction';
import { About } from './about/about';
import { Resume } from './resume/resume';
import { Contact } from './contact/contact';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Introduction, About, Resume, Contact],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('shane-personal-site');

  constructor(
    private registry: MatIconRegistry,
    private sanitizer: DomSanitizer,
  ) {
    this.registry.addSvgIcon(
      'curve',
      this.sanitizer.bypassSecurityTrustResourceUrl('/icons/svg/curve.svg'),
    );
  }
}
