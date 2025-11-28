export interface ExperiencePackage {
  id: string;
  name: string;
  description: string;
  price: number;
  duration: string;
  image: string;
  category: 'cultura' | 'gastronomia' | 'sport' | 'natura';
  highlights: string[];
  availability: 'alta' | 'media' | 'bassa';
}