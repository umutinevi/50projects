const left = document.querySelector('.left')
const right = document.querySelector('.right')
const container = document.querySelector('.container')

//Left side event listeners to mouse enter or leave
left.addEventListener('mouseenter', () => {
    container.classList.add('hover-left')
})

left.addEventListener('mouseleave', () => {
    container.classList.remove('hover-left')
})


//Right side event listeners to mouse enter or leave
right.addEventListener('mouseenter', () => {
    container.classList.add('hover-right')
})

right.addEventListener('mouseleave', () => {
    container.classList.remove('hover-right')
})