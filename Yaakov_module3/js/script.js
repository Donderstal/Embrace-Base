const body = document.getElementsByTagName("body")[0]


// Generieke Element constructor
// Parameters: Tag, Klasse, ID, Parent, Hoeveelheid
function elementFactory (element, classname, IDname, parent, quantity, innerHTML) {
    for (i = 0; i < quantity; i++) {
        let variable = document.createElement(element)
        $(variable).addClass(classname)
        $(variable).attr('id', IDname)
        parent.appendChild(variable)
        variable.innerHTML = innerHTML
    }
}

// Dynamisch genereren bootstrap navbar
function generateNavBar() { 
    elementFactory('navbar', 'navbar navbar-default navbar-fixed-top', "navbartop", body, 1, "")
    let navBarTop = document.getElementById('navbartop')
        elementFactory('div', 'container-fluid', "navcontainer", navBarTop, 1, "")
        let navContainer = document.getElementById('navcontainer')
            elementFactory('div', 'navbar-header', "navbar-header", navContainer, 1, "")
            let navHeader = document.getElementById('navbar-header')
                elementFactory('button', 'navbar-toggle collapsed', "navbar-button", navHeader, 1, "")
                let navButton = document.getElementById('navbar-button')
                $(navButton).attr('type', 'button')
                $(navButton).attr('date-toggle', 'collapse')
                $(navButton).attr('data-target', '#navbar')
                $(navButton).attr('aria-expanded', 'false')
                $(navButton).attr('aria-controls', 'navbar')
                    elementFactory('span', 'sr-only', "", navButton, 1, "Toggle Navigation")
                    elementFactory('span', 'icon-bar', "", navButton, 3, "")
                elementFactory('a', 'navbar-brand', "", navHeader, 1, "Food, LCC")
            elementFactory('div', 'navbar-collapse collapse', "navbar", navContainer, 1, "")
            let navBar = document.getElementById("navbar")
                elementFactory('ul', 'nav navbar-nav navbar-right', "nav navbar-nav navbar-right", navBar, 1, "")
                let navBarRight = document.getElementById('nav navbar-nav navbar-right')
                    elementFactory('li', 'dropdown', "dropdownmain", navBarRight, 1, "")
                    let dropdownMain = document.getElementById('dropdownmain')
                        elementFactory('a', 'dropdown-toggle visible-xs', "dropdown-toggle", dropdownMain, 1, "Menu<span class='caret'></span>")
                        let dropdownToggle = document.getElementById('dropdown-toggle')
                        $(dropdownToggle).attr('role', 'button')
                        $(dropdownToggle).attr('data-toggle', 'dropdown')
                        $(dropdownToggle).attr('href', '#')
                        $(dropdownToggle).attr('aria-expanded', 'false')
                        $(dropdownToggle).attr('aria-haspopup', 'true')
                        elementFactory('ul', 'dropdown-menu', "dropdown-menu", dropdownMain, 1, "")
                        let dropdownMenu = document.getElementById('dropdown-menu')
                            elementFactory('li', 'dropdown-button', "", dropdownMenu, 1, "<a href='#'>Beef</a>")
                            elementFactory('li', 'dropdown-button', "", dropdownMenu, 1, "<a href='#'>Chicken</a>")
                            elementFactory('li', 'dropdown-button', "", dropdownMenu, 1, "<a href='#'>Sushi</a>")
}
generateNavBar()

/* function generateBody() */