import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authAction";
import { useHistory } from "react-router-dom";

import TextFieldGroup from "../common/TextFieldGroup";

const Register = (props) => {
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
    const newUser = {
      username: username,
      password: password,
    };
    props.registerUser(newUser);
  };

  return (
    <form
      onSubmit={(event) => onSubmit(event)}
      className="login100-form validate-form"
      style={{ display: "flex", alignItems: "center", flexDirection: "column", width: "80%" }}
    >
      <div
        style={{ marginTop: 10, width: "80%" }}
        data-validate="Insira um username válido"

      >
        <span className="label-input100">Nome de usuário</span>
        <TextFieldGroup
          placeholder="Username"
          name="username"
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
      }} className="login100-form-btn">Registrar</button>
    </form>
  );
};

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { registerUser })(Register);
