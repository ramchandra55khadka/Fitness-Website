import Logo from "@/assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} />
          <p className="my-5">
            Building a healthier, stronger you every day. Join the journey to fitness and wellness with our expert guidance and world-class facilities.
          </p>
          <p>© Evogym All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <br/>
          <div className="flex gap-4">
            {/* Facebook */}
            <a href="http://facebook.com/" target="_blank" rel="noreferrer">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
                alt="Facebook logo"
                style={{ width: "24px", height: "24px" }}
              />
            </a>
            <br/>
            {/* Twitter (X) */}
            <a href="http://twitter.com/" target="_blank" rel="noreferrer">
              <img
                src="https://cdn.mos.cms.futurecdn.net/Fsgb8v6Qw8aKEbfpp9YGV5-650-80.jpg.webp"
                alt="Twitter (X) logo"
                style={{ width: "24px", height: "24px" }}
              />
            </a>
            <br/>
            {/* Instagram */}
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                alt="Instagram logo"
                style={{ width: "24px", height: "24px" }}
              />
            </a>
          </div>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">Patandhoka Lalitpur Nepal.</p>
          <p>+977 9866835892</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
