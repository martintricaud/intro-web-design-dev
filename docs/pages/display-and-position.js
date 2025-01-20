const positionRadios = document.querySelectorAll('input[name="position"]');
const displayRadios = document.querySelectorAll('input[name="display"]');
const positionControls = document.getElementById('position-controls');
const sizeControls = document.getElementById('size-controls');
const div2 = document.getElementById('dummy2');
const allDivs = document.querySelectorAll('.demo-block');
positionRadios.forEach(radio => {
    radio.addEventListener('change', () => {
        div2.style.position = radio.value;
        if (radio.value === 'static') {
            positionControls.classList.add('inactive');
        } else {
            positionControls.classList.remove('inactive');
        }
    });
});
document.getElementById('top-range').addEventListener('input', (e) => {
    div2.style.top = e.target.value + 'vh';
});
document.getElementById('left-range').addEventListener('input', (e) => {
    div2.style.left = e.target.value + 'vw';
});
displayRadios.forEach(radio => {
    radio.addEventListener('change', () => {
        allDivs.forEach(div => {
            div.style.display = radio.value;
        });
        if (radio.value === 'inline') {
            sizeControls.classList.add('inactive');
        } else {
            sizeControls.classList.remove('inactive');
        }
    });
});
document.getElementById('width-range').addEventListener('input', (e) => {
    allDivs.forEach(div => {
        div.style.width = e.target.value + 'px';
    });
});
document.getElementById('height-range').addEventListener('input', (e) => {
    allDivs.forEach(div => {
        div.style.height = e.target.value + 'px';
        div.style.lineHeight = e.target.value + 'px'; // Adjust line height to center text vertically
    });
});