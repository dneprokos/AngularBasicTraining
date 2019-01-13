import { trigger, state, style, transition, animate, keyframes, animation, useAnimation } from '@angular/animations';

export let bounceOutLeftAnimation = animation(
    //0.5s -transition speed, 0.2s - transition delay, third is Easing function that controlls no-linear speed.
    animate('0.5s 0.2s ease-out', //You can use cubic-bezier(.61, .29, .07, 1.02) 
    //instead of ease-in, ease-out, etc in order to define custom no-linear speed.
        keyframes([
            style({ offset: .2, 
                opacity: 1, 
                transform: 'translateX(20px)'}),
            style({ offset: 1, 
                opacity: 0, 
                transform: 'translateX(-100%)'})
        ])
    )
)

export let fadeInAnimation = animation([
    style({ opacity: 0 }), 
    animate('{{ duration }} {{ easing }}')
],
    {
        params: {
            duration: '2s',
            easing: 'ease-out'
        }
    }
)

export let fadeOutAnimation = animation([
    animate(1000, style({ opacity: 0 }))
])

export let fade = trigger('fade', [
    // Add/Delete transition. You can use alias ':enter, :leave' instead of 'void <=> *' bydirectional.
    transition(':enter', useAnimation(fadeInAnimation)),     
    transition(':leave', useAnimation(fadeOutAnimation))     
])

export let slide = trigger('slide', [    
    transition(':enter', [
        style({ transform: 'translate(-10px)' }),
        animate(2000)
    ]),
    transition(':leave', useAnimation(bounceOutLeftAnimation))
])