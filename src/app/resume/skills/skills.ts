import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  techStack = [
    {
      name: 'Frontend Development',
      skills: [
        'Angular',
        'TypeScript',
        'JavaScript',
        'HTML',
        'CSS',
        'SCSS',
        'RxJs',
        'Reactive Forms',
      ],
    },
    {
      name: 'Systems',
      skills: ['SAP Commerce Cloud', 'SnapPay', 'Adyen', 'Amplience', 'Siebel'],
    },
    {
      name: 'Tools',
      skills: ['Git', 'Jira', 'Confluence', 'Postman', 'Figma', 'Swagger'],
    },
  ];

  currentSelection = 'Frontend Development';

  onClick(selection: string): void {
    this.currentSelection = selection;
  }

  get skills() {
    return (
      this.techStack.find((stack) => {
        return stack.name === this.currentSelection;
      })?.skills ?? []
    );
  }
}
