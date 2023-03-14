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
    <div className="student-grid">
      <div>
         <h2 className="center small">Welcome back, {props.name}</h2>
         <h2 className="normal">Welcome back, {props.name}</h2>
        <div className="marg-t2 normal">
          <div className="ticketStrip padder codetrail-bg t-white">
            <span className="em ht">
              Your own education way
              <span className="fixedct-right">
                <RouteIcon />
              </span>
            </span>
            <br />
            <span className="bt">
              Set your study plan and growth with Codtrail
            </span>
          </div>
        </div>
      </div>
      <div>
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
        <div className="marg-t2 small">
          <div className="ticketStrip padder codetrail-bg t-white">
            <span className="em ht">
              Your own education way
              <span className="fixedct-right">
                <RouteIcon />
              </span>
            </span>
            <br />
            <span className="bt">
              Set your study plan and growth with Codtrail
            </span>
          </div>
        </div>
      </div>
      <div>
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
        <div className="marg-t1">
        <p className="center">Next event</p>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateCalendar readOnly={true} defaultValue={dayjs("2022-04-17")} />
        </LocalizationProvider>
        </div>
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(StudentContent), { ssr: false });
