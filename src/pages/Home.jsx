import {Nav} from "./components/Nav.jsx";

import {useState} from "react";
import {AuthModal} from "./components/AuthModal.jsx";

export const Home = () => {

    const [showModal, setShowModal] = useState(false);

    const authToken = false;

    const handleClick = () => {
        setShowModal(true);
    }

    return (
        <div className="overlay">
            <Nav minimal={false}  setShowModal={true}> </Nav>
            <div className="home">
                <h1 className="primary-title">Swipe Right®</h1>
                <button className="primary-button" onClick={handleClick}>
                    {authToken ? 'Signout' : 'Create Account'}
                </button>

                {showModal && (
                    // Lo sorprendente es que basicamente el hijo toma la referencia delemetoddo asi que el hijo si realiza algo afecta al padre
                    <AuthModal setShowModal={setShowModal} />
                )}
            </div>
        </div>
    )
}
