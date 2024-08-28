function revealToSpan() {
    document.querySelectorAll('.reveal').forEach((element) => {
        var parent = document.createElement('span');
        var child = document.createElement('span');
    
        parent.classList.add('parent');
        child.classList.add('child');
    
        child.innerHTML = element.innerHTML;
        element.innerText = '';
        parent.appendChild(child);
        element.appendChild(parent);
    })
}

// revealToSpan();

function loaderAnimation() {
        var tl = gsap.timeline();

    tl.from('.child span', {
        x: '300%',
        opacity: 0,
        color: 'yellow',
        duration: 1,
        delay: 0,
        stagger: 0.3,
    })

    tl.to('.parent .child', {
        y: '-100%',
        ease: 'Circ.easeInOut',
        duration: 2,
        delay: 1,
    })

    tl.to('.loader', {
        height: 0,
        top: '-100%',
        duration: 1,
        ease: Circ.easeInOut,
    }, "one")


    tl.to('.green', {
        height: '100%',
        y: '-100%',
        duration: 0.5,
        // delay: -1,
        ease: Circ.easeInOut,
    }, "one")

    tl.to('.green', {
        height: '0%',
        top: 0,
        duration: 0.5,
        ease: Circ.easeInOut,
    })

    tl.from('.c-visual svg', {
        strokeDashoffset: 2825,
        delay: 0.1,
        duration: 3,
    })
    
    tl.to('.c-visual svg path', {
        fill: '#6312EC',
        // delay: -1,
    })
}

// loaderAnimation();

function locoInitialise(){
    const scroll = new LocomotiveScroll({
    el: document.querySelector('.home'),
    smooth: true
});
}

locoInitialise();