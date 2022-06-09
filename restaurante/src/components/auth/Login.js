import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authAction";
import { useHistory } from "react-router-dom";

import TextFieldGroup from "../common/TextFieldGroup";

const Login = (props) => {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (props.auth.isAuthenticated) {
      history.push("/dashboard");
    }
  });

  useEffect(() => {
    if (props.auth.isAuthenticated) {
      history.push("/dashboard");
    }
  }, [props.auth.isAuthenticated]);

  const onSubmit = (e) => {
    e.preventDefault();
    const userData = {
      username: username,
      password: password,
    };
    props.loginUser(userData);
  };

  return (
    <form
      onSubmit={(event) => onSubmit(event)}
      className="login100-form validate-form"
      style={{ display: "flex", alignItems: "center", flexDirection: "column" }}
    >
      <div
        style={{ marginTop: 10, width: "80%" }}
        data-validate="Insira um username válido"
      >
        <span className="label-input100">Nome de usuário</span>
        <TextFieldGroup
          placeholder="Username"
          name="Username"
          type="username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
      </div>
      <div
        style={{ marginTop: 10, width: "80%" }}
        data-validate="Senha é Necessária"
      >
        <span className="label-input100">Senha</span>
        <TextFieldGroup
          placeholder="***"
          name="password"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>

      <button style={{
        backgroundColor: "#C30045",
        color: "white",
        border: 0,
        width: "50%",
        borderRadius: 5,
        marginTop: 30,
        height: 30,
        fontWeight: "bold"
      }} >Entrar</button>
    </form>
  );
};

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { loginUser })(Login);
