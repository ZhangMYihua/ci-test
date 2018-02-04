import { Component, ChangeDetectionStrategy } from '@angular/core';

import { MediaLink } from '../shared/interfaces/link.interface';

@Component({
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainComponent {
  mediaLinks: MediaLink[] = [
    {
      link: 'github',
      label: 'ZhangMYihua',
      logoUrl: '',
    },
    {
      link: 'twitter',
      label: 'SlingingKeys',
      logoUrl: '',
    },
    {
      link: 'LinkedIn',
      label: 'Yihua Zhang',
      logoUrl: '',
    },
    {
      link: 'blog',
      label: 'Blog',
      logoUrl: '',
    },
  ];
}
