import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import Styles from "./footer.module.scss";

interface FooterProps {
  allCategories: any;
}

const Footer: React.FC<FooterProps> = ({ allCategories }) => {
  let router = useRouter();
  const handleTopUpdates = () => {
    document
      .querySelector(".article")
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
  };

  return (
    <div className={`mt-5 ${Styles.container}`}>
      <div className={Styles.footerBackground}>
        <div className={Styles.footerContainer}>
          <div className={Styles.FooterLogo}>
            <Link href="/">
              <Image
                src="/image/logo.png"
                className=""
                alt="Logo"
                width={180}
                height={80}
              />
            </Link>
            <Link href={`/`} onClick={() => handleTopUpdates()}>
              <p className="m-0">Top Updates</p>
            </Link>
          </div>
          <div className={Styles.footerSection}>
            <div className="dropdown">
              <button
                className={`btn btn-secondary dropdown-toggle ${Styles.dropdownStyles}`}
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Categories
              </button>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton1"
              >
                {allCategories?.map((category: any, index: number) => {
                  return (
                    <li className={Styles.dropdownList} key={index}>
                      <Link
                        className={`dropdown-item ${Styles.dropdownAttribute}`}
                        href={
                          router.pathname.includes("category")
                            ? `${category.attributes.slug}`
                            : `category/${category.attributes.slug}`
                        }
                      >
                        {category?.attributes.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <Link href={`/about-us`}>
              <p className="m-0">About Us</p>
            </Link>
            <Link href={`/contact-us`}>
              <p className="m-0">Contact Us</p>
            </Link>
          </div>
          <div className={Styles.footerSection}>
            <Link href={`/privacy-policy`}>
              <p className="m-0">Privacy Policy</p>
            </Link>
            <Link href={`/`}>
              <p className="m-0">Terms {"&"} conditons</p>
            </Link>
            <Link href={`/disclaimer`}>
              <p className="m-0">Disclaimers</p>
            </Link>
          </div>
        </div>
      </div>
      <div className={`footer ${Styles.background}`}>
        <div className="container-fluid">
          <div className="row">
            <div className="col copyright">
              <p className="mb-2 mt-2 text-center">
                <small className="fw-bold">© 2022. All Rights Reserved.</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
