import React, { useEffect } from 'react';

import Footer from '../components/Footer/Footer';
import FooterData from '../components/Footer/FooterData';
import CustomNavbar from '../components/CustomNavbar';

const PrivacyPolicy = ({ children, location: { pathname } }) => {

  useEffect(() => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }, [pathname]);

  return (
    <div className="App">
      <CustomNavbar slogo="sticky_logo" mClass="menu_four" nClass="w_menu ml-auto mr-auto" q="team_url"/>
      <div className="h-100 container mt-5 pt-5">
        <div className="row">
          <div className="col-sm-10 mx-auto">
            <div className="bg-white p-4 my-5">
              <h2 className="text-left common-title mb-5">Privacy Policy</h2>
              <p className="text-justify">
                This privacy policy applies between you, the User of this Website and Enloya, the owner and provider of this Website. Enloya takes the privacy of your information very seriously. This privacy policy applies to our use of any and all Data collected by us or provided by you in relation to your use of the Website.
                <h6 className="mt-2">Please read this privacy policy carefully.</h6>
              </p>
              <h4 className="my-2 mt-5">Definitions and interpretation</h4>
              <p className="text-justify">
                1. In this privacy policy, the following definitions are used:
              </p>
              <h6 className="my-2">Data</h6>
              <p className="text-justify">
              collectively all information that you submit to Enloya via the Website. This definition incorporates, where applicable, the definitions provided in the Data Protection Laws;
              </p>
              <h6 className="my-2">Cookies</h6>
              <p className="text-justify">
                a small text file placed on your computer by this Website when you visit certain parts of the Website and/or when you use certain features of the Website. Details of the cookies used by this Website are set out in the clause below (Cookies);
              </p>
              <h6 className="my-2">Data Protection Laws</h6>
              <p className="text-justify">
                any applicable law relating to the processing of personal Data, including but not limited to the GDPR, and any applicable national laws, regulations and secondary legislation;
              </p>
              <h6 className="my-2">GDPR</h6>
              <p className="text-justify">
                the General Data Protection Regulation (EU) 2016/679;
              </p>
              <h6 className="my-2">Enloya, or us</h6>
              <p className="text-justify">
                Enloya, a project owned and managed by Manuel Sanchez Miranda, Rodolfo Rivas, Johanna Jacobsson, and Sergey Polovinkin;
              </p>
              <h6 className="my-2">EU Cookie Law</h6>
              <p className="text-justify">
                the EU Directive 2002/58/EC on privacy and electronic communications, as amended;
              </p>
              <h6 className="my-2">User or you</h6>
              <p className="text-justify">
                any third party that accesses the Website and is not either (i) employed by Enloya and acting in the course of their employment or (ii) engaged as a consultant or otherwise providing services to Enloya and accessing the Website in connection with the provision of such services; and
              </p>
              <h6 className="my-2">Enloya, or us</h6>
              <p className="text-justify">
                the General Data Protection Regulation (EU) 2016/679;
              </p>
              <h6 className="my-2">Website</h6>
              <p className="text-justify">
                the website that you are currently using, www.enloya.com, and any sub-domains of this site unless expressly excluded by their own terms and conditions.
              </p>
              <p className="text-justify">
                2. In this privacy policy, unless the context requires a different interpretation:
              </p>
              <div className="pl-4">
                  <p className="text-justify">A. the singular includes the plural and vice versa;</p>
                  <p className="text-justify">B. references to sub-clauses, clauses, schedules or appendices are to sub-clauses, clauses, schedules or appendices of this privacy policy;</p>
                  <p className="text-justify">C. a reference to a person includes firms, companies, government entities, trusts and partnerships;</p>
                  <p className="text-justify">D. “including” is understood to mean “including without limitation”;</p>
                  <p className="text-justify">E. reference to any statutory provision includes any modification or amendment of it;</p>
                  <p className="text-justify">F. the headings and sub-headings do not form part of this privacy policy.</p>
              </div>
              <h4 className="my-2 mt-5">Scope of this privacy policy</h4>
              <p className="text-justify">
                3. This privacy policy applies only to the actions of Enloya and Users with respect to this Website. It does not extend to any websites that can be accessed from this Website including, but not limited to, any links we may provide to social media websites.
              </p>
              <p className="text-justify">
                4. For purposes of the applicable Data Protection Laws, Enloya is the “data controller”. This means that Enloya determines the purposes for which, and the manner in which, your Data is processed.
              </p>
              <h4 className="my-2 mt-5">Data collected</h4>
              <p className="text-justify">
                5. We may collect the following Data, which includes personal Data, from you:
              </p>
              <div className="pl-4">
                  <p className="text-justify">A. name;</p>
                  <p className="text-justify">B. date of birth;</p>
                  <p className="text-justify">C. gender;</p>
                  <p className="text-justify">D. job and professional title;</p>
                  <p className="text-justify">E. profession;</p>
                  <p className="text-justify">F. contact information such as email, addresses and telephone numbers;</p>
                  <p className="text-justify">G. demographic information such as postcode, preferences and interests;</p>
                  <p className="text-justify">H. financial information such as credit / debit card numbers;</p>
                  <p className="text-justify">I. IP address (automatically collected);</p>
                  <p className="text-justify">J. web browser type and version (automatically collected);</p>
                  <p className="text-justify">K. operating system (automatically collected);</p>
                  <p className="text-justify">L. professional background</p>
                  <p className="text-justify">M. information on professional qualifications (lawyers)</p>
                  <p className="text-justify">N. information on legal fees</p>
                  <p className="text-justify">O. information on the nature of the User’s business</p>
                  <p className="text-justify">P. information on projects or job opportunities posted in the Website</p>
                  <p className="text-justify">Q. in each case, in accordance with this privacy policy.</p>
              </div>
              <h4 className="my-2 mt-5">How we collect Data</h4>
              <p className="text-justify">
                6. We collect Data in the following ways:
              </p>
              <div className="pl-4">
                  <p className="text-justify">A. data is given to us by you;</p>
                  <p className="text-justify">B. data is received from other sources; and</p>
                  <p className="text-justify">C. data is collected automatically.</p>
              </div>
              <h4 className="my-2 mt-5">Data that is given to us by you</h4>
              <p className="text-justify">
                7. Enloya will collect your Data in a number of ways, for example:
              </p>
              <div className="pl-4">
                  <p className="text-justify">A. when you contact us through the Website, by telephone, post, e-mail or through any other means;</p>
                  <p className="text-justify">B. when you register with us and set up an account to receive our products/services;</p>
                  <p className="text-justify">C. when you complete surveys that we use for research purposes (although you are not obliged to respond to them);</p>
                  <p className="text-justify">D. when you enter a competition or promotion through a social media channel;</p>
                  <p className="text-justify">E. when you make payments to us, through this Website or otherwise;</p>
                  <p className="text-justify">F. when you elect to receive marketing communications from us;</p>
                  <p className="text-justify">G. when you use our services;</p>
              </div>
              <p className="text-justify">in each case, in accordance with this privacy policy.</p>
              <h4 className="my-2 mt-5">Data that is received from publicly available third parties’ sources</h4>
              <p className="text-justify">
                8. We will receive Data about you from the following publicly available third-party sources:
              </p>
              <div className="pl-4">
                  <p className="text-justify">A. social media platforms such as LinkedIn, Facebook, Twitter, Instagram, and so on;</p>
                  <p className="text-justify">B. User’s publicly available website and other public sources</p>
              </div>
              <h4 className="my-2 mt-5">Data that is collected automatically</h4>
              <p className="text-justify">
                9. To the extent that you access the Website, we will collect your Data automatically, for example:
              </p>
              <div className="pl-4">
                  <p className="text-justify">A. we automatically collect some information about your visit to the Website. This information helps us to make improvements to Website content and navigation, and includes your IP address, the date, times and frequency with which you access the Website and the way you use and interact with its content.</p>
                  <p className="text-justify">B. we will collect your Data automatically via cookies, in line with the cookie settings on your browser. For more information about cookies, and how we use them on the Website, see the section below, headed “Cookies”</p>
              </div>
              <h4 className="my-2 mt-5">Our use of Data</h4>
              <p className="text-justify">
                10. Any or all of the above Data may be required by us from time to time in order to provide you with the best possible service and experience when using our Website. Specifically, Data may be used by us for the following reasons:
              </p>
              <div className="pl-4">
                  <p className="text-justify">A. internal record keeping;</p>
                  <p className="text-justify">B. improvement of our products / services;</p>
                  <p className="text-justify">C. transmission by email of marketing materials that may be of interest to you;</p>
                  <p className="text-justify">D. when you enter a competition or promotion through a social media channel;</p>
                  <p className="text-justify">E. contact for market research purposes which may be done using email, telephone, fax or mail. Such information may be used to customise or update the Website;</p>
                  <p className="text-justify">F. to verify professional qualifications with the relevant professional bodies;</p>
              </div>
              <p className="text-justify">in each case, in accordance with this privacy policy.</p>
              <p className="text-justify">11. We may use your Data for the above purposes if we deem it necessary to do so for our legitimate interests. If you are not satisfied with this, you have the right to object in certain circumstances (see the section headed “Your rights” below).</p>
              <p className="text-justify">12. For the delivery of direct marketing to you via e-mail, we’ll need your consent, whether via an opt-in or soft-opt-in:</p>
              <div className="pl-4">
                  <p className="text-justify">A. soft opt-in consent is a specific type of consent which applies when you have previously engaged with us (for example, you contact us to ask us for more details about a particular product/service, and we are marketing similar products/services). Under “soft opt-in” consent, we will take your consent as given unless you opt-out.</p>
                  <p className="text-justify">B. for other types of e-marketing, we are required to obtain your explicit consent; that is, you need to take positive and affirmative action when consenting by, for example, checking a tick box that we’ll provide.</p>
                  <p className="text-justify">C. if you are not satisfied about our approach to marketing, you have the right to withdraw consent at any time. To find out how to withdraw your consent, see the section headed “Your rights” below.</p>
             </div>
              <p className="text-justify">13. When you register with us and set up an account to receive our services, the legal basis for this processing is the performance of a contract between you and us and/or taking steps, at your request, to enter into such a contract.</p>
              <h4 className="my-2 mt-5">Who we share Data with</h4>
              <p className="text-justify">
                14. We may share your Data with the following groups of people for the following reasons:
              </p>
              <div className="pl-4">
                  <p className="text-justify">A. our employees, agents and/or professional advisors, to improve the quality of the service and to obtain advice from professional advisors;</p>
                  <p className="text-justify">B. third party payment providers who process payments made over the Website – to enable third party payment providers to process user payments and refunds;</p>
                  <p className="text-justify">C. relevant professional bodies and authorities – to verify professional qualifications, to facilitate the detection of crime or the collection of taxes or duties when required by public authorities;</p>
                  <p className="text-justify">D. and others required by law;</p>
              </div>
              <p className="text-justify">in each case, in accordance with this privacy policy.</p>
              <h4 className="my-2 mt-5">Keeping Data secure</h4>
              <p className="text-justify">
                15. We will use technical and organisational measures to safeguard your Data, for example:
              </p>
              <div className="pl-4">
                  <p className="text-justify">A. access to your account is controlled by a password and a user name that is unique to you.</p>
                  <p className="text-justify">B. we store your Data on secure servers.</p>
                  <p className="text-justify">C. payment details are encrypted using SSL technology (typically you will see a lock icon or green address bar (or both) in your browser when we use this technology).</p>
              </div>
              <p className="text-justify">16. Technical and organisational measures include measures to deal with any suspected data breach. If you suspect any misuse or loss or unauthorised access to your Data, please let us know immediately by contacting us via this e-mail address: info@enloya.com.</p>

              <h4 className="my-2 mt-5">Data retention</h4>
              <p className="text-justify">
                17. Unless a longer retention period is required or permitted by law, we will only hold your Data on our systems for the period necessary to fulfil the purposes outlined in this privacy policy or until you request that the Data be deleted.
              </p>
              <p className="text-justify">
                18. Even if we delete your Data, it may persist on backup or archival media for legal, tax or regulatory purposes.
              </p>

              <h4 className="my-2 mt-5">Your rights</h4>
              <p className="text-justify">
                17. You have the following rights in relation to your Data:
              </p>
              <div className="pl-4">
                  <p className="text-justify">A. <strong>Right to access</strong> – the right to request (i) copies of the information we hold about you at any time, or (ii) that we modify, update or delete such information. If we provide you with access to the information we hold about you, we will not charge you for this, unless your request is “manifestly unfounded or excessive.” Where we are legally permitted to do so, we may refuse your request. If we refuse your request, we will tell you the reasons why.</p>
                  <p className="text-justify">B. Right to correct – the right to have your Data rectified if it is inaccurate or incomplete.</p>
                  <p className="text-justify">C. Right to erase – the right to request that we delete or remove your Data from our systems.</p>
                  <p className="text-justify">D. Right to restrict our use of your Data – the right to “block” us from using your Data or limit the way in which we can use it.</p>
                  <p className="text-justify">E. Right to data portability – the right to request that we move, copy or transfer your Data.</p>
                  <p className="text-justify">F. ght to object – the right to object to our use of your Data including where we use it for our legitimate interests.</p>
              </div>
              <p className="text-justify">
                20. To make enquiries, exercise any of your rights set out above, or withdraw your consent to the processing of your Data (where consent is our legal basis for processing your Data), please contact us via this e-mail address: info@enloya.com.
              </p>
              <p className="text-justify">
                21. It is important that the Data we hold about you is accurate and current. Please keep us informed if your Data changes during the period for which we hold it.
              </p>

              <h4 className="my-2 mt-5">Transfers outside the European Economic Area</h4>
              <p className="text-justify">
                22. Data which we collect from you may be stored and processed in and transferred to countries outside of the European Economic Area (EEA). For example, this could occur if one of our service providers is situated in a country outside the EEA.
              </p>
              <p className="text-justify">
                23. We will only transfer Data outside the EEA where it is compliant with data protection legislation and the means of transfer provides adequate safeguards in relation to your data, e.g. by way of data transfer agreement, incorporating the current standard contractual clauses adopted by the European Commission, or by signing up to the EU-US Privacy Shield Framework, in the event that the organisation in receipt of the Data is based in the United States of America.
              </p>
              <p className="text-justify">
                24. o ensure that your Data receives an adequate level of protection, we have put in place appropriate safeguards and procedures with the third parties we share your Data with. This ensures your Data is treated by those third parties in a way that is consistent with the Data Protection Laws.
              </p>

              <h4 className="my-2 mt-5">Links to other websites</h4>
              <p className="text-justify">
                25. This Website may, from time to time, provide links to other websites. We have no control over such websites and are not responsible for the content of these websites. This privacy policy does not extend to your use of such websites. You are advised to read the privacy policy or statement of other websites prior to using them.
              </p>

              <h4 className="my-2 mt-5">Changes of business ownership and control</h4>
              <p className="text-justify">
                26. Enloya may, from time to time, expand or reduce our business and this may involve the sale and/or the transfer of control of all or part of Enloya. Data provided by Users will, where it is relevant to any part of our business so transferred, be transferred along with that part and the new owner or newly controlling party will, under the terms of this privacy policy, be permitted to use the Data for the purposes for which it was originally supplied to us.
              </p>
              <p className="text-justify">
                27. We may also disclose Data to a prospective purchaser of our business or any part of it.
              </p>
              <p className="text-justify">
                28. In the above instances, we will take steps with the aim of ensuring your privacy is protected.
              </p>

              <h4 className="my-2 mt-5">Cookies</h4>
              <p className="text-justify">
                29. This Website may place and access certain Cookies on your computer. Enloya uses Cookies to improve your experience of using the Website and to improve our range of services. Enloya has carefully chosen these Cookies and has taken steps to ensure that your privacy is protected and respected at all times.
              </p>
              <p className="text-justify">
                30. All Cookies used by this Website are used in accordance with current EU Cookie Law.
              </p>
              <p className="text-justify">
                31. Before the Website places Cookies on your computer, you will be presented with a message bar requesting your consent to set those Cookies (in case of Cookies that require consent by law). By giving your consent to the placing of Cookies, you are enabling Enloya to provide a better experience and service to you. You may, if you wish, deny consent to the placing of Cookies; however certain features of the Website may not function fully or as intended.
              </p>
              <p className="text-justify">
                32. This Website may place the following Cookies:
              </p>

              <h6 className="my-2">Type of Cookie</h6>
              <p className="text-justify">Strictly necessary cookies</p>
              <h6 className="my-2">Purpose</h6>
              <p className="text-justify">These are cookies that are required for the operation of our website. They include, for example, cookies that enable you to log into secure areas of our website, use a shopping cart or make use of e-billing services.</p>
              <p className="text-justify">
                33. You can choose to enable or disable Cookies in your internet browser. By default, most internet browsers accept Cookies but this can be changed. For further details, please consult the help menu in your internet browser.
              </p>
              <p className="text-justify">
                34. You can choose to delete Cookies at any time; however, you may lose any information that enables you to access the Website more quickly and efficiently including, but not limited to, personalisation settings.
              </p>
              <p className="text-justify">
                35. It is recommended that you ensure that your internet browser is up-to-date and that you consult the help and guidance provided by the developer of your internet browser if you are unsure about adjusting your privacy settings.
              </p>
              <p className="text-justify">
                36. For more information generally on cookies, including how to disable them, please refer to about cookies.org. You will also find details on how to delete cookies from your computer.
              </p>

              <h4 className="my-2 mt-5">General</h4>
              <p className="text-justify">
                37. You may not transfer any of your rights under this privacy policy to any other person. We may transfer our rights under this privacy policy where we reasonably believe your rights will not be affected.
              </p>
              <p className="text-justify">
                38. If any court or competent authority finds that any provision of this privacy policy (or part of any provision) is invalid, illegal or unenforceable, that provision or part-provision will, to the extent required, be deemed to be deleted, and the validity and enforceability of the other provisions of this privacy policy will not be affected.
              </p>
              <p className="text-justify">
                39. Unless otherwise agreed, no delay, act or omission by a party in exercising any right or remedy will be deemed a waiver of that, or any other, right or remedy.
              </p>
              <p className="text-justify">
                40. This Agreement will be governed by and interpreted according to the law of Switzerland. All disputes arising under the Agreement will be subject to the exclusive jurisdiction of the Swiss courts.
              </p>

              <h4 className="my-2 mt-5">Changes to this privacy policy</h4>
              <p className="text-justify">
                41. Enloya reserves the right to change this privacy policy and our list of Cookies as we may deem necessary from time to time or as may be required by law. Any changes will be immediately posted on the Website and you are deemed to have accepted the terms of the privacy policy on your first use of the Website following the alterations.
              </p>
              <p className="text-justify">You may contact Enloya by email at info@enloya.com.</p>
              <p className="text-justify"><strong>19 February 2019</strong></p>
            </div>
          </div>
        </div>
      </div>
      <Footer FooterData={FooterData} kind="otherPage"/>
    </div>
  );
}

export default PrivacyPolicy;
