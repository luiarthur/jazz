function tag({type, id, classes, attr}) {
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

export function renderNavBar3(anchor) {
    const result = document.querySelector(anchor)
    const h1 = tag({type: "h4"})
    h1.innerHTML = "H1"
    result.appendChild(h1)
}

// https://getbootstrap.com/docs/4.0/components/navbar/
export function renderNavBar(anchor) {
    const result = document.querySelector(anchor)
    result.classList.add(
        "navbar", "navbar-expand-lg", "navbar-light", "bg-light"
    )

    result.appendChild((() => {
        const a = tag({
            type: "a",
            classes: ["navbar-brand"],
            attr: {href: "#"}
        })
        a.innerHTML = "Jazz Notes"
        return a
    })())

    result.appendChild((() => {
        const button = tag({
            type: "button",
            classes: ["navbar-toggler"],
            attr: {
                type: "button",
                "data-toggle": "collapse",
                "data-target": "#navbarNavAltMarkup",
                "aria-controls": "navbarNavAltMarkup",
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
        id: ["navbarNavAltMarkup"]
    })
    const navDiv = tag({
        type: "div",
        classes: ["navbar-nav"]
    })
    div.appendChild(navDiv)

    const items = [
        {link: "#", text: "Home"},
        {link: "#", text: "Item 1"},
        {link: "#", text: "Item 2"}
    ]

    items.forEach((item, i) => {
        const a = tag({
            type: "a",
            attr: {href: item.link},
            classes: ["nav-item", "nav-link"]
        })
        if (i == 0) a.classList.add("active")
        a.innerHTML = item.text

        navDiv.appendChild(a)
    })

    result.appendChild(div)
    return result
}