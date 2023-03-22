import { html5, css, bImage } from "@/webImages/webImages";
import { useState } from "react";
import CalculateIcon from "@mui/icons-material/Calculate";
import Container from "@mui/material/Container";
import { Diversity1TwoTone } from "@mui/icons-material";

const Tasks = () => {
  const [todo, forum] = useState(true);
  const changeView = () => {
    todo ? forum(false) : forum(true);
  };
  const reducer = (text) => {
    if (text?.length <= 25) {
      return text;
    } else if (text?.slice(22, 23) === " ") {
      let short = text?.slice(0, 22);
      let completeShort = short + "...";

      return completeShort;
    } else {
      let short = text?.slice(0, 23);
      let completeShort = short + "...";
      return completeShort;
    }
  };
  const viewChanger = () => {
    if (todo) {
      return (
        <div key={1}>
          <div>
            <p className="em">
              Today's Tasks
              <span
                className="em fixedct-right stuff bt"
                style={{ paddingTop: "0.2rem" }}
              >
                SEE ALL
              </span>
            </p>
          </div>
          <div>
            <div className="btnct bottomShadow btnct-codetrail displayInline">
              To-do
            </div>
            <div
              onClick={changeView}
              className="displayInline greyMatter stuff"
              style={{ marginLeft: "1.5rem" }}
            >
              Forum
            </div>
          </div>
          <div className="marg-t2">
            <div className="ticketStrip padderless bgc-white t-black">
              <span className="em ht padder">
                {reducer("Create a contact me form")}
                <div
                  className="fixedct-left ticketStrip backicon  bgc-white"
                  style={{
                    backgroundImage: `url(${html5})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    width: "30px",
                  }}
                >
                  {/* <RouteIcon /> */}
                </div>
                <div
                  className="form-check fixedct-right"
                  style={{ marginRight: "1rem" }}
                >
                  <input
                    className="form-check-input codetrail-bg"
                    type="checkbox"
                    id="flexCheckDefault"
                    checked
                    readOnly
                    style={{ pointerEvents: "none" }}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                    style={{ marginLeft: "0.5rem" }}
                  >
                    Done
                  </label>
                </div>
              </span>
              <br />
              <span className="bt padder">HTML</span>
            </div>
          </div>
          <div className="marg-t2">
            <div className="ticketStrip padderless bgc-blue t-white">
              <span className="em ht padder">
                {reducer("Make an image list using CSS Grid")}
                <div
                  className="fixedct-left ticketStrip backicon  bgc-white"
                  style={{
                    backgroundImage: `url(${css})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    width: "30px",
                  }}
                >
                  {/* <RouteIcon /> */}
                </div>
                <div
                  className="form-check fixedct-right"
                  style={{ marginRight: "1rem" }}
                >
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="flexCheckDefault"
                    style={{ pointerEvents: "none" }}
                    readOnly
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                    style={{ marginLeft: "0.5rem" }}
                  >
                    Done
                  </label>
                </div>
              </span>
              <br />
              <span className="bt padder">CSS</span>
            </div>
          </div>
          <div className="marg-t2">
            <div className="ticketStrip padderless bgc-orange t-white">
              <span className="em ht padder">
                {reducer("Use the DOM to animate a div")}
                <div
                  className="fixedct-left ticketStrip backicon  bgc-white"
                  style={{
                    backgroundImage: `url(${bImage})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    width: "30px",
                  }}
                >
                  {/* <RouteIcon /> */}
                </div>
                <div
                  className="form-check fixedct-right"
                  style={{ marginRight: "1rem" }}
                >
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="flexCheckDefault"
                    style={{ pointerEvents: "none" }}
                    readOnly
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                    style={{ marginLeft: "0.5rem" }}
                  >
                    Done
                  </label>
                </div>
              </span>
              <br />
              <span className="bt padder">JavaScript</span>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div key={2}>
          <div>
            <p className="em">
              Today's Tasks
              <span
                className="em fixedct-right stuff bt"
                style={{ paddingTop: "0.2rem" }}
              >
                SEE ALL
              </span>
            </p>
          </div>
          <div>
            <div
              onClick={changeView}
              className="displayInline greyMatter stuff"
            >
              To-do
            </div>
            <div
              className="btnct bottomShadow btnct-codetrail displayInline"
              style={{ marginLeft: "1.5rem" }}
            >
              Forum
            </div>
          </div>
          <div className="marg-t2">
            <div className="ticketStrip padderless bgc-white t-black">
              <span className="em ht padder">
                HTML
                <div
                  className="fixedct-left ticketStrip backicon  bgc-white"
                  style={{
                    backgroundImage: `url(${html5})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    width: "30px",
                  }}
                >
                  {/* <RouteIcon /> */}
                </div>
                <div
                  className="form-check fixedct-right"
                  style={{ marginRight: "1rem" }}
                >
                  <i className="fa-solid fa-chevron-right"></i>
                </div>
              </span>
              <br />
              <span className="bt padder">Discuss about HTML</span>
            </div>
          </div>
          <div className="marg-t2">
            <div className="ticketStrip padderless bgc-blue t-white">
              <span className="em ht padder">
                CSS
                <div
                  className="fixedct-left ticketStrip backicon  bgc-white"
                  style={{
                    backgroundImage: `url(${css})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    width: "30px",
                  }}
                >
                  {/* <RouteIcon /> */}
                </div>
                <div
                  className="form-check fixedct-right"
                  style={{ marginRight: "1rem" }}
                >
                  <i className="fa-solid fa-chevron-right"></i>
                </div>
              </span>
              <br />
              <span className="bt padder">Discuss about CSS</span>
            </div>
          </div>
          <div className="marg-t2">
            <div className="ticketStrip padderless bgc-orange t-white">
              <span className="em ht padder">
                JavaScript Forum
                <div
                  className="fixedct-left ticketStrip backicon  bgc-white"
                  style={{
                    backgroundImage: `url(${bImage})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    width: "30px",
                  }}
                >
                  {/* <RouteIcon /> */}
                </div>
                <div
                  className="form-check fixedct-right"
                  style={{ marginRight: "1rem" }}
                >
                  <i className="fa-solid fa-chevron-right"></i>
                </div>
              </span>
              <br />
              <span className="bt padder">Discuss about JavaScript</span>
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="student-grid1">
      {[viewChanger()]}
      <div className="ticketStrip rounder padder codetrail-bg t-white">
        <h3>
          Your Progress{" "}
          <span className="fixedct-right h1-h2">
            <i className="fa-solid fa-chart-pie"></i>
          </span>
        </h3>
        <div
          style={{ backgroundColor: "#FFEFE2" }}
          className="t-black rounder padder"
        >
          <div>
            <CalculateIcon sx={{ fontSize: "35px" }} />{" "}
            <h2 className="displayInline proger">465</h2>
            <span className="fixedct-right bt marg-t1">
              Last Week&nbsp;&nbsp;
              <i className="fa-solid fa-chevron-down"></i>
            </span>
          </div>
          <div>
            <p className="greyMatter ht">Count your tasks done</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tasks;
