const headerMarkup = `
        <div class="header__burger">Burger</div>
        <div class="header__image">Image</div>
        <span class="header__title">Title</span>
      `

export const headerRef = document.createElement('header')
headerRef.classList.add('header')
headerRef.innerHTML = headerMarkup
