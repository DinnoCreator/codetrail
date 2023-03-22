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
import Person2Icon from "@mui/icons-material/Person2";
import Tasks from "../student/tasks";
import { html5, css, bImage, profile } from "@/webImages/webImages";

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
  
  return (
    <>
      <div className="student-grid">
        <div className="student">
          <h2>Welcome back, {props.name}</h2>
          <div className="marg-t2">
            <div className="ticketStrip padder codetrail-bg t-white">
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
          <div className="marg-t2">
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
          <div className="marg-t2">
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
          <div className="marg-t2">
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
        <div className="student marg-t1">
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
          <div className="marg-t1">
            <p className="center em">New Events</p>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateCalendar
                readOnly={true}
                defaultValue={dayjs("2023-04-17")}
              />
            </LocalizationProvider>
          </div>
        </div>
        <div className="student marg-t1">
          <div className="fixedct-right">
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

          <div>
            <Container maxWidth="sm">
              <Container maxWidth="sm">
                <div className="ticketStrip marg-t4 padderless bgc-white t-black">
                  <div
                    className="flex-container marg-t2 ticketStrip  bgc-white"
                    style={{
                      backgroundImage: `url(${profile})`,
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                      width: "115px",
                      height: "95px",
                    }}
                  ></div>
                  {/* <div style={{
            display: "block"
          }}> */}
                  <h3 className="center" style={{ marginBottom: "0" }}>
                    {props.name}
                  </h3>
                  <p className="greyMatter center" style={{ marginTop: "0"}}>
                    Student
                  </p>
                  <div className="flex-container">
                    <button className=" btnct btnct-codetrail ht btnct-full">
                      <i className="fa-solid fa-user"></i>&nbsp;&nbsp; Profile
                    </button>
                  </div>
                  {/* </div> */}
                </div>
              </Container>
            </Container>
          </div>
        </div>
      </div>
      <Tasks/>
    </>
  );
};

export default dynamic(() => Promise.resolve(StudentContent), { ssr: false });
