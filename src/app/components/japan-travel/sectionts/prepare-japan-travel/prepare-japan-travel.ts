import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Book {
  title: string;
  author: string;
}

interface Movie {
  title: string;
  director: string;
}


@Component({
  selector: 'app-prepare-japan-travel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './prepare-japan-travel.html',
  styleUrls: ['./prepare-japan-travel.scss']
})
export class PrepareJapanTravel {
  books: Book[] = [
    { title: 'Norwegian Wood', author: 'Haruki Murakami' },
    { title: 'Autostop con Buddha: Viaggio attraverso il Giappone', author: 'Will Ferguson' },
    { title: 'Memorie di una Geisha', author: 'Arthur Golden' },
    { title: 'Kitchen', author: 'Banana Yoshimoto' },
    { title: "Kiku's Prayer", author: 'Shusaku Endo' },
    { title: 'Shogun', author: 'James Clavell' },
    { title: 'Io sono un gatto', author: 'Natsume Soseki' }
  ];

  movies: Movie[] = [
    { title: 'Black Rain', director: 'Ridley Scott' },
    { title: 'Departures', director: 'Yōjirō Takita' },
    { title: 'Hana-bi', director: 'Takeshi Kitano' },
    { title: 'Un affare di famiglia', director: 'Koreeda Hirokazu' },
    { title: 'La città incantata', director: 'Studio Ghibli' },
    { title: 'Rashomon', director: 'Akira Kurosawa' },
    { title: 'Viaggio a Tokyo', director: 'Yasujiro Ozu' }
  ];
  
  selectedTab: 'books' | 'movies' = 'books';
}