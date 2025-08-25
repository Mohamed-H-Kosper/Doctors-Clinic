import { useState } from "react";
import "./Auth.css";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({email, password }),
      });
      

      const data = await res.json(); //  لازم await عشان يحول من promise ل object اقدر اعرضه
      
      if (res.ok && data.accessToken) {
        // تخزين التوكن
        localStorage.setItem("token", data.accessToken);
        localStorage.setItem("userId", data.user.id);
        Swal.fire({
          title: "Success",
          text: "successfully logged in.",
          icon: "success",
          confirmButtonText: "OK",
          timer: "600",
        }).then(() => {
          navigate("/");
          window.location.reload();
        });
        console.log("تم تسجيل الدخول بنجاح");
        console.log("Token:", data.accessToken);
      } else {
        console.log(" فشل تسجيل الدخول", data.message || "");
        Swal.fire({
          title: "Error",
          text: "Login failed.Please check your data.",
          icon: "error",
          confirmButtonText: "Ok",
        });
      }
    } catch (err) {
      console.error("خطأ في تسجيل الدخول:", err);
    }
  };

  return (
    <div className="all-sign">
      <div className="container  d-flex justify-content-center align-items-center flex-column">
        <h1 className="my-3 sign-title">Login</h1>
        <form
          onSubmit={handleLogin}
          className="row my-3  rounded-5 border-light contain-sign"
        >
          <div className=" row mt-5  d-flex justify-content-center align-items-center ">
            <label
              forhtml="Email"
              className="col-sm-2  col-form-label text-start sign-email"
            >
              Email
            </label>
            <div className="col-sm-8 ">
              <input
                type="text"
                className="form-control fw-bold"
                id="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className=" row mb-4  d-flex justify-content-center align-items-center">
            <label
              forhtml="Password"
              className="col-sm-2 col-form-label text-start sign-password"
            >
              Password
            </label>
            <div className="col-sm-8 ">
              <input
                type="password"
                className="form-control fw-bold"
                id="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button className="btn btn-primary w-25  mt-3  sign-password ">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
