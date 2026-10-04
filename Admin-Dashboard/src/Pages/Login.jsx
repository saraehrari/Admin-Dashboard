

export default function Login() {
   
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/dashboard");
    };

    return (
        <div className="container-fluid py-4">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
    <input type="text" placeholder="Email" className="form-control mb-3" />
    <input type="password" placeholder="Password" className="form-control mb-3" />
    <button type="submit" className="btn btn-primary">
        Login
    </button>
    </form>





    </div>
)
}