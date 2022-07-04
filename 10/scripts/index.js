const POPOVER_CONTAINER_SELECTOR = '.popover-container'
const POPOVER_SELECTOR = '.popover'

const VISUALLY_HIDDEN = 'visually-hidden'
const NO_SCROLL = 'no-scroll'

document.addEventListener('DOMContentLoaded', () => {
  const modalContainer = document.querySelector('.modal-container')
  const modalCloseButton = document.querySelector('.modal-close-button')
  const feedbackButton = document.querySelector('.feedback-button')
  const popoverContainers = document.querySelectorAll(POPOVER_CONTAINER_SELECTOR)

  function openModal() {
    document.body.classList.add(NO_SCROLL)
    modalContainer.classList.remove(VISUALLY_HIDDEN)

    modalCloseButton.addEventListener('click', closeModal)
  }

  function closeModal() {
    document.body.classList.remove('no-scroll')
    modalContainer.classList.add(VISUALLY_HIDDEN)

    modalCloseButton.removeEventListener('click', openModal)
  }

  function openPopover(event) {
    if (!event.target.classList.contains('page')) {
      event.preventDefault()
    }

    this.querySelector(POPOVER_SELECTOR).classList.remove(VISUALLY_HIDDEN)

    document.body.addEventListener('click', closePopover.bind(this))
  }

  function closePopover(event) {
    if (event.target.closest(POPOVER_CONTAINER_SELECTOR) === null) {
      document.body.removeEventListener('click', closePopover)

      this.querySelector(POPOVER_SELECTOR).classList.add(VISUALLY_HIDDEN)
    }
  }

  feedbackButton?.addEventListener('click', openModal)
  popoverContainers?.forEach((container) => {
    container.addEventListener('click', openPopover)
  })
})
