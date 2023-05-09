export function tag({type, id, classes, attr}) {
    const elem = document.createElement(type)
    if (id !== undefined) {
        elem.setAttribute("id", id)
    }

    if (attr !== undefined) {
        const keys = Object.keys(attr)
        keys.forEach(key => elem.setAttribute(key, attr[key]))
    }

    if (classes !== undefined) {
        classes.forEach(c => elem.classList.add(c))
    }

    return elem
}

// https://getbootstrap.com/docs/5.2/components/navbar/
export function renderNavBar(id) {
    const divContainer = tag({
        type: "div",
        classes: ["container-fluid"]
    })

    divContainer.appendChild((() => {
        const a = tag({
            type: "a",
            classes: ["navbar-brand"],
            attr: {href: "#"}
        })
        a.innerHTML = "Jazz Notes"
        return a
    })())

    divContainer.appendChild((() => {
        const button = tag({
            type: "button",
            classes: ["navbar-toggler"],
            attr: {
                type: "button",
                "data-bs-toggle": "collapse",
                "data-bs-target": "#pageNavBar",
                "aria-controls": "pageNavBar",
                "aria-expanded": "false",
                "aria-label": "Toggle navigation"
            }
        })
        button.appendChild(
            tag({
                type: "span",
                classes: ["navbar-toggler-icon"]
            })
        )
        return button
    })())
    
    const div = tag({
        type: "div",
        classes: ["collapse", "navbar-collapse"],
        id: "pageNavBar"
    })
    const navDiv = tag({
        type: "div",
        classes: ["navbar-nav"]
    })
    div.appendChild(navDiv)

    const items = [
        {link: "#table-scales", text: "Modes"},
        {link: "#table-scale-options", text: "Scale Options"},
        {link: "#table-implied-chords", text: "Implied Chords"},
        {link: "#exercises", text: "Exercises"},
    ]

    items.forEach((item, i) => {
        const name = `a-${i}-nav-item`
        const a = tag({
            type: "a",
            id: name,
            attr: {
                href: item.link,
            },
            classes: ["nav-item", "nav-link"]
        })
        if (i == 0) a.classList.add("active")
        a.innerHTML = item.text

        document.addEventListener("click", (event) => {
            // Un-highlight all nav items.
            const navItems = document.querySelectorAll(".nav-item")
            navItems.forEach(
                navItem => navItem.classList.remove("active")
            )

            // Highlight the selected nav item.
            const elem = document.getElementById(event.target.id)
            elem.classList.add("active")
        })

        navDiv.appendChild(a)
    })

    divContainer.appendChild(div)

    const nav = document.querySelector(id)
    nav.classList.add(
        "navbar", "navbar-expand-lg", "navbar-dark", "bg-dark", 
        "sticky-top"
    )
    nav.appendChild(divContainer)
    return nav
}
