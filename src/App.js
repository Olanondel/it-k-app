import './App.css'
import Header from './Components/Header/Header'
import Navbar from './Components/Navbar/Navbar'
import Profile from './Components/Profile/Profile'

function App() {
  return (
    <div className="wrapper">
      <div className="app-wrapper">
        <Header />
        <Navbar />

        <main>
          <Profile />
        </main>
      </div>
    </div>
  )
}

export default App
