const LoginForm = (props) => {
    return (
        <>
            <input onChange={(e) => { props.setemail(e.target.value) }} type="email" placeholder="Deine Emailadresse" />
            <input onChange={(e) => { props.setpass(e.target.value) }} type="password" placeholder="Dein Passwort" />
            <button onClick={props.login}>Anmelden</button>
        </>
    )
}
export default LoginForm