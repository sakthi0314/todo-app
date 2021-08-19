import React from "react";
import vector from "../../assets/undraw_Mobile_login_re_9ntv.svg";
import { GoogleLogin } from "react-google-login";
import { useDispatch, useSelector } from "react-redux";
import { authToken, loginAction } from "../../store/actions/authAction";
import { Redirect, useHistory } from "react-router-dom";
import { useEffect } from "react";
import "./auth.scss";

function Login() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { auth } = useSelector((state) => state.authReducer);

  const googleResponse = (response) => {
    try {
      const { profileObj, tokenId } = response;

      dispatch(loginAction({ tokenId, profileObj }));
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  const googleFailure = (error) => {
    console.error(error.message);
  };

  useEffect(() => {
    dispatch(authToken());
    // eslint-disable-next-line
  }, []);

  // Route Guade
  if (auth) return <Redirect to="/" />;

  return (
    <div className="login">
      <div className="container">
        <div className="login__wrapper">
          <div className="login__content">
            <form className="form">
              <h1>Hello, Welcome</h1>

              <div className="form__google">
                <GoogleLogin
                  clientId={process.env.REACT_APP_CLIENT_ID}
                  onSuccess={googleResponse}
                  onFailure={googleFailure}
                  render={(props) => (
                    <button
                      className="secondary"
                      onClick={props.onClick}
                      disabled={props.disabled}
                    >
                      <span>
                        <box-icon
                          color="hsl(244, 100%, 66%)"
                          type="logo"
                          name="google"
                          size="lg"
                        ></box-icon>
                      </span>
                      <span>Login with google</span>
                    </button>
                  )}
                />
              </div>
            </form>
          </div>
          <div className="login__image">
            <div className="img">
              <img src={vector} alt="vector" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
