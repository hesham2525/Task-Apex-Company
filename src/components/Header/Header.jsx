import { IoIosArrowDown } from "react-icons/io";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { BsSnapchat } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import Option from "../option";
import Option2 from "../option2";
import Option3 from "../option3";
import './header.css'
export default function Header() {
  return (
   
    <div className="sectionHeaderAndVideo">
    <div className="header">
      <div className="transtationAndIcons">
        <div className="translation">
          <div>
            <IoIosArrowDown />
          </div>
          <a className="ar" >
            AR
          </a>
          <div>
            <TbWorld />
          </div>
        </div>
        <div className="icons">
          <div className="iconStyle">
            <BsSnapchat />
          </div>
          <div className="iconStyle">
            <FaTiktok />
          </div>
          <div className="iconStyle">
            <FaInstagram />
          </div>
          <div className="iconStyle">
            <FaXTwitter />
          </div>
        </div>
      </div>
      <div>
        <hr className="hr" />
      </div>
      <div>
        <Navbar expand="lg" className="mt-4">
          <Container fluid>
            <Navbar.Toggle aria-controls="offcanvasNavbar-expand-lg" />
            <Navbar.Offcanvas>
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id="offcanvasNavbarLabel-expand-lg">
                  <img
                    src="../../../public/logojpg-removebg-preview.png"
                    width="50px"
                    alt=""
                  />
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body dir="ltr" className="offcanvas-body">
                <Nav className="mainHeader">
                  <div className="register-button">
                    <button className="btn1">
                      التسجيل <CgProfile />
                    </button>
                  </div>
                  <div className="links-container d-flex gap-4">
                    <p className="links" href="#action1">
                      ألبوم الصور
                    </p>
                    <p className="links" href="#action2">
                      المدونة
                    </p>
                    <p className="links" href="#action3">
                      الوجهات السياحية
                    </p>
                    <p className="links" href="#action4">
                      عن الشركة
                    </p>
                    <p className="links" href="#services">
                      خدماتنا
                    </p>
                    <p className="linksActive" href="#action6">
                      الرئيسية
                    </p>
                  </div>
                  <div className="logo-section">
                    <img
                      className="logoImage"
                      src="/public/logojpg-removebg-preview.png"
                      width="70px"
                      alt="logo"
                    />
                  </div>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      </div>
    </div>

    <div className="videoDiv">
      <video className="video" autoPlay muted loop id="myVideo">
        <source
          src="/public/19710b3ea282c4e3ea35e6beea995d8e.mp4"
          type="video/mp4"
        />
      </video>
    </div>

    <div className="textVedio">
      <p className="paragraph1">اجعل رحلتك اكثر تحديدا </p>
      <br />
      <h3 className="paragraph2">
        استكشف العديد من الرحلات و الخدمات الرائعة
      </h3>
      <button className="btn2">
        <FaLongArrowAltLeft /> احجز الان
      </button>
    </div>

    <div className="textVedio2">
      <p className="paragraph11">اجعل رحلتك اكثر تحديدا </p>

      <h3 className="paragraph22">
        استكشف العديد من الرحلات و الخدمات الرائعة
      </h3>
      <button className="btn2">
        <FaLongArrowAltLeft /> احجز الان
      </button>
    </div>
    <div className="regester">
      <button className="btn3">
        <FaLongArrowAltLeft /> البحث
      </button>
      <Option3 label=" السعر" option="  50 ج.م" />
      <Option2
        label=" الوجهات"
        option=" اختر الواجهة"
        option1="مسقط"
        option2="صلالة"
        option3="بوشر"
      />
      <Option
        label=" نوع الرحلة"
        option=" اختر نوع الرحلة"
        option1="رحلة متعددة الايام "
        option2="رحلة يوم واحد "
      />
    </div>
  </div>
  )
}
