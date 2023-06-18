const toggles = document.querySelectorAll('.faq-toggle')

toggles.forEach((toggle) => {
  console.log('clicked')
  toggle.addEventListener('click', () => {
    toggle.parentNode.classList.toggle('active')
  })
})
