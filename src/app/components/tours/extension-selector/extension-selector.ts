import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Extension } from '../../../models/extension.model';
import { ExtensionsService } from "../../../services/extensions.service";

@Component({
  selector: 'app-extension-selector',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './extension-selector.html',
  styleUrls: ['./extension-selector.scss'],
})
export class ExtensionSelector implements OnInit {
  @Input() tourId!: string;
  @Input() availableExtensionIds: string[] = [];
  @Input() isOpen: boolean = false;
  
  @Output() close = new EventEmitter<void>();
  @Output() extensionSelected = new EventEmitter<Extension | null>();

  extensions: Extension[] = [];
  selectedExtension: Extension | null = null;
  activeTab: 'mare' | 'citta' = 'mare';

  constructor(private extensionsService: ExtensionsService) {}

  ngOnInit(): void {
    this.loadExtensions();
  }

  loadExtensions(): void {
    this.extensions = this.extensionsService.getExtensionsByIds(this.availableExtensionIds);
  }

  get mareExtensions(): Extension[] {
    return this.extensions.filter(ext => ext.type === 'mare');
  }

  get cittaExtensions(): Extension[] {
    return this.extensions.filter(ext => ext.type === 'citta');
  }

  selectExtension(extension: Extension): void {
    this.selectedExtension = this.selectedExtension?.id === extension.id ? null : extension;
  }

  confirm(): void {
    this.extensionSelected.emit(this.selectedExtension);
    this.closeModal();
  }

  skip(): void {
    this.extensionSelected.emit(null);
    this.closeModal();
  }

  closeModal(): void {
    this.close.emit();
  }

  setActiveTab(tab: 'mare' | 'citta'): void {
    this.activeTab = tab;
  }
}