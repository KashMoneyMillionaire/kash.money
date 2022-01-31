const eyes = document.getElementById("eyes");
eyes.style.display = 'inline-block'
eyes.style.fontSize = '36px'

document.addEventListener('mousemove', e => {
    
    const p1 = {
        x: e.pageX,
        y: e.pageY
    };
    const p2 = {
        x: eyes.offsetLeft + eyes.offsetWidth / 2,
        y: eyes.offsetTop + eyes.offsetHeight / 2
    };
    
    const rawAngle = Math.atan2(p2.y - p1.y, p2.x - p1.x) * 180 / Math.PI;
    const angle = rawAngle > 90 || rawAngle < -90 ? rawAngle - 180 : rawAngle;
    const scale = p1.x < p2.x ? 1 : -1;

    eyes.style.transform = `rotate(${angle}deg) perspective(0) scale(${scale}, 1)`;
})
