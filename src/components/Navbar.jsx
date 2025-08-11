import { navLinks } from "../../constants"

const Navbar = () => {
  return (
    <nav>
        <p>John <span>Doe</span></p>

        <ul>
            {navLinks.map((item, i) => (
                <li key={i}>
                    <a href={item.link}>{item.title}</a>
                </li>
            ))}
        </ul>
    </nav>
  )
}

export default Navbar