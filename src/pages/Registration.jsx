import { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../utils/useAuth";


const Registration = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { createUser, user } = useAuth();
    console.log(user);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await createUser(email, password);
        }
        catch (err) {
            console.log(err)
        }
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit} className="card-body">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" required
                                onBlur={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password"
                                name="password"
                                className="input input-bordered" required
                                onBlur={(e) => setPassword(e.target.value)} />

                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-primary">Register</button>
                        </div>
                        <div>
                            <p className="text-xl font-semibold">Have already an account <Link className="text-blue-600 font-bold" to={'/login'}>Login</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Registration;