import {
  trigger,
  animate,
  transition,
  style,
  query,
} from '@angular/animations';

export const pageFadeAnimation = trigger('pageFadeAnimation', [
  transition('* => *', [
    query(
      ':enter',
      [
        style({
          opacity: 0,
          width: 'calc(100vw - 40px)',
          position: 'absolute',
        }),
      ],
      {
        optional: true,
      }
    ),
    query(
      ':leave',
      [
        style({ opacity: 1 }),
        animate(
          '0.5s ease',
          style({
            opacity: 0,
            width: 'calc(100vw - 40px)',
            position: 'absolute',
          })
        ),
      ],
      { optional: true }
    ),
    query(
      ':enter',
      [
        style({ opacity: 0 }),
        animate(
          '0.5s ease',
          style({
            opacity: 1,
            width: 'calc(100vw - 40px)',
            position: 'relative',
          })
        ),
      ],
      { optional: true }
    ),
  ]),
]);
export const fadeInOut = trigger('fadeInOut', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('0.3s ease', style({ opacity: 1 })),
  ]),
  transition(':leave', [animate('0.3s ease', style({ opacity: 0 }))]),
]);
