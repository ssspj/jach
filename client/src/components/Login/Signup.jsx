import React from "react";
// import { useDispatch } from "react-redux";
// import { showAlert, hideAlert } from "../../redux/AlertSlice";
import { useNavigate } from "react-router-dom";
import "../../styles/Login/Login.css";
import { signupAPI } from "../../api/User/signupAPI";
import useInputValues from "../../hooks/useInput";

const Signup = () => {
  const { inputValues, handleChange, reset } = useInputValues({
    name: "",
    id: "",
    pw: "",
    passwordConfirmation: "",
  });

  const { name, id, pw, passwordConfirmation } = inputValues;
  // const dispatch = useDispatch();
  const navigate = useNavigate();

  // 이메일 형식인지 확인하여 메시지를 표시하는 함수
  const getEmailFormatMessage = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (id === "") {
      return ""; // 입력값이 없는 경우 메시지 표시 X
    } else if (!emailRegex.test(id)) {
      return (
        <span style={{ color: "red" }}>
          올바른 이메일 형식으로 입력해주시기 바랍니다.
        </span>
      );
    } else {
      return <span style={{ color: "green" }}>올바른 이메일 형식입니다.</span>;
    }
  };

  // 비밀번호 일치 여부를 실시간으로 확인하여 메시지를 표시하는 함수
  const getPasswordMatchMessage = () => {
    if (passwordConfirmation === "" || pw === "") {
      return ""; // 입력값이 없는 경우 메시지 표시 X
    } else if (pw === passwordConfirmation) {
      return (
        <span style={{ marginLeft: "5px", color: "green" }}>
          {" "}
          비밀번호가 일치합니다.
        </span>
      );
    } else {
      return (
        <span style={{ marginLeft: "5px", color: "red" }}>
          {" "}
          비밀번호가 일치하지 않습니다.
        </span>
      );
    }
  };
  const submitBtn = async (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name === "" || id === "" || pw === "") {
      alert("이름, 아이디, 비밀번호는 필수 입력입니다.");
      //dispatch(showAlert("이름, 아이디, 비밀번호는 필수 입력입니다."));
      return;
    } else if (!emailRegex.test(id)) {
      alert("이메일 형식으로 입력해주시기 바랍니다.");
      //dispatch(showAlert("이메일 형식으로 입력해주시기 바랍니다."));
      return;
    }

    try {
      await signupAPI(name, id, pw);
      alert("회원가입 성공");
      //dispatch(showAlert("회원가입 성공"));
      navigate("/");
    } catch (err) {
      alert("회원가입 실패");
      //dispatch(showAlert("회원가입 실패"));
      reset();
      return;
    }
  };

  return (
    <div className="login">
      <div className="login_main">
        <h2>회원가입</h2>
        <form className="login_form" onSubmit={submitBtn}>
          <div className="inputTag">
            <input
              type="text"
              id="input_name"
              name="name"
              value={name}
              onChange={handleChange}
            />
            <label htmlFor="input_name">
              이름 <span style={{ color: "#EF4565" }}>*</span>
            </label>
          </div>

          <div style={{ marginTop: "26px" }} />
          <div className="inputTag">
            <input
              type="text"
              id="input_id"
              name="id"
              value={id}
              onChange={handleChange}
            />
            <label htmlFor="input_id">
              이메일 <span style={{ color: "#EF4565" }}>*</span>
            </label>
          </div>
          {/* 비밀번호 일치 여부 메시지를 아래에 표시합니다. */}
          <div style={{ marginTop: "10px", fontSize: "0.8rem" }}>
            {getEmailFormatMessage()}
          </div>

          <div style={{ marginTop: "26px" }} />
          <div className="inputTag">
            <input
              type="password"
              id="input_pw"
              name="pw"
              value={pw}
              onChange={handleChange}
            />
            <label htmlFor="input_pw">
              비밀번호 <span style={{ color: "#EF4565" }}>*</span>
            </label>
          </div>

          <div style={{ marginTop: "26px" }} />
          <div className="inputTag">
            <input
              type="password"
              id="input_pw_confirm" // 비밀번호 확인 입력 필드에 id 추가
              name="passwordConfirmation" // 비밀번호 확인 입력 필드의 name 수정
              value={passwordConfirmation} // 비밀번호 확인 입력 필드의 value 수정
              onChange={handleChange}
            />
            <label htmlFor="input_pw_confirm">
              비밀번호 확인 <span style={{ color: "#EF4565" }}>*</span>
            </label>
          </div>
          <div style={{ marginTop: "10px", fontSize: "0.8rem" }}>
            {getPasswordMatchMessage()}
          </div>

          <div style={{ marginTop: "26px" }} />
          <button id="login_btn" type="submit">
            회원가입
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
