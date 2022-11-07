document.querySelector('.headshot-btn').addEventListener('click', headshot)
document.querySelector('.product-btn').addEventListener('click', product)
document.querySelector('.fineart-btn').addEventListener('click', fineart)
document.querySelector('.fashion-btn').addEventListener('click', fashion)
document.querySelector('.forsite-btn').addEventListener('click', forsite)


const first = forsite()




function forsite() {
    document.querySelector('.forsite-btn').style.color = 'var(--purple)'
    document.querySelector('.product-btn').style.color = '#ffff'
    document.querySelector('.fineart-btn').style.color = '#ffff'
    document.querySelector('.fashion-btn').style.color = '#ffff'
    document.querySelector('.headshot-btn').style.color = '#ffff'

    document.querySelector('.forsite').style.display = 'block'

    document.querySelector('.product').style.display = 'none'
    document.querySelector('.fineart').style.display = 'none'
    document.querySelector('.fashion').style.display = 'none'
    document.querySelector('.headshot').style.display = 'none'
}

function product() {
    document.querySelector('.forsite-btn').style.color = '#ffff'
    document.querySelector('.product-btn').style.color = 'var(--purple)'
    document.querySelector('.fineart-btn').style.color = '#ffff'
    document.querySelector('.fashion-btn').style.color = '#ffff'
    document.querySelector('.headshot-btn').style.color = '#ffff'
    

    document.querySelector('.forsite').style.display = 'none'
    document.querySelector('.product').style.display = 'block'
    // document.querySelector('.product').classList.toggle('transition')
    document.querySelector('.fineart').style.display = 'none'
    document.querySelector('.fashion').style.display = 'none'
    document.querySelector('.headshot').style.display = 'none'
}
function fineart() {
    document.querySelector('.forsite-btn').style.color = '#ffff'
    document.querySelector('.product-btn').style.color = '#ffff'
    document.querySelector('.fineart-btn').style.color = 'var(--purple)'
    document.querySelector('.fashion-btn').style.color = '#ffff'
    document.querySelector('.headshot-btn').style.color = '#ffff'

    document.querySelector('.forsite').style.display = 'none'
    document.querySelector('.product').style.display = 'none'
    document.querySelector('.fineart').style.display = 'block'
    document.querySelector('.fashion').style.display = 'none'
    document.querySelector('.headshot').style.display = 'none'
}

function fashion() {
    document.querySelector('.forsite-btn').style.color = '#ffff'
    document.querySelector('.product-btn').style.color = '#ffff'
    document.querySelector('.fineart-btn').style.color = '#ffff'
    document.querySelector('.fashion-btn').style.color = 'var(--purple)'
    document.querySelector('.headshot-btn').style.color = '#ffff'

    document.querySelector('.forsite').style.display = 'none'
    document.querySelector('.product').style.display = 'none'
    document.querySelector('.fineart').style.display = 'none'
    document.querySelector('.fashion').style.display = 'block'
    document.querySelector('.headshot').style.display = 'none'
}
function headshot() {
    document.querySelector('.forsite-btn').style.color = '#ffff'
    document.querySelector('.product-btn').style.color = '#ffff'
    document.querySelector('.fineart-btn').style.color = '#ffff'
    document.querySelector('.fashion-btn').style.color = '#ffff'
    document.querySelector('.headshot-btn').style.color = 'var(--purple)'

    document.querySelector('.forsite').style.display = 'none'
    document.querySelector('.product').style.display = 'none'
    document.querySelector('.fineart').style.display = 'none'
    document.querySelector('.fashion').style.display = 'none'
    document.querySelector('.headshot').style.display = 'block'
}
