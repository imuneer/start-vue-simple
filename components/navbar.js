//import { NavbarTemplate } from '../templates/navbar-template.js'

var NavbarTemplate = `<nav>

<div>
<span v-for="item in items">
<a :href="item.href">{{item.title}}</a> | </span>
</div>

</nav>`

const Navbar = {
    data: function () {
        return {items: [
            {title: "Home", href: "#"},
            {title: "About", href: "#"},
            {title: "Help", href: "#"},
        ]};
    },

    template: NavbarTemplate,
}

export default Navbar 