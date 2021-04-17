const background = document.getElementById('background')
const password = document.getElementById('password')

password.addEventListener('input', (e) => {
  const blurValue = 20 - e.target.value.length * 2
  background.style.filter = `blur(${blurValue}px)`
})