import { Form, Link, useNavigate } from "react-router-dom";
import "./Auth.css";
import { useState } from "react";
import Swal from "sweetalert2";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");

  const navigate = useNavigate();
  const handleSignup = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:5000/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({userName ,email, password }),
    });
    const data = await res.json();
    if (data.accessToken) {
      localStorage.setItem("token", data.accessToken);
      console.log("تم تسجيل الحساب بنجاح");
      console.log("data.token register", data.accessToken);
      Swal.fire({
        title: "Success",
        text: "Account registered successfully",
        icon: "success",
        confirmButtonText: "OK",
      }).then(() => {
        navigate("/signup/login");
      });
    } else {
      console.log("فشل تسجيل الحساب ");
      Swal.fire({
        title: "Error",
        text: "Account registration failed. User data from another person.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  const handleReset = async () => {
    if (!window.confirm("هل أنت متأكد من مسح كل الحسابات؟")) return;

    // مسح db.json users (POST على /users مباشرة)
    // ملاحظة: json-server لا يسمح DELETE على collection مباشرة إلا باستخدام fetch
    await fetch("http://localhost:5000/users", {
      method: "DELETE",
    }).catch(() => {}); // تجاهل أي خطأ

    localStorage.removeItem("token");
    alert("✅ All users deleted and token cleared!");
    window.location.reload();
  };
  return (
    <div className="all-sign">
      <div className="container  d-flex justify-content-center align-items-center flex-column">
        <h1 className="my-3 sign-title">Sign Up</h1>
        <form
          onSubmit={handleSignup}
          className="row my-3  rounded-5 border-light contain-sign"
        >
                  <div className=" row mt-5  d-flex justify-content-center align-items-center ">
            <label
              forhtml="userName"
              className="col-sm-2  col-form-label text-start sign-email"
            >
              UserName
            </label>
            <div className="col-sm-8 ">
              <input
                type="text"
                className="form-control fw-bold"
                id="userName"
                value={userName}
                onChange={(e) =>setUserName(e.target.value)}
              />
            </div>
          </div>
          <div className=" row  d-flex justify-content-center align-items-center ">
            <label
              htmlFor="Email"
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
              htmlFor="Password"
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
            <button className="btn btn-primary w-25 mt-3  sign-password ">
              Submit
            </button>
          </div>
          <Link to="login" className=" text-end pe-4 text-login ">
            {" "}
            Login Now!
          </Link>
          <button
            onClick={handleReset}
            className="w-25 fw-bold"
            style={{ background: "red", color: "#fff" }}
          >
            Delete json
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
