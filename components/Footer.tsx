import Link from "next/link";

const Footer = () => {
  return (
    <div className="footer">
      <p>&copy; 2024 EDU-TECH. All Rights Reserved</p>
      <div className="footer__links">
        {["About", "Contact", "Terms", "Privacy"].map((link, index) => (
          <Link
            key={index}
            href={`/${link}.toLowerCase().replace(" ", "-")`}
            className="footer__link"
          >
            {link}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Footer;
