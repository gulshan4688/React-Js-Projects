import UseLocalStorage from "./UseLocalStorage"
import './styles.css'

export default function LightDarkTheme() {

    const [theme, setTheme] = UseLocalStorage('theme', 'dark');
    function hanldeToggleTheme() {
        setTheme(theme === 'light' ? 'dark' : 'light');
    }

    return (
        <div className="light-dark-theme" data-theme={theme} >
            <div className="container" >
                <h1> {theme} - theme </h1>
                <button onClick={hanldeToggleTheme} > Dark Mode </button>
            </div>
        </div>
    )
}