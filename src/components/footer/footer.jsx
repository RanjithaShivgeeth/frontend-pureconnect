import "../footer/footer.scss";
import twitterIcon from "../../assets/Icons/Icon-twitter.svg";
import facebookIcon from "../../assets/Icons/Icon-facebook.svg";
import instagramIcon from "../../assets/Icons/Icon-instagram.svg";
import comment from "../../assets/Icons/add_comment.svg";

function Footer() {
  return (
    <div className="footer">
      <div class="footer__section">
        <div class="footer__section4">
          <p className="heading">Track Your Order</p>
          <form className="form" action="">
            <div className="form__section">
              <div className="form__section2">
                <textarea
                  className="form__section2--comment"
                  name="comment"
                  placeholder="Enter your order no"
                ></textarea>

                <div className="form__section3">
                  <button className="form__section3--btn">Submit</button>
                  <img
                    className="form__section3--icon"
                    src={comment}
                    alt="comment-icon"
                  />
                </div>
              </div>
            </div>
          </form>
          <div class="footer__headingicon">
            <h2 class="footer__header">Follow Us</h2>
            <div class="footer__logo">
              <img
                src={twitterIcon}
                alt="twitter icon"
                className="warehouse__twittericon"
              />
              <img
                src={facebookIcon}
                alt="facebook icon"
                className="warehouse__facebookicon"
              />
              <img
                src={instagramIcon}
                alt="instagram icon"
                className="warehouse__instagramicon"
              />
            </div>
          </div>
          <div class="footer__section1">
            <h3>Top Categories </h3>
            <p>Whole Grain</p>
            <p>Vegetables</p>
            <p>Seeds</p>
            <p>Plants</p>
            <p>Timber</p>
            <p>Fruits</p>
          </div>
          <div class="footer__section2">
            <h3>Pure Connect</h3>
            <p>About PURECONNECT</p>
            <p>Find Us</p>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
          </div>
          <div class="footer__section3">
            <h3>Customer Service</h3>
            <p>Help & FAQs</p>
            <p>Contact Us</p>
            <p>Shipping & Delivery</p>
            <p>Return & Refunds</p>
          </div>
        </div>
      </div>
      <p className="footer-copyright">
        © PureConnect Inc. All Rights Reserved.
      </p>
    </div>
  );
}

export default Footer;
