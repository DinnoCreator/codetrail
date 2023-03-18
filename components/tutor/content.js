import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import SearchIcon from "@mui/icons-material/Search";
import { InputAdornment } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import RouteIcon from "@mui/icons-material/Route";
import { useState } from "react";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers";
// import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import dynamic from "next/dynamic";
import Container from "@mui/material/Container";

const StudentContent = (props) => {
  // const [value, setValue] = React.useState([
  //   dayjs('2022-04-17'),
  //   dayjs('2022-04-21'),
  // ]);
  // Shows courses when searching
  const topCourses = [
    { title: "C" },
    { title: "C++" },
    { title: "C#" },
    { title: "Go" },
    { title: "Java" },
    { title: "JavaScript" },
    { title: "Lua" },
    { title: "Python" },
    { title: "PHP" },
    { title: "Ruby on rails" },
    { title: "Rust" },
    { title: "SQL" },
    { title: "Angular" },
    { title: "DJango" },
    { title: "Laravel" },
    { title: "NestJs" },
    { title: "NextJs" },
    { title: "NodeJs" },
    { title: "ReactJs" },
    { title: "VueJs" },
    { title: "MySQL" },
    { title: "PostgreSQL" },
    { title: "MongoDB" },
    { title: "Mongoose" },
  ];
  const html5 = `https://img.icons8.com/color/512/html-5--v1.png`;
  const css = `https://cdn1.iconfinder.com/data/icons/social-media-logos-7/64/css-3-512.png`;
  const bImage = `data:image/png;base64,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`;
  const profile = "https://edifyit.com.ng/images/me.jpeg";
  return (
    <div className="student-grid">
      <div className="student">
        <h2 className="normal">Welcome back, {props.name}</h2>
        <div className="marg-t2">
          <p className="center small em">Progress</p>
          <div className="ticketStrip padderless normal codetrail-bg t-white">
            <span className="em ht">
              Learn at your own pace
              <span className="fixedct-right">
                <RouteIcon />
              </span>
            </span>
            <br />
            <span className="bt">
              Set your study plan and growth with Codetrail
            </span>
          </div>
        </div>
        <div className="marg-t2 small">
          {/* <Container maxWidth="sm"> */}
            <div className="ticketStrip padderless bgc-white t-black">
              <span className="em ht">
                HTML
                <div
                  className="fixedct-right ticketStrip backicon  bgc-white"
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
              </span>
              <br />
              <span className="bt">16 Hrs taken/ 20Hrs</span>
            </div>
          {/* </Container> */}
        </div>
        <div className="marg-t2 normal">
          <div className="ticketStrip padderless bgc-white t-black">
            <span className="em ht">
              HTML
              <div
                className="fixedct-right ticketStrip backicon  bgc-white"
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
            </span>
            <br />
            <span className="bt">16 Hrs taken/ 20Hrs</span>
          </div>
        </div>
        <div className="marg-t2 small">
          {/* <Container maxWidth="sm"> */}
            <div className="ticketStrip padderless bgc-blue t-white">
              <span className="em ht">
                CSS
                <div
                  className="fixedct-right ticketStrip backicon  bgc-white"
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
              </span>
              <br />
              <span className="bt">2 Hrs taken/ 20Hrs</span>
            </div>
          {/* </Container> */}
        </div>
        <div className="marg-t2 normal">
          <div className="ticketStrip padderless bgc-blue t-white">
            <span className="em ht">
              CSS
              <div
                className="fixedct-right ticketStrip backicon  bgc-white"
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
            </span>
            <br />
            <span className="bt">2 Hrs taken/ 20Hrs</span>
          </div>
        </div>
        <div className="marg-t2 small">
          {/* <Container maxWidth="sm"> */}
            <div className="ticketStrip padderless bgc-orange t-white">
              <span className="em ht">
                JavaScript
                <div
                  className="fixedct-right ticketStrip backicon  bgc-white"
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
              </span>
              <br />
              <span className="bt">1 Hrs taken/ 20Hrs</span>
            </div>
          {/* </Container> */}
        </div>
        <div className="marg-t2 normal">
          <div className="ticketStrip padderless bgc-orange t-white">
            <span className="em ht">
              JavaScript
              <div
                className="fixedct-right ticketStrip backicon  bgc-white"
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
            </span>
            <br />
            <span className="bt">1 Hrs taken/ 20Hrs</span>
          </div>
        </div>
      </div>
      <div className="student">
        <h2 className="center small marg-b2">Welcome back, {props.name}</h2>

        {/* <Container maxWidth="sm"> */}
          <div className="bgc-white followSearch">
            <Autocomplete
              freeSolo
              id="free-solo-2-demo"
              disableClearable
              options={topCourses.map((option) => option.title)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Search Courses"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment
                        position="start"
                        classes={{ positionStart: "0px" }}
                        sx={{ color: "rgb(95, 76, 165)" }}
                      >
                        <SearchIcon />
                      </InputAdornment>
                    ),
                    ...params.InputProps,
                    type: "search",
                  }}
                  InputLabelProps={{ style: { color: "rgb(95, 76, 165)" } }}
                />
              )}
            />
          </div>
        {/* </Container> */}
        {/* <Container maxWidth="sm"> */}
          <div className="marg-t2 marg-b2 small">
            <div className="ticketStrip padderless codetrail-bg t-white">
              <span className="em ht">
                Learn at your own pace
                <span className="fixedct-right">
                  <RouteIcon />
                </span>
              </span>
              <br />
              <span className="bt">
                Set your study plan and growth with Codetrail
              </span>
            </div>
          </div>
        {/* </Container> */}
        <div className="marg-t1">
          <p className="center em">New Events</p>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar readOnly={true} defaultValue={dayjs("2022-04-17")} />
          </LocalizationProvider>
        </div>
      </div>
      <div className="student">
        <div className="fixedct-right normal">
          <IconButton
            size="large"
            aria-label="show 17 new notifications"
            color="inherit"
          >
            <Badge badgeContent={17} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>
        </div>

        <div className="ticketStrip marg-t4 padderless bgc-white t-black">
          <div
            className="fixedct-right ticketStrip  bgc-white"
            style={{
              backgroundImage: `url(${profile})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              width: "80px",
              height: "80px",
              display:"block"
            }}
          ></div>
          <div style={{
            display: "block"
          }}>
          <h1>Test Profile Section</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(StudentContent), { ssr: false });
