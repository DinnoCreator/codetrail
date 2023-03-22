import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Small from "@/components/tutor/small";
import Head from "next/head";
import StudentContent from "@/components/tutor/content";

export default function Tutor() {
  const router = useRouter();
  const [authenticating, setAuthenticating] = useState(true);
  // const [windowLocator, setLocator] = useState("");

  // useEffect(() => {
  //   setLocator(window.location.href)
  // }, []);
  // handles capitalizing first alphabet in name
  const neat = (yourName) => {
    let firstChar = yourName?.slice(0, 1);
    firstChar = firstChar?.toUpperCase();
    let restChar = yourName?.slice(1, yourName.length);
    restChar = restChar?.toLowerCase();
    const newName = firstChar + restChar;

    return newName;
  };

  const name = neat(`${router.query.studentName}`);
  return (
    <>
      <Head>
        <title>CodeTrail-Student</title>
        <meta
          name="description"
          content="Start your career in teach with us."
        />
        {/* FontAwesome */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css"
          integrity="sha512-YWzhKL2whUzgiheMoBFwW8CKV4qpHQAEuvilg9FAn5VJUDwKZZxkJNuGM4XkWuk94WCrrwslk8yWNGmY1EduTA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Head>
      <div className="grid-left">
        <div className=" t-white codetrail-bg fixed">
          <div className="leftct-content marg-t0">
            <h2 className=" left-head marg-b2">CODETRAIL</h2>
            <div>
              <div
                className="marg-b2 stuff bottomShadow"
                style={{
                  paddingBottom: "0.5rem",
                  // borderBottomRightRadius: "6px",
                  // borderBottom: "2px solid white",
                  // borderRight: "2px solid white",
                }}
              >
                <span className="icon">
                  <i className="fa-solid fa-house"></i>
                </span>
                <span className="link">Home</span>
              </div>
              <div className="marg-b2 stuff">
                <span className="icon">
                  <i className="fa-regular fa-calendar-days"></i>
                </span>
                <span className="link">Schedule</span>
              </div>
              <div className="marg-b2 stuff">
                <span className="icon">
                  <i className="fa-solid fa-briefcase"></i>
                </span>
                <span className="link">Courses</span>
              </div>
              <div className="marg-b2 stuff">
                <span className="icon">
                  <i className="fa-regular fa-circle-play"></i>
                </span>
                <span className="link">Videos</span>
              </div>
              <div className="marg-b2 stuff">
                <span className="icon">
                  <i className="fa-solid fa-chart-line"></i>
                </span>
                <span className="link">Analytics</span>
              </div>
              <div className="marg-b2 stuff">
                <span className="icon">
                  <i className="fa-solid fa-gear"></i>
                </span>
                <span className="link">Settings</span>
              </div>
              <div className="fixedct-bottom stuff">
                <div className="marg-b1 stuff">
                  <span className="icon">
                    <i className="fa-regular fa-comment-dots"></i>
                  </span>
                  <span className="link">Support</span>
                </div>
                <div className="stuff">
                  <span className="icon">
                    <i className="fa-solid fa-right-from-bracket"></i>
                  </span>
                  <span className="link">Log Out</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="invinsible"></div>
        <div className="body">
          <StudentContent name={name} />
        </div>
      </div>
      <Small>
        <StudentContent name={name} />
      </Small>
      <script
        src="https://kit.fontawesome.com/3157f9417c.js"
        crossOrigin="anonymous"
      ></script>
    </>
  );
}
