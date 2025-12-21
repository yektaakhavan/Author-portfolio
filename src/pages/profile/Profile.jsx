import React from "react";
import { Container } from "react-bootstrap";
import Footer from "../../comonents/footer/Footer";
import MyNavbar from "../../comonents/navbar/Navbar";
import "./Profile.css";
function Profile() {
  return (
    <div>
      <MyNavbar />
      <div className="body">
        <div className="main">
          <input type="checkbox" id="chk" aria-hidden="true" />

          <div className="signup">
            <form>
              <label htmlFor="chk" aria-hidden="true">
                ثبت نام
              </label>
              <input type="text" name="txt" placeholder="نام کاربری" required />
              <input type="email" name="email" placeholder="ایمیل" required />
              <input type="password" name="pswd" placeholder="رمز" required />
              <button type="submit">ثبت نام</button>
            </form>
          </div>

          <div className="login">
            <form>
              <label htmlFor="chk" aria-hidden="true">
                ورود
              </label>
              <input type="email" name="email" placeholder="ایمیل" required />
              <input type="password" name="pswd" placeholder="رمز" required />
              <button type="submit">ورود</button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Profile;
