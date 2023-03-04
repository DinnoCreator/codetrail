import Learn from "./Learn";

const Home = () => {
  const bImage = `https://www.usnews.com/dims4/USNEWS/ba4676c/2147483647/thumbnail/970x647/quality/85/?url=https%3A%2F%2Fwww.usnews.com%2Fcmsmedia%2F45%2F12%2F2423ec644d4ab65d28dbf79cc18e%2F201208-programmer-stock.jpg`;
  const stuff = `https://i.pinimg.com/736x/38/f3/b4/38f3b48f48e3a97c063c6a4cfd99846e.jpg`;
  const stuff1 = `https://media.istockphoto.com/id/1334702614/photo/young-man-with-laptop-and-coffee-working-indoors-home-office-concept.jpg?s=612x612&w=0&k=20&c=qAhnrFIMKaObf7Ybf19FVE605g5OVcR7CSt0E3xYSMo=`;
  const stuff2 = `https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/video/Vd3bj2jPe/videoblocks-multi-ethnic-business-people-working-with-laptop-computer-in-modern-office-serious-men-and-women-working-remote-in-coworking-focused-workers-team-typing-laptops-on-workplace-in-open-space-office_hcr1aobsv_thumbnail-1080_01.png`;
  return (
    <main className="body">
      <div className="fixedct-top navbarCt codetrail">
        <nav className="containerct">
          <h1 className="navhead">CODETRAIL</h1>

          <button className="fixedct-right btnct btnct-codetrail btnct-big">
            Login
          </button>
        </nav>
      </div>

      <div
        className="back"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.60), rgba(0, 0, 0, 0.60)),url(${bImage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          width: "100%",
        }}
      >
        <div className="containerct back-top">
          <h1 className="bigT">CHANGING LIVES THROUGH TECH</h1>
          <h3 className="midT marg-t1">
            Start your career in tech, by taking our courses that are tailored
            to be comprehensive, and flexible to make you more valuable to
            employers and the society at large.
          </h3>
          <button className="marg-t2 btnct btnct-codetrail btnct-codetrail-white btnct-big">
            Signup
          </button>
        </div>
      </div>
      <h2 className="center marg-t2">Learn At Your Own Pace</h2>
      <div className="grid-type">
        <div>
          <div
            className="border-round"
            style={{
              backgroundImage: `url(${stuff1})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              width: "100%",
              height: "150px",
            }}
          ></div>
          <div className="bgc-blue t-white type-head center codetrail">
            <h3>Full Time</h3>
          </div>
          <div className="bgc-white padder">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sapien
            eros, sollicitudin a diam in, tristique tempor nulla.
          </div>
        </div>
        <div>
          <div
            className="border-round"
            style={{
              backgroundImage: `url(${stuff})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              width: "100%",
              height: "150px",
            }}
          ></div>
          <div className="bgc-pink t-white type-head center codetrail">
            <h3>Part Time</h3>
          </div>
          <div className="bgc-white padder">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sapien
            eros, sollicitudin a diam in, tristique tempor nulla.
          </div>
        </div>
        <div>
          <div
            className="border-round"
            style={{
              backgroundImage: `url(${stuff2})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              width: "100%",
              height: "150px",
            }}
          ></div>
          <div className="bgc-orange t-white type-head center codetrail">
            <h3>In Person</h3>
          </div>
          <div className="bgc-white padder">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sapien
            eros, sollicitudin a diam in, tristique tempor nulla.
          </div>
        </div>
      </div>
      <Learn />
    </main>
  );
};

export default Home;
