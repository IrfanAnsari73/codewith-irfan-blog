import './App.css'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Footer } from './components/footer/Footer.jsx';
import { Dashboard } from './components/dashboard/Dashboard.jsx';
import { Headermy } from './components/header/Headermy.jsx';
import { About } from './components/about/About.jsx';
import { Contact } from './components/contact/Contact.jsx';
import { Pagenotfound } from './components/pagenotfound/Pagenotfound.jsx';

function App() {
    return (
        <>
            <BrowserRouter>
                <Headermy />
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="about-us" element={<About />} />
                    <Route path="contact-us" element={<Contact />} />
                    <Route path="*" element={<Pagenotfound />} />

                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    )
}

export default App
