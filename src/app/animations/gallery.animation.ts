import { trigger, transition, style, animate, query, stagger } from '@angular/animations';

export const galleryAnimation = trigger('galleryAnimation', [
    transition('* => *', [
        query(':enter', [
            style({ opacity: 0, transform: 'scale(0.95)' }),
            stagger('50ms', [
                animate('200ms ease-out', style({ opacity: 1, transform: 'scale(1)' }))
            ])
        ], { optional: true })
    ])
]);

export const imageExpandAnimation = trigger('expandImage', [
    transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.8)' }),
        animate('300ms ease-out', style({ opacity: 1, transform: 'scale(1)' }))
    ]),
    transition(':leave', [
        animate('200ms ease-in', style({ opacity: 0, transform: 'scale(0.8)' }))
    ])
]);
