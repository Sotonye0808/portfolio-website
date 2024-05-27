import { trigger, transition, style, query, animateChild, group, animate, animation } from '@angular/animations';

export const transitionAnimation = animation([
    style({
      height: '{{ height }}',
      opacity: '{{ opacity }}',
      backgroundColor: '{{ backgroundColor }}',
    }),
    animate('{{ time }}'),
  ]);

  // Routable animations
export const slideInAnimation = 
  trigger('routeAnimations', [
    // AboutPage to ProjectsPage and vice-versa
    transition('AboutPage <=> ProjectsPage', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ], { optional: true }),
      query(':enter', [
        style({ left: '-100%' })
      ], { optional: true }),
      query(':leave', animateChild(), { optional: true }),
      group([
        query(':leave', [
          animate('300ms ease-out', style({ left: '100%' }))
        ], { optional: true }),
        query(':enter', [
          animate('300ms ease-out', style({ left: '0%' }))
        ], { optional: true })
      ]),
      query(':enter', animateChild(), { optional: true }),
    ]),
    // ProjectsPage to CertificatesPage and vice-versa
    transition('ProjectsPage <=> CertificatesPage', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ], { optional: true }),
      query(':enter', [
        style({ left: '-100%' })
      ], { optional: true }),
      query(':leave', animateChild(), { optional: true }),
      group([
        query(':leave', [
          animate('300ms ease-out', style({ left: '100%' }))
        ], { optional: true }),
        query(':enter', [
          animate('300ms ease-out', style({ left: '0%' }))
        ], { optional: true })
      ]),
      query(':enter', animateChild(), { optional: true }),
    ]),
    // AboutPage to CertificatesPage and vice-versa
    transition('AboutPage <=> CertificatesPage', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ], { optional: true }),
      query(':enter', [
        style({ left: '-100%' })
      ], { optional: true }),
      query(':leave', animateChild(), { optional: true }),
      group([
        query(':leave', [
          animate('300ms ease-out', style({ left: '100%' }))
        ], { optional: true }),
        query(':enter', [
          animate('300ms ease-out', style({ left: '0%' }))
        ], { optional: true })
      ]),
      query(':enter', animateChild(), { optional: true }),
    ]),
    // Default transition
    transition('* <=> *', [
      style({position: 'relative'}),
      query(
        ':enter, :leave',
        [
          style({
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
          }),
        ],
        {optional: true},
      ),
      query(':enter', [style({left: '-100%'})], {optional: true}),
      query(':leave', animateChild(), {optional: true}),
      group([
        query(':leave', [animate('200ms ease-out', style({left: '100%', opacity: 0}))], {
          optional: true,
        }),
        query(':enter', [animate('300ms ease-out', style({left: '0%'}))], {optional: true}),
        query('@*', animateChild(), {optional: true}),
      ]),
    ]),
  ]);
