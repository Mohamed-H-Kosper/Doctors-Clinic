import { useEffect, useState } from "react";
import "./Dashboard.css";
import { useParams } from "react-router-dom";
import { FaSpinner } from "react-icons/fa";
function Profile() {
  const [profile, setProfile] = useState([]);
  const [loading , setLoading] = useState(true)
  const { userId } = useParams();
  useEffect(() => {
    fetch(`http://localhost:5000/users/${userId}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        setProfile(data);
        setLoading(false);
        console.log("all data in profile", data.id);
      });
  },[userId]);

  return (
    <div className="container">
      <div className="profile d-flex justify-content-center align-items-center pt-5">
          {loading ? <span className="load"> Loading... <FaSpinner size={50}  className="spinner"/> </span> : 

        <table className="table table-hover " style={{ minHeight: "280px" }}>
          <thead>
            <tr>
              <th
                colSpan="4"
                className="fs-4 my-5"
                style={{ color: "#565acf" }}
              >
                Profile Data
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row" colSpan={1} className="fw-bold fs-5">
                ID
              </th>
              <td colSpan={3} className="fw-bold fs-5 text-table">
                {profile.id}
              </td>
            </tr>
            <tr>
              <th scope="row" colSpan={1} className="fw-bold fs-5">
                UserName
              </th>
              <td colSpan={3} className="fw-bold fs-5 text-table">
                {profile.userName}
              </td>
            </tr>
            <tr>
              <th scope="row" colSpan={1} className="fw-bold fs-5">
                Email
              </th>
              <td colSpan={3} className="fw-bold fs-5 text-table">
                {profile.email}
              </td>
            </tr>
          </tbody>
        </table>
          }
      </div>
    </div>
  );
}
export default Profile;
