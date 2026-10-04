export default function ProtectedRoute({ isAuth, children }) {

    if (!isAuth) {
        return <Login />;
    }

    return children;
}