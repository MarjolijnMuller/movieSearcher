
import './App.css'
import Menu from "./components/Menu.jsx";
import SignInPage from "./SignInPage.jsx";

function App() {
    return (
        <>
            <Menu/>
            <h1>main</h1>
            <a href={SignInPage()}>Aanmelden</a>
            </>
    )
}

export default App
