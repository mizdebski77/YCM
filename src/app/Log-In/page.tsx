
export default function LogIn() {
    return (
        <div className="  min-h-screen grid grid-cols-2">
            <div className="hero-content flex-col lg:flex-row-reverse  min-h-screen w-full">
                <form className="card-body max-w-2xl shadow">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
            </div>
            <div className="hero-content flex-col lg:flex-row-reverse bg-green min-h-screen w-full">

            </div>
        </div>
    )
}

