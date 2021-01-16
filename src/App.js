import './App.css'
import Header from './Components/Header/Header'
import Navbar from './Components/Navbar/Navbar'
import Profile from './Components/Profile/Profile'
import DialogItems from './Components/Dialogs/DialogItems';
import {Route, BrowserRouter} from 'react-router-dom';


function App() {
    return (
        <BrowserRouter>
            <div className="wrapper">
                <div className="app-wrapper">
                    <Header/>
                    <Navbar/>

                    <main>
                        <Route path='/dialogs' component={DialogItems} />
                        <Route path='/profile' component={Profile} />
                    </main>

                </div>
            </div>
        </BrowserRouter>
    )
}

export default App
