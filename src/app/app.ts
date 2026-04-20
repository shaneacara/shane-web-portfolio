import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Introduction } from './introduction/introduction';
import { About } from './about/about';
import { Resume } from './resume/resume';
import { Contact } from './contact/contact';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Menu } from './menu/menu';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Introduction, About, Resume, Contact, Menu],
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
    this.registry.addSvgIcon(
      'linkedin',
      this.sanitizer.bypassSecurityTrustResourceUrl('/icons/svg/linkedin.svg'),
    );
    this.registry.addSvgIcon(
      'github',
      this.sanitizer.bypassSecurityTrustResourceUrl('/icons/svg/github.svg'),
    );
    AOS.init();
  }
}
