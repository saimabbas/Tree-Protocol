import "./App.css";
import {useEffect} from 'react';
import Lottie from "react-lottie";
import Swiper from "swiper";
import SwiperCore, { Navigation, Pagination } from "swiper/core";
import animFeatherIcon from "./animFeatherIcon.json";
import animLeaf from "./animLeaf.json";
import animSeed from "./animSeed.json";
import animTree from "./animTree.json";
import equilibrium_logo from "./assets/equilibrium_logo-2.svg";
import Icon_coin_v1 from "./assets/Icon-coin_v1.svg";
import Icon_hand_v1 from "./assets/Icon-hand_v1.svg";
import Icon_plants_v1 from "./assets/Icon-plants_v1.svg";
import p1 from "./assets/p1.svg";
import p2 from "./assets/p2.svg";
import abc1 from "./assets/abc-1.jpeg";
import abc3 from "./assets/abc-3.jpeg";
import abc2 from "./assets/abc-2.jpeg";
import saim from "./assets/profile-user.png";
import Section_5_box from "./components/Section_5_box";
import Section_11_box from "./components/Section_11_box";
import Section_13_box from "./components/Section_13_box";
import Advisors_box from "./components/Advisors_box";

function App() {
	SwiperCore.use([Navigation, Pagination]);
	useEffect(() => {
			var swiper = new Swiper(".swiper-container", {
        slidesPerView: "auto",
        loop: false,
        grabCursor: true,
        navigation: {
          nextEl: ".map-next",
          prevEl: ".map-prev",
        },
      });
	}, [])
  

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animFeatherIcon,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const defaultOptions_2 = {
    loop: true,
    autoplay: true,
    animationData: animLeaf,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const defaultOptions_3 = {
    loop: true,
    autoplay: true,
    animationData: animTree,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const defaultOptions_4 = {
    loop: true,
    autoplay: true,
    animationData: animSeed,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="App">
      <div className="container-fluid">
        {/* Header */}
        <div className="row">
          <div className="col-12 p-0">
            <nav className="navbar navbar-expand-md navbar-dark bl_top_nav">
              <a className="navbar-brand" href="#">
                <embed src={equilibrium_logo} alt="mainlogo" />
                <h1>TREE PROTOCOL</h1>
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#collapsibleNavbar"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="collapsibleNavbar">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      FAQ
                    </a>
                  </li>
                </ul>
                <div className="top_nav_btns">
                  <button className="btn">Whitepaper</button>
                  {/* <button className="btn">Buy ARTH</button> */}
                </div>
              </div>
            </nav>
          </div>
        </div>
        {/* Section 1 */}
        <div className="row">
          <div className="col-sm-6 col-12 landing_page_main_image">
            <Lottie options={defaultOptions_2} />
          </div>
          <div className="col-sm-6 col-12 landing_page_main_headings">
            <h4>*** NEW WEBSITE IS COMING SOON ***</h4>
            <h1>BRETTON WOODS MONEY</h1>
            <h2>The First Regulatory Compliant Money Market Ecosystem</h2>
            <h3>
              Introducing TREE PROTOCOL, an adaptive triple collateral ecosystem
              to combat price volatility, maximize buying power and bridge
              regulatory compliance
            </h3>
          </div>
        </div>
        {/* Section 2 */}
        {/* <div className="row">
          <div className="col-12 equilibrium_section__2">
            <h1>Built on Binance Smart Chain</h1>
            <p>
              The ecosystem leverages Binance Smart Chain's light speed effect
              and is compatible with major DeFi protocols to farm, stake, lend
              and borrow at ease.
            </p>
            <img src={farming} alt="farming" />
          </div>
        </div> */}
        <div className="row">
          <div className="col-12 equilibrium_section_10-1">
            <span>
              TREE is the state of the art complaint ecosystem that implements
              advanced token economics including token burns, inflation and
              staking into its dynamics to eliminate price instability and value
              erosion over time. It includes the following essential components
            </span>
          </div>
          <div className="col-12 equilibrium_section_10-2">
            <h1>TREE Ecosystem</h1>
          </div>
          {/* Section 11 */}
          <div className="col-12">
            <div className="row equilibrium_section_350">
              <Section_11_box
                imgSrc={p1}
                boxHeading="STASIS"
                boxText="Stasis is a novel financial experiment to innovate a new kind of smart DeFi collateral using a combination of three crypto protocol dynamics that paves the way for a price-resistant, decentralized reserve of growing wealth governed by the community. "
              />
              <Section_11_box
                imgSrc={p2}
                boxHeading="CREDIT"
                boxText="Credit is the decentralized regulated stablecoin Money Market Platform backed by TREE collateral and other crypto assets for synthetic asset generation and lending with a compliance bridge to the CeFi world."
              />
              <Section_11_box
                imgSrc={p2}
                boxHeading="SLATE"
                boxText="A cross-chain crowdfunding launchpad platform for crypto projects to raise capital with regulatory norms in a decentralized way."
              />
              <Section_11_box
                imgSrc={p2}
                boxHeading="CIFI"
                boxText="The first tokenized all-in-one enterprise-grade sports Network making it one of the first real-time adaptations of algorithmic currencies in the traditional world."
              />
            </div>
          </div>
        </div>
        {/* Section 3 */}
        <div className="row">
          <div className="col-12 pai-sai-heads">
            <h1>Stasis Platform</h1>
            <p>
              The contribution to the growth and adoption of Stasis collateral
              is key to its success whose purchasing power always grows with you
            </p>
          </div>
          <div className="col-sm-6 col-12 equilibrium_secton__3_left">
            <h1>PAI </h1>
            <p>
              A deflationary token that regulates demand by reducing supply
              after every transaction using a built-in burning mechanism and
              instantly incentivize the holder's portfolio
              <a href="#">
                Learn more <i className="fas fa-arrow-right"></i>
              </a>
            </p>
            {/* <button className="btn">Buy ARTH</button> */}
          </div>
          <div className="col-sm-6 col-12 equilibrium_secton__3_right">
            {/* <h1 className="pai_under_image">PAI </h1> */}
            <Lottie options={defaultOptions_4} />
          </div>
        </div>
        {/* Section 4 */}
        <div className="row">
          <div className="col-6 equilibrium_secton__4_right">
            {/* <h1 className="sai_under_image">SAI </h1> */}
            <Lottie options={defaultOptions} />
          </div>
          <div className="col-sm-6 col-12 equilibrium_secton__4_left">
            <h1>SAI </h1>
            <p>
              An enhanced algorithmic inflationary protocol whose value is
              pegged to TREE (1 SAI = 0.0001 TREE) and the token supply will get
              inflated in response to the market demand.
              <a href="#">
                Learn more <i className="fas fa-arrow-right"></i>
              </a>
            </p>
            {/* <span>
              <button className="btn">Buy ARTH</button>
              <p>Arthcoin.com</p>
            </span> */}
          </div>
        </div>
        {/* Section 5 */}
        <div className="row">
          <div className="col-sm-6 col-12 equilibrium_secton__3_left">
            <h1>TREE </h1>
            <p>
              A deflationary cryptocurrency that regulates demand by reducing
              supply after every transaction using a built-in burning mechanism
              and instantly incentivize the holder's portfolio
              <a href="#">
                Learn more <i className="fas fa-arrow-right"></i>
              </a>
            </p>
            {/* <button className="btn">Buy ARTH</button> */}
          </div>
          <div className="col-sm-6 col-12 equilibrium_secton__3_right">
            {/* <h1 className="tree_under_image">TREE </h1> */}
            <Lottie options={defaultOptions_3} />
          </div>
        </div>
        {/* Section 15 ~ Added afterwards */}
        {/* <div className="row equilibrium_section_afterwards">
          <div className="col-12">
            <img src={arthframe} alt="arthframe" />
            <h1>
              CIFI is the first tokenized all-in-one enterprise-grade
              multi-dimensional sports ecosystem fueled by Equilibrium
              collateral dynamics
            </h1>
            <div className="row">
              <div className="col-2">
                <img src={p1} alt="p1" />
                <h6>NEST</h6>
              </div>
              <div className="col-2">
                <img src={p1} alt="p1" />
                <h6>SHIELD</h6>
              </div>
              <div className="col-2">
                <img src={p1} alt="p1" />
                <h6>VARI</h6>
              </div>
              <div className="col-2">
                <img src={p1} alt="p1" />
                <h6>TRON</h6>
              </div>
              <div className="col-2">
                <img src={p1} alt="p1" />
                <h6>REVERIE</h6>
              </div>
              <div className="col-2">
                <img src={p1} alt="p1" />
                <h6>MANG</h6>
              </div>
              <div className="col-2">
                <img src={p1} alt="p1" />
                <h6>BALLOT</h6>
              </div>
            </div>
          </div>
        </div> */}
        {/* Section 6 */}
        <div className="row equilibrium_section_5_row">
          <Section_5_box
            imgSrc={Icon_coin_v1}
            s5_heading="Resilent"
            s5_text="Regulatory Compliant model that is both price and shock-resistant."
          />
          <Section_5_box
            imgSrc={Icon_hand_v1}
            s5_heading="Instant Rewards"
            s5_text="Simplified Yield that credits holders with instant rewards without running any complicates nodes or farming."
          />
          <Section_5_box
            imgSrc={Icon_plants_v1}
            s5_heading="Grow Your Stack"
            s5_text="Your portfolio will be proportional to the HODL time. The longer you hold, the bigger the benefits."
          />
        </div>
        {/* Section 7 */}
        {/* <div className="row equilibrium_section_7_row">
          <div className="col-12">
            <h6>Receive additional rewards by staking your portfolio </h6>
          </div>
          <div className="col-5 equilibrium_secton__4_right">
            <img src={arthframe} alt="arthframe" />
          </div>
          <div className="col-sm-7 col-12 equilibrium_secton__4_left">
            <h1 className="section_7_mob_head">
              {" "}
              Earn additional rewards regardless of the price action{" "}
            </h1>
            <p>
              Pool your equilibrium tokens in the liquidity pool and earn
              additional constant rewards
            </p>
            <span>
              <button className="btn">Staking</button>
            </span>
          </div>
        </div> */}
        {/* Section 8 */}
        {/* <div className="row">
          <div className="col-10 equilibrium_section_8">
            <img src={arthframe} alt="arthframe" />
            <h1>Lead the Revolution</h1>
            <p>
              Equilibrium is the state of the art ecosystem that implements
              advanced token economics, including token burns and staking into
              its dynamics that helps eliminate price instability and value
              erosion over time, thus maximizing buying power
            </p>
          </div>
        </div> */}
        {/* Section 9 */}
        {/* <div className="row equilibrium_section_9">
          <div className="col-12">
            <h1>How does it work?</h1>
          </div>
          <div className="col-sm-5 col-12">
            <img src={arthframe} alt="arthframe" />
          </div>
          <div className="col-sm-7 col-12 equilibrium_section_9_mob_col-sm-7">
            <span>
              <h2>Reward the Brave </h2>
              <img src={arthframe} alt="arthframe" />
            </span>
            <p>
              When the price appreciates, token holders receive staking rewards
              based on several factors, including percentage price increase and
              how many tokens they hold thru a positive rebase. Also, after
              every transaction, the portion of every transaction is dispersed
              across all holders proportionally.
            </p>
          </div>
          <div className="col-sm-7 col-12 equilibrium_section_9-right-2">
            <span>
              <h2>Retain buying Power </h2>
              <img src={arthframe} alt="arthframe" />
            </span>
            <p>
              The ecosystem burns 4% of the token from every transaction to
              increase demand by reducing supply. Under extreme conditions, the
              protocol buys excessive tokens from the market from the reserve to
              maintain balance
            </p>
          </div>
          <div className="col-sm-5 col-12 equilibrium_section_9-left-2">
            <img src={arthframe} alt="arthframe" />
          </div>
        </div> */}
        {/* Section 10 */}
        <div className="row">
          <div className="col-12 equilibrium_section_10-1">
            <span>
              Contribution to the growth and adoption of TREE PROTOCOL is key to
              its success, whose purchasing power always grows with you.
            </span>
          </div>
          <div className="col-12 equilibrium_section_10-2">
            <h1>TECHNOLOGY STACK</h1>
          </div>
          {/* Section 11 */}
          <div className="col-12">
            <div className="row equilibrium_section_11">
              <Section_11_box
                imgSrc={abc1}
                boxHeading="
BINANCE SMART CHAIN"
              />
              <Section_11_box imgSrc={abc3} boxHeading="POLKADOT" />
              <Section_11_box imgSrc={abc2} boxHeading="ALGORAND" />
            </div>
          </div>
        </div>
        {/* Section 12 */}
        <div className="row equilibrium_section_12">
          <div className="col-12">
            <h1>Road Map</h1>
          </div>
          <div className="col-12">
            {/* <div className="row roadmap">
              <div className="col-sm-3">
                <h1>Q1.2020</h1>
                <div className="roadmap_line-circle">
                  <span>1</span>
                  <div></div>
                </div>
                <p>Concept</p>
                <p>Whitepaper</p>
                <p>ARTH Alpha Launch</p>
              </div>
              <div className="col-sm-3">
                <h1>Q2.2020</h1>
                <div className="roadmap_line-circle">
                  <span>2</span>
                  <div></div>
                </div>
                <p>Token Generation Event</p>
                <p>ARTH Phase 1 Launch</p>
                <p>Initial DEX Offering</p>
                <p>Governance Portal Launch</p>
                <p>Phase 2 Research</p>
              </div>
              <div className="col-sm-3">
                <h1>Q3.2020</h1>
                <div className="roadmap_line-circle">
                  <span>3</span>
                  <div></div>
                </div>
                <p>ARTH Phase 2 Launch</p>
                <p>ARTH CDP Portal Launch</p>
                <p>Initial DEX Offering</p>
                <p>Governance Portal Launch</p>
              </div>
              <div className="col-sm-3">
                <h1>Q4.2020</h1>
                <div className="roadmap_line-circle">
                  <span>4</span>
                  <div></div>
                </div>
                <p>ARTH CDP Portal Launch</p>
                <p>Initial DEX Offering</p>
                <p>Governance Portal Launch</p>
              </div>
            </div> */}
            <div className="row">
              <div className="col-sm-1 col-2 p-0 map-prev">
                <span>
                  <i className="fas fa-chevron-left"></i>
                </span>
              </div>
              <div className="col-sm-10 col-8 p-0">
                <div className="swiper-container">
                  <div className="swiper-wrapper roadmap">
                    <div className="swiper-slide col-sm-3">
                      <h1>Q2 2020</h1>
                      <div className="roadmap_line-circle">
                        <span>1</span>
                        <div></div>
                      </div>
                      <p>Whitepaper</p>
                      <p>Proof of Concept</p>
                    </div>

                    <div className="swiper-slide col-sm-3">
                      <h1>Q3 2020</h1>
                      <div className="roadmap_line-circle">
                        <span>2</span>
                        <div></div>
                      </div>
                      <p>Bootstrapping round</p>
                      <p>Team Onboarding</p>
                    </div>

                    <div className="swiper-slide col-sm-3">
                      <h1>Q4 2020</h1>
                      <div className="roadmap_line-circle">
                        <span>3</span>
                        <div></div>
                      </div>
                      <p>MVP</p>
                    </div>
                    <div className="swiper-slide col-sm-3">
                      <h1>Q1 2021</h1>
                      <div className="roadmap_line-circle">
                        <span>4</span>
                        <div></div>
                      </div>
                      <p>Venture Capital Engagment</p>
                      <p>Advisor Connect</p>
                    </div>
                    <div className="swiper-slide col-sm-3">
                      <h1>Q2 2021</h1>
                      <div className="roadmap_line-circle">
                        <span>5</span>
                        <div></div>
                      </div>
                      <p>Social Media SetUps</p>
                      <p>Audit Completion</p>
                      <p>Partnership Engagement</p>
                      <p>TGE (PAI and SAI Currency)</p>
                    </div>
                    <div className="swiper-slide col-sm-3">
                      <h1>Q3 2021</h1>
                      <div className="roadmap_line-circle">
                        <span>6</span>
                        <div></div>
                      </div>
                      <p>Dashboard</p>
                      <p>Staking & Reserve Launch</p>
                      <p>Marketing</p>
                      <p>TGE (TREE Currency)</p>
                    </div>
                    <div className="swiper-slide col-sm-3">
                      <h1>Q4 2021</h1>
                      <div className="roadmap_line-circle">
                        <span>7</span>
                        <div></div>
                      </div>
                      <p>Community Governance</p>
                      <p>DeFi Liquidity Mining</p>
                      <p>SLATE Launch (Version 1)</p>
                      <p>TREE - Dashboard Launch (Version 1)</p>
                    </div>
                    <div className="swiper-slide col-sm-3">
                      <h1>Q1 2022</h1>
                      <div className="roadmap_line-circle">
                        <span>8</span>
                        <div></div>
                      </div>
                      <p>Adoption Incentivized programmers</p>
                      <p>SDK for Dapp development</p>
                    </div>
                    <div className="swiper-slide col-sm-3">
                      <h1>Q2 2022</h1>
                      <div className="roadmap_line-circle">
                        <span>9</span>
                        <div></div>
                      </div>
                      <p>Adoption Incentivized programmers</p>
                      <p>CIFI - Betting and DAO Launch</p>
                      <p>STATIS - DAO Launch</p>
                    </div>
                    <div className="swiper-slide col-sm-3">
                      <h1>Q3 2022</h1>
                      <div className="roadmap_line-circle">
                        <span>10</span>
                        <div></div>
                      </div>
                      <p>CREDIT Platform Launch (Version 1)</p>
                      <p>CIFI NFT Launch (Version 1)</p>
                      <p>SLATE (Version 1)</p>
                    </div>
                    <div className="swiper-slide col-sm-3">
                      <h1>Q4 2022</h1>
                      <div className="roadmap_line-circle">
                        <span>11</span>
                        <div></div>
                      </div>
                      <p>SLATE (Version 2 - Compliance Layer)</p>
                    </div>
                    <div className="swiper-slide col-sm-3">
                      <h1>Q1 2023</h1>
                      <div className="roadmap_line-circle">
                        <span>12</span>
                        <div></div>
                      </div>
                      <p>CIFI (Version 2 - Complaince Layer)</p>
                      <p>CREDIT (Version 2 - Compliance Layer)</p>
                    </div>
                    <div className="swiper-slide col-sm-3">
                      <h1>Q2 2023</h1>
                      <div className="roadmap_line-circle">
                        <span>13</span>
                        <div></div>
                      </div>
                      <p>CREDIT (Version 3 - CEFI Bridge)</p>
                    </div>
                    <div className="swiper-slide col-sm-3">
                      <h1>Q3 2023</h1>
                      <div className="roadmap_line-circle">
                        <span>14</span>
                        <div></div>
                      </div>
                      <p>Mobile App - CIFI (Version 1)</p>
                    </div>
                    <div className="swiper-slide col-sm-3">
                      <h1>Q4 2023</h1>
                      <div className="roadmap_line-circle">
                        <span>15</span>
                        <div></div>
                      </div>
                      <p>Mobile App - CREDIT and STATIS (Version 1)</p>
                    </div>
                    <div className="swiper-slide col-sm-3">
                      <h1>Q1 2024</h1>
                      <div className="roadmap_line-circle">
                        <span>16</span>
                        <div></div>
                      </div>
                      <p>CREDIT Compliance - PaaS </p>
                      <p>STASIS, CREDIT, SLATE and CIFI - DAO Launch</p>
                    </div>
                    <div className="swiper-slide col-sm-3">
                      <h1>Q2 2024</h1>
                      <div className="roadmap_line-circle">
                        <span>17</span>
                        <div></div>
                      </div>
                      <p>CREDIT - SDK and API Service</p>
                    </div>
                    <div className="swiper-slide col-sm-3">
                      <h1>Q3 2024</h1>
                      <div className="roadmap_line-circle">
                        <span>18</span>
                        <div></div>
                      </div>
                      <p>Social Media Marketing</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-1 col-2 p-0 map-next">
                <span>
                  <i className="fas fa-chevron-right"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* Section 13 */}
        <div className="row equilibrium_section_13">
          <div className="col-12">
            <h1>Core Team</h1>
          </div>
          <div className="col-12">
            <div className="row equilibrium_section_13-row">
              <Section_13_box imgSrc={saim} />
              <Section_13_box imgSrc={saim} />
              <Section_13_box imgSrc={saim} />
              <Section_13_box imgSrc={saim} />
            </div>
          </div>
        </div>
        <div className="row equilibrium_section_advisors">
          <div className="col-12">
            <h1>Advisors</h1>
          </div>
          <div className="col-12">
            <div className="row advisors_row">
              <Advisors_box imgSrc={saim} head="Name" text="Role" />
              <Advisors_box imgSrc={saim} head="Name" text="Role" />
              <Advisors_box imgSrc={saim} head="Name" text="Role" />
              <Advisors_box imgSrc={saim} head="Name" text="Role" />
            </div>
          </div>
        </div>
        {/* Section 14 */}
        <div className="row equilibrium_section_14">
          <div className="col-12">
            <h1>Partners</h1>
          </div>
          <div className="col-sm-3 offset-0 col-12 p-0">
            <ul class="nav nav-pills">
              <li class="nav-item">
                <a class="nav-link active" data-toggle="pill" href="#pill-1">
                  Investors
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" data-toggle="pill" href="#pill-2">
                  Partners
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" data-toggle="pill" href="#pill-3">
                  Exchanges
                </a>
              </li>
            </ul>
          </div>
          <div className="col-sm-9 col-12 p-0">
            <div class="tab-content">
              <div class="tab-pane active" id="pill-1">
                <div className="row">
                  <div className="col-sm-6">
                    <div>
                      <img src={p1} alt="arthframe" />
                      <span>
                        <h1>BOSON LABS</h1>
                      </span>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div>
                      <img src={p1} alt="arthframe" />
                      <span>
                        <h1>COMING SOON</h1>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="tab-pane fade" id="pill-2">
                <div className="row">
                  <div className="col-sm-6">
                    <div>
                      <img src={p1} alt="arthframe" />
                      <span>
                        <h1>BOSON LABS</h1>
                      </span>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div>
                      <img src={p1} alt="arthframe" />
                      <span>
                        <h1>COMING SOON</h1>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="tab-pane fade" id="pill-3">
                <div className="row">
                  <div className="col-sm-6">
                    <div>
                      <img src={p1} alt="arthframe" />
                      <span>
                        <h1>BOSON LABS</h1>
                      </span>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div>
                      <img src={p1} alt="arthframe" />
                      <span>
                        <h1>COMING SOON</h1>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Section 14 */}
        <div className="row equilibrium_section_15">
          <div className="col-sm-6 p-0">
            <h1>Join the community</h1>
            <p>
              We love how the DeFi landscape is growing so quickly and certainly
              excited to be part of it! We also sincerely hope you join us on
              this exciting journey!
            </p>
          </div>
          <div className="col-sm-6 p-0">
            <div>
              <a href="https://medium.com/@TREEPROTOCOL">
                <i className="fab fa-medium-m"></i>
              </a>
              <a href="https://twitter.com/TREE_PROTOCOL">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://www.linkedin.com/company/boson-labs">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://github.com/bosonlabs">
                <i class="fab fa-github"></i>
              </a>
            </div>
          </div>
          <div className="col-12 footer_text_all">
            <p>@ copyright 2021, Boson Labs, LLC. All rights reserved.</p>
          </div>
          <div className="col-12 footer_text_all-2">
            <h4>DISCLAIMER</h4>
            <p>
              The content of this website is intended to convey general
              information only. This website does not provide provide legal,
              investment, tax, etc advice. You should not treat any information
              on this website as a call to make any particular decision
              regarding cryptocurrency usage, legal matters, investments, taxes,
              cryptocurrency mining, exchange usage, wallet usage, etc. We
              strongly suggest seeking advice from your own financial,
              investment, tax, or legal adviser. Neither this website nor its
              parent companies accept responsibility for any loss, damage, or
              inconvenience caused as a result of reliance on information
              published on, or linked to, from Equilibrium. Cryptocurrencies are
              risky assets, and there is a probability that you could lose all
              your money. Do not invest if you are not aware of what you are
              doing.Participants from countries under whose national legislation
              considers some of these tokens as security or a regulated
              financial instrument are prohibited from participating in any
              manner in token issuance, including indirectly, such as via a
              proxy or a name loan -"US person," Canada, South Korea, Singapore,
              India and China. This prohibition applies to all types of people
              (moral, physical, agent, etc.) and any indirect participation (via
              a proxy, a name loan, etc.).{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
