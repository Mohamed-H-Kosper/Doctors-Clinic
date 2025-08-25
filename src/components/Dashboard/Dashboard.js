import { Link, Outlet, useNavigate, useParams } from "react-router-dom";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { FaHeart, FaUserCircle } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { useEffect, useState } from "react";
import './Dashboard.css';
function Dashboard() {
      const [isLoggedout, setIsLoggedout] = useState(false);
      const navigate = useNavigate();
      const userId = useParams();
  const handleLogout = () => {
    localStorage.clear();
    setIsLoggedout(true); // تحديث الحالة بدل ما تعمل refresh
  };
  useEffect(() => {
    if (isLoggedout) {
        navigate("/"); // رجوع للصفحة الرئيسية بعد تسجيل الخروج
        window.location.reload();
    }
  }, [navigate , isLoggedout]);
      const userID= localStorage.getItem("userId");

  return (
     <div className="d-flex mt-5 pt-5" style={{ minHeight: "95vh"}}>
      {/* زرار القائمة (صغير ومثبت) */}
      <button
        type="button"
        className="btn text-white position-fixed m-3 d-lg-none w-auto"
        data-bs-toggle="offcanvas"
        data-bs-target="#dashboardMenu"
        aria-controls="dashboardMenu"
        aria-label="Open menu"
        style={{ backgroundColor:'#565acf' }}
      >
        ☰
      </button>

      {/* Offcanvas من الشمال (يظهر على الموبايل/الشاشات الصغيرة) */}
      <div
        className="offcanvas offcanvas-start "
        id="dashboardMenu"
        aria-labelledby="dashboardMenuLabel"
        style={{ '--bs-offcanvas-width': '80px' , marginTop:'95px' , backgroundColor:'#565acf' }}
      >
        <div className="offcanvas-header">
          <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas"></button>
        </div>
        <div className="offcanvas-body position-relative">
          <ul className="list-unstyled fs-5 fw-semibold mb-0">
            <li className="my-3 mb-5">
              <Link to={`profile/${userID}`}  className="text-decoration-none" data-bs-dismiss="offcanvas">
      <FaUserCircle className="icons-dashboard " size={40} />
              </Link>
            </li>
            <li className="my-4">
              <Link to="favorite" className="text-decoration-none" data-bs-dismiss="offcanvas">
                  <FaHeart size={40} className="icons-dashboard" />
              </Link>
            </li>
                <li className="my-4">
                <button className="text-danger position-absolute bottom-0 mb-4" style={{left:'15px'}}><FiLogOut size={40} /></button>
            </li>
          </ul>
        </div>
      </div>

      {/* Sidebar ثابت على الشاشات الكبيرة */}
      <aside className="d-none d-lg-block  text-white position-relative" style={{ width: 100 ,backgroundColor:'#565acf' }}>
        <ul className="list-unstyled fs-5 fw-semibold p-4 mb-0">
          <li className="my-3">
            <Link to={`profile/${userID}`} className="text-decoration-none text-white"> <FaUserCircle size={40} className="icons-dashboard" /></Link>
          </li>
          <li className="mt-5">
            <Link to="favorite" className="text-decoration-none text-white"><FaHeart size={40} className="icons-dashboard" /></Link>
          </li>
                <li className="my-4">
                <button onClick={handleLogout} className="text-danger position-absolute bottom-0 mb-4" style={{left:'25px'}}><FiLogOut size={40} /></button>
            </li>
        </ul>
      </aside>
      {/* المساحة اليمين للمحتوى */}
      <main className="flex-grow-1 bg-secondary p-4">
        <Outlet />
      </main>
    </div>
  );
}

export default Dashboard;
