import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-experiences',
  imports: [MatIconModule],
  templateUrl: './experiences.html',
  styleUrl: './experiences.scss',
})
export class Experiences {
  experiences = [
    {
      duration: 'Dec ‘22 - Present',
      role: 'Senior Software Engineer',
      description: [
        'Developed and optimized frontend features for a large-scale B2B e-commerce platform.',
        'Built key user experiences such as payments, order management, and account permissions.',
        'Improving performance through caching and RxJS optimizations.',
        'Led frontend bug resolution during a major rollout.',
        'Mentored developers, and collaborated with cross-functional teams.',
        'Contributed to system upgrades, technical documentation, and feature planning as a frontend sub-lead.',
      ],
    },
    {
      duration: 'Dec ‘21 - Nov ‘22',
      role: 'Software Engineer Analyst',
      description: [
        'Developed and optimized frontend features for a large-scale B2B e-commerce platform.',
        'Built key user experiences such as payments, order management, and account permissions.',
        'Improving performance through caching and RxJS optimizations.',
        'Led frontend bug resolution during a major rollout.',
        'Mentored developers, and collaborated with cross-functional teams.',
        'Contributed to system upgrades, technical documentation, and feature planning as a frontend sub-lead.',
      ],
    },
    {
      duration: 'Jul ‘20 – Nov ‘21',
      role: 'Associate Software Engineer',
      description: [
        'Developed and optimized frontend features for a large-scale B2B e-commerce platform.',
        'Built key user experiences such as payments, order management, and account permissions.',
        'Improving performance through caching and RxJS optimizations.',
        'Led frontend bug resolution during a major rollout.',
        'Mentored developers, and collaborated with cross-functional teams.',
        'Contributed to system upgrades, technical documentation, and feature planning as a frontend sub-lead.',
      ],
    },
  ];

  currentSelection = 'Dec ‘22 - Present';
}
