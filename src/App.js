// Styles
import Cart from './Components/Cart'
import Nav from './Components/Nav'
import HomeScreen from './screens/HomeScreen'
import './Styles/App.css'
// Context API
// Components

function App() {
    return (
        <div className='container'>
            <Nav />
            <Cart />
            <HomeScreen />
        </div>
    )
}

export default App
