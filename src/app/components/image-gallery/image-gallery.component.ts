import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageViewerDirective } from '../../directives/image-viewer/image-viewer.directive';

export interface GalleryImage {
    src: string;
    alt: string;
    fullSrc?: string;
}

@Component({
    selector: 'app-image-gallery',
    standalone: true,
    imports: [CommonModule, ImageViewerDirective],
    templateUrl: './image-gallery.component.html',
    styleUrl: './image-gallery.component.scss'
})

export class ImageGalleryComponent {
    @Input() images: GalleryImage[] = [];
}
