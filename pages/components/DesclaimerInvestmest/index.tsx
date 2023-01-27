import Link from "next/link";
import React from "react";
import Style from "./DesclaimerInvestmest.module.scss";

const DesclaimerInvestmest = () => {
  return (
    <>
      <div className={Style.container}>
        <h1>Disclaimer for street of investment</h1>
        <div className={Style.desclaimerInvestment}>
          <div className={Style.desclaimerDetails}>
            <p className={Style.desclaimerContent}>
              {
                "If you require any more information or have any questions about our site's disclaimer, please feel free to contact us by email at streetofinvestment@gmail.com. Our Disclaimer was generated with the help of the "
              }
              <Link className={Style.desclaimerGenerator} href="">
                {"Free Disclaimer Generator."}
              </Link>
            </p>
            <h5>Disclaimers for streetofinvestment.com</h5>
            <p className={Style.desclaimerContent}>
              {"All the information on this website - "}
              <Link
                className={Style.desclaimerGenerator}
                href="https://streetofinvestment.com/"
              >
                https://streetofinvestment.com/
              </Link>
              {
                " - is published in good faith and for general information purposes only. streetofinvestment.com does not make any warranties about the completeness, reliability and accuracy of this information. Any action you take upon the information you find on this website (streetofinvestment.com), is strictly at your own risk. streetofinvestment.com will not be liable for any losses and/or damages in connection with the use of our website."
              }
            </p>
            <p className={Style.desclaimerContent}>
              {
                "From our website, you can visit other websites by following hyperlinks to such external sites. While we strive to provide only quality links to useful and ethical websites, we have no control over the content and nature of these sites. These links to other websites do not imply a recommendation for all the content found on these sites. Site owners and content may change without notice and may occur before we have the opportunity to remove a link which may have gone 'bad'."
              }
            </p>
            <p className={Style.desclaimerContent}>
              {`Please be also aware that when you leave our website, other sites may have different privacy policies and terms which are beyond our control. Please be sure to check the Privacy Policies of these sites as well as their "Terms of Service" before engaging in any business or uploading any information.`}
            </p>
            <h5>Consent</h5>
            <p className={Style.desclaimerContent}>
              {
                "By using our website, you hereby consent to our disclaimer and agree to its terms."
              }
            </p>
            <h5>Update</h5>
            <p className={Style.desclaimerContent}>
              {
                "Should we update, amend or make any changes to this document, those changes will be prominently posted here."
              }
            </p>
            <h3>Contact:</h3>
            <p>
              {
                "If you have any questions regarding this Disclosure or any policy mentions on-site, then feel free to contact us."
              }
            </p>
            <p>{"Regards:- streetofinvestment.com"}</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default DesclaimerInvestmest;
