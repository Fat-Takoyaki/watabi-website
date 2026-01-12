import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  ContentService,
  ContentSection,
} from '../../services/content.services';

@Component({
  selector: 'app-content-editor',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './content-editor.html',
  styleUrls: ['./content-editor.scss'],
})
export class ContentEditor implements OnInit {
  sections: ContentSection[] = [];
  selectedSectionId: string | null = null;
  content: any = null;
  originalContent: any = null;

  isLoading = false;
  isSaving = false;
  saveSuccess = false;

  // Sidebar "Come funziona"
  helpOpen = false;

  toggleHelp(): void {
    this.helpOpen = !this.helpOpen;
  }

  closeHelp(): void {
    this.helpOpen = false;
  }

  constructor(public contentService: ContentService) {}

  ngOnInit(): void {
    this.sections = this.contentService.getSections();

    // Seleziona automaticamente la prima sezione se disponibile
    if (this.sections.length > 0) {
      this.selectSection(this.sections[0].id);
    }
  }

  get selectedSection(): ContentSection | undefined {
    return this.selectedSectionId
      ? this.contentService.getSection(this.selectedSectionId)
      : undefined;
  }

  selectSection(sectionId: string): void {
    this.selectedSectionId = sectionId;
    this.loadContent();
  }

  private loadContent(): void {
    if (!this.selectedSectionId) return;

    this.isLoading = true;
    this.content = null;

    this.contentService.loadContent(this.selectedSectionId).subscribe({
      next: (data) => {
        this.content = JSON.parse(JSON.stringify(data)); // Deep copy
        this.loadOriginalContent();
      },
      error: (err) => {
        console.error('Errore caricamento:', err);
        this.isLoading = false;
      },
    });
  }

  private loadOriginalContent(): void {
    if (!this.selectedSectionId) return;

    const section = this.selectedSection;
    if (!section) return;

    // Carica sempre il JSON originale per confronto
    this.contentService.loadContent(section.id).subscribe({
      next: (data) => {
        this.originalContent = data;
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
      },
    });
  }

  saveToLocalStorage(): void {
    if (!this.selectedSectionId || !this.content) return;

    this.isSaving = true;

    const success = this.contentService.saveContent(
      this.selectedSectionId,
      this.content
    );

    if (success) {
      this.saveSuccess = true;
      setTimeout(() => {
        this.saveSuccess = false;
      }, 3000);
    } else {
      alert('Errore durante il salvataggio!');
    }

    this.isSaving = false;
  }

  resetToOriginal(): void {
    if (!this.selectedSectionId || !this.originalContent) return;

    const section = this.selectedSection;
    if (!section) return;

    if (
      confirm(
        `Sei sicuro di voler ripristinare "${section.name}" all'originale? Perderai tutte le modifiche non esportate.`
      )
    ) {
      this.contentService.resetContent(this.selectedSectionId);
      this.content = JSON.parse(JSON.stringify(this.originalContent));
      console.log(`🔄 [${section.name}] Ripristinato`);
    }
  }

  exportJSON(): void {
    if (!this.selectedSectionId || !this.content) return;
    this.contentService.exportContent(this.selectedSectionId, this.content);
  }

  hasLocalChanges(): boolean {
    if (!this.selectedSectionId) return false;
    return this.contentService.hasLocalChanges(this.selectedSectionId);
  }

  // Helper per determinare il tipo di campo
  isObject(value: any): boolean {
    return value !== null && typeof value === 'object' && !Array.isArray(value);
  }

  isArray(value: any): boolean {
    return Array.isArray(value);
  }

  isString(value: any): boolean {
    return typeof value === 'string';
  }

  // ✅ AGGIUNTE per primitivi root
  isBoolean(value: any): boolean {
    return typeof value === 'boolean';
  }

  isNumber(value: any): boolean {
    return typeof value === 'number' && !isNaN(value);
  }

  // Helper per aggiungere elementi agli array
  addArrayItem(array: any[]): void {
    if (!array) return;

    // Cerca di capire la struttura dall'ultimo elemento
    if (array.length > 0) {
      const lastItem = array[array.length - 1];
      // Se è un oggetto, clonalo
      if (this.isObject(lastItem)) {
        array.push(JSON.parse(JSON.stringify(lastItem)));
      } else {
        // Se è una stringa o altro tipo primitivo
        array.push(typeof lastItem === 'string' ? '' : lastItem);
      }
    } else {
      // Default: stringa vuota
      array.push('');
    }
  }

  removeArrayItem(array: any[], index: number): void {
    if (confirm('Sei sicuro di voler eliminare questo elemento?')) {
      array.splice(index, 1);
    }
  }

  // Traccia il valore dell'array item per ngModel
  trackArrayValue(index: number, item: any): any {
    return index;
  }

  // Ottiene il valore di un array item in modo sicuro
  getArrayItemValue(array: any[], index: number): any {
    return array && array[index] !== undefined ? array[index] : '';
  }

  // Imposta il valore di un array item
  setArrayItemValue(array: any[], index: number, value: any): void {
    if (array && index >= 0 && index < array.length) {
      array[index] = value;
    }
  }

  // Genera un ID univoco per i campi del form
  getFieldId(path: string): string {
    return path.replace(/\./g, '-').replace(/\[/g, '-').replace(/\]/g, '');
  }

  // Ottiene tutte le chiavi di un oggetto
  getObjectKeys(obj: any): string[] {
    return obj ? Object.keys(obj) : [];
  }
}
