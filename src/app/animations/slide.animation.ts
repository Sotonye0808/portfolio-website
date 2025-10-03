import { trigger, transition, style, query, animateChild, group, animate } from '@angular/animations';

export const slideInAnimation = trigger('routeAnimations', [
  // Forward transitions (going to higher index)
  transition('HomePage => AboutPage', slideAnimation(true)),
  transition('HomePage => ProjectsPage', slideAnimation(true)),
  transition('HomePage => CertificatesPage', slideAnimation(true)),
  transition('AboutPage => ProjectsPage', slideAnimation(true)),
  transition('AboutPage => CertificatesPage', slideAnimation(true)),
  transition('ProjectsPage => CertificatesPage', slideAnimation(true)),
  
  // Backward transitions (going to lower index)
  transition('AboutPage => HomePage', slideAnimation(false)),
  transition('ProjectsPage => HomePage', slideAnimation(false)),
  transition('ProjectsPage => AboutPage', slideAnimation(false)),
  transition('CertificatesPage => HomePage', slideAnimation(false)),
  transition('CertificatesPage => AboutPage', slideAnimation(false)),
  transition('CertificatesPage => ProjectsPage', slideAnimation(false)),
]);

function slideAnimation(isForward: boolean) {
  const enterTransform = isForward ? 'translateX(100%)' : 'translateX(-100%)';
  const leaveTransform = isForward ? 'translateX(-100%)' : 'translateX(100%)';
  
  return [
    style({ 
      position: 'relative', 
      overflow: 'hidden',
      width: '100%',
      height: '100vh'
    }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'block'
      })
    ], { optional: true }),
    
    // Set initial position for entering page (off-screen)
    query(':enter', [
      style({ 
        transform: enterTransform,
        opacity: 1
      })
    ], { optional: true }),
    
    // Initialize leaving page at center
    query(':leave', [
      style({
        transform: 'translateX(0%)',
        opacity: 1
      })
    ], { optional: true }),
    
    query(':leave', animateChild(), { optional: true }),
    
    group([
      // Animate leaving page sliding out
      query(':leave', [
        animate('350ms cubic-bezier(0.4, 0.0, 0.2, 1)', style({
          transform: leaveTransform,
          opacity: 0.8
        }))
      ], { optional: true }),
      
      // Animate entering page sliding in
      query(':enter', [
        animate('350ms cubic-bezier(0.4, 0.0, 0.2, 1)', style({
          transform: 'translateX(0%)',
          opacity: 1
        }))
      ], { optional: true })
    ]),
    
    query(':enter', animateChild(), { optional: true }),
  ];
}