// if (window.matchMedia("(min-width: 768px)").matches) {
//     // let tl = gsap.timeline({
//         //     scrollTrigger:{
// //         trigger :'.left',
// //         start   :'top center',
// //         end     :'bottom center',
// //         scrub   :true,
// //         marker  :true
// //     }
// // })
// // tl.to('.left',{
//     //     y:-80
//     // })
// gsap.registerPlugin(ScrollTrigger)
// gsap.to('.inside1',{
//     y           :'-55%',
//     // duration    : 3,
//     scrollTrigger:{
//         trigger :'.trigger1',
//         start   :'top center',
//         end     :'bottom 20%',
//         scrub   : true,
//         // markers :true,
//         pin     :true,
//         flexBasis: '50%'
//     }
// })
// gsap.to('.r1',{
//     x           :0,
//     // duration    : 3,
//     scrollTrigger:{
//         trigger :'.r1',
//         start   :'top bottom',
//         end     :'top center',
//         scrub   : true,
//         // markers  :true
//     }
// })
// gsap.to('.inside2',{
//     y           :'-65%',
//     // duration    : 3,
//     scrollTrigger:{
//         trigger :'.trigger2',
//         start   :'top center',
//         end     :'bottom 20%',
//         scrub   : true,
//         // markers :true,
//         pin     :true,
//         flexBasis: '50%'
//     }
// })
// gsap.to('.r2',{
//     x           :0,
//     // duration    : 3,
//     scrollTrigger:{
//         trigger :'.r2',
//         start   :'top bottom',
//         end     :'top center',
//         scrub   : true,
//         // markers  :true
//     }
// })
// gsap.to('.inside3',{
//     y           :'-70%',
//     // duration    : 3,
//     scrollTrigger:{
//         trigger :'.trigger3',
//         start   :'top center',
//         end     :'bottom 20%',
//         scrub   : true,
//         // markers :true,
//         pin     :true,
//         flexBasis: '50%'
//     }
// })
// gsap.to('.r3',{
//     x           :0,
//     // duration    : 3,
//     scrollTrigger:{
//         trigger :'.r3',
//         start   :'top bottom',
//         end     :'top center',
//         scrub   : true,
//         // markers  :true
//     }
// })
// }else{
//     gsap.registerPlugin(ScrollTrigger)
// gsap.to('.inside1',{
//     y           :'-55%',
//     // duration    : 3,
//     scrollTrigger:{
//         trigger :'.trigger1',
//         start   :'top center',
//         end     :'bottom 20%',
//         scrub   : true,
//         // markers :true,
//         pin     :true,
//         flexBasis: '50%'
//     }
// })
// gsap.to('.r1',{
//     x           :0,
//     // duration    : 3,
//     scrollTrigger:{
//         trigger :'.r1',
//         start   :'top bottom',
//         end     :'top center',
//         scrub   : true,
//         // markers  :true
//     }
// })
// gsap.to('.inside2',{
//     y           :'-65%',
//     // duration    : 3,
//     scrollTrigger:{
//         trigger :'.trigger2',
//         start   :'top center',
//         end     :'bottom 20%',
//         scrub   : true,
//         // markers :true,
//         pin     :true,
//         flexBasis: '50%'
//     }
// })
// gsap.to('.r2',{
//     x           :0,
//     // duration    : 3,
//     scrollTrigger:{
//         trigger :'.r2',
//         start   :'top bottom',
//         end     :'top center',
//         scrub   : true,
//         // markers  :true
//     }
// })
// gsap.to('.inside3',{
//     y           :'-70%',
//     // duration    : 3,
//     scrollTrigger:{
//         trigger :'.trigger3',
//         start   :'top center',
//         end     :'bottom 20%',
//         scrub   : true,
//         // markers :true,
//         pin     :true,
//         flexBasis: '50%'
//     }
// })
// gsap.to('.r3',{
//     x           :0,
//     // duration    : 3,
//     scrollTrigger:{
//         trigger :'.r3',
//         start   :'top bottom',
//         end     :'top center',
//         scrub   : true,
//         // markers  :true
//     }
// })
// }
let mm = gsap.matchMedia();
mm.add("(min-width: 768px)", (context)=>{
    gsap.registerPlugin(ScrollTrigger)
gsap.to('.inside1',{
    y           :'-55%',
    // duration    : 3,
    scrollTrigger:{
        trigger :'.trigger1',
        start   :'top 30%',
        end     :'bottom center',
        scrub   : true,
        // markers :true,
        pin     :true,
        flexBasis: '50%'
    }
})
gsap.to('.r1',{
    x           :0,
    // duration    : 3,
    scrollTrigger:{
        trigger :'.r1',
        start   :'top bottom',
        end     :'top 10%',
        scrub   : true,
        // markers  :true
    }
})
gsap.to('.inside2',{
    y           :'-65%',
    // duration    : 3,
    scrollTrigger:{
        trigger :'.trigger2',
        start   :'top 30%',
        end     :'bottom 10%',
        scrub   : true,
        // markers :true,
        pin     :true,
        flexBasis: '50%'
    }
})
gsap.to('.r2',{
    x           :0,
    // duration    : 3,
    scrollTrigger:{
        trigger :'.r2',
        start   :'top bottom',
        end     :'top center',
        scrub   : true,
        // markers  :true
    }
})
gsap.to('.inside3',{
    y           :'-75%',
    // duration    : 3,
    scrollTrigger:{
        trigger :'.trigger3',
        start   :'top 30%',
        end     :'200% top',
        scrub   : true,
        // markers :true,
        pin     :true,
        flexBasis: '50%'
    }
})
gsap.to('.r3',{
    x           :0,
    // duration    : 3,
    scrollTrigger:{
        trigger :'.r3',
        start   :'top bottom',
        end     :'top center',
        scrub   : true,
        // markers  :true
    }
})
})