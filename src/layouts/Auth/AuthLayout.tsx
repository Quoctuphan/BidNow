import { useLocation } from "react-router-dom";
import LoginForm from "./Login";
import Register from "./Register";

function AuthLayout() {
    const location = useLocation();
    const currentUrl = location.pathname;

    return (
        <div className="bg-white">
            {currentUrl != '/login' ? <div className="w-full md:w-1/2 mx-auto">
                <LoginForm />
            </div> : <div className="w-full md:w-1/2 mx-auto"><Register /> </div>}

        </div>
    )
}

export default AuthLayout;