import Home from './pages/Home';
import About from './pages/About';
import Service from './pages/Service';
import Process from './pages/Process';
import Team from './pages/Team';
import Login from './pages/Login';
import ResetPassword from './pages/ResetPassword';
import ForgotPassword from './pages/ForgotPassword';
import Register from './pages/Register';
import SignUpLawyer from './pages/SignUpLawyer';
import SignUpClient from './pages/SignUpClient';
import Portfolio2col from './pages/Portfolio-2col';
import Portfolio3col from './pages/Portfolio-3col';
import Portfoliofull4col from './pages/Portfolio-fullwidth-4col';
import PortfolioSingle from './pages/PortfolioSingle';
import Bloglist from './pages/Bloglist';
import BlogSingle from './pages/BlogSingle';
import Contact from './pages/Contact';
import Landing from './pages/Landing';

import CheckoutConfirm from './pagers/CheckoutConfirm';
import CheckoutSuccess from './pagers/CheckoutSuccess';
import TermsOfUse from './pagers/TermsOfUse';
import FixFeesShow from './pagers/FixFeesShow';
import PrivacyPolicy from './pagers/PrivacyPolicy';
import CookiesPreferences from './pagers/CookiesPreferences';
import BecomeInvestor from './pagers/BecomeInvestor';
import BecomeAmbassador from './pagers/BecomeAmbassador';
import Checkout from './pagers/Checkout';
import Pricing from './pagers/Pricing';
import Upgrade from './pagers/Upgrade';

import Jobs from './pagers/Jobs';
import JobDetail from './pagers/JobDetail';
import Contracts from './pagers/Contracts';
import SearchResults from './pagers/SearchResults';
import ServiceSearchResults from './pagers/ServiceSearchResults';
import LawyerProfile from './pagers/LawyerProfile';
import AccountSettings from './pagers/AccountSettings';
import ValidateAccount from './pagers/ValidateAccount';
import Conversations from './pagers/account-settings/Conversations';


export default [
  {
    exact: true,
    path: "/",
    component: Home,
    authRequired: false
  },
  {
    path: "/about",
    component: About,
    authRequired: false
  },
  {
    path: "/service",
    component: Service,
    authRequired: false
  },
  {
    path: "/process",
    component: Process,
    authRequired: false
  },
  {
    path: "/team",
    component: Team,
    authRequired: false
  },
  {
    path: "/portfolio-2col",
    component: Portfolio2col,
    authRequired: false
  },
  {
    path: "/portfolio-3col",
    component: Portfolio3col,
    authRequired: false
  },
  {
    path: "/portfolio-fullwidth-4col",
    component: Portfoliofull4col,
    authRequired: false
  },
  {
    path: "/portfolioSingle",
    component: PortfolioSingle,
    authRequired: false
  },
  {
    path: "/bloglist",
    component: Bloglist,
    authRequired: false
  },
  {
    path: "/blogSingle",
    component: BlogSingle,
    authRequired: false
  },
  {
    path: "/contact",
    component: Contact,
    authRequired: false
  },
  {
    path: "/landing",
    component: Landing,
    authRequired: false
  },
  {
    path: "/login",
    component: Login,
    authRequired: false
  },
  {
    path: "/forgot-password",
    component: ForgotPassword,
    authRequired: false
  },
  {
    path: "/reset-password",
    component: ResetPassword,
    authRequired: false
  },
  {
    path: "/register",
    component: Register,
    authRequired: false
  },
  {
    path: "/signup-lawyer",
    component: SignUpLawyer,
    authRequired: false
  },
  {
    path: "/signup-client",
    component: SignUpClient,
    authRequired: false
  },
  {
    path: "/checkout",
    component: Checkout,
    authRequired: true
  },
  {
    path: "/pricing",
    component: Pricing,
    authRequired: false
  },
  {
    path: "/upgrade",
    component: Upgrade,
    authRequired: true
  },
  {
    path: "/checkout-confirm",
    component: CheckoutConfirm,
    authRequired: true
  },
  {
    path: "/checkout-success",
    component: CheckoutSuccess,
    authRequired: true
  },
  {
    path: "/terms-of-use",
    component: TermsOfUse,
    authRequired: false
  },
  {
    path: "/fix-fee-services-show",
    component: FixFeesShow,
    authRequired: false
  },
  {
    path: "/privacy-policy",
    component: PrivacyPolicy,
    authRequired: false
  },
  {
    path: "/cookies-preferences",
    component: CookiesPreferences,
    authRequired: false
  },
  {
    path: "/become-investor",
    component: BecomeInvestor,
    authRequired: false
  },
  {
    path: "/become-ambassador",
    component: BecomeAmbassador,
    authRequired: false
  },
  {
    path: "/jobs",
    component: Jobs,
    authRequired: false
  },
  {
    path: "/job-detail",
    component: JobDetail,
    authRequired: false
  },
  {
    path: "/contracts",
    component: Contracts,
    authRequired: false
  },
  {
    path: "/search-lawyer",
    component: SearchResults,
    authRequired: false
  },
  {
    path: "/search",
    component: ServiceSearchResults,
    authRequired: false
  },
  {
    path: "/lawyer-profile/:lawyerId",
    component: LawyerProfile,
    authRequired: false
  },
  {
    path: "/account-settings",
    component: AccountSettings,
    authRequired: true
  },
  {
    path: "/conversations",
    component: Conversations,
    authRequired: true
  },
  {
    path: "/confirm-token",
    component: ValidateAccount,
    authRequired: false
  },
]
