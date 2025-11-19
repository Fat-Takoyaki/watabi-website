import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrls: ['./header.scss'],
})
export class Header {
  @Input() backgroundImage: string =
    'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=1920&q=80';
  @Input() title: string = 'Il Giappone per viaggiare liberi';
  @Input() subtitle: string = 'Un modo diverso di viaggiare';
  @Input() overlayOpacity: number = 0.3;
  @Input() minHeight: string = '550px';

  cloudImages = {
    cloud1: './assets/img/cloud-1.png',
    cloud2: './assets/img/cloud-2.png',
    cloud3: './assets/img/cloud-3.png',
    cloud4: './assets/img/cloud-4.png',
    cloud5: './assets/img/cloud-5.png',
  };
}
