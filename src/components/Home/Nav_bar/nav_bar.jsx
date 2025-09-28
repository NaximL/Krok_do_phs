import { useEffect, useState } from "react";
import Menu_el from "./components/menu_element";



const Navbar = () => {

    const [seleMenu, setSeleMenu] = useState({})
    useEffect(() => {
        fw(0)
    }, [])
    const [Menu, setMenu] = useState([
        {
            "name": "Початок",
        },
        {
            "name": "Проблеми"
        },
        {
            "name": "Картки"
        },

    ])

    function zoom(id) {
        let g = document.getElementById(`b${id}`)
        g.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    function fw(fw) {
        setSeleMenu(setMenu[fw]);
        zoom(fw + 1)

    }
    return (
        <nav className="nav_bar">
            <div>
                {Menu.map((data, index) => (
                    <Menu_el ine={index} fun={fw} did={data} key={index} />
                ))}
            </div>
        </nav>
    );
}

export default Navbar;








