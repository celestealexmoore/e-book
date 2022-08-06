import { useEffect, useState } from "react";
import "../assets/css-styles/preferencesHeader.css";
import { BsChevronUp } from "react-icons/bs";
import { BsChevronDown } from "react-icons/bs";
import { useTheme } from './ThemeProvider';

export default function PreferencesHeader() {
  const [upArrow, setUpArrow] = useState(false);

  const {theme, setTheme} = useTheme();
  console.log(theme)

  return (
    <div className="preferencesParent" >
      {upArrow ? (
        <div className="preferencesContentParent">
          <div id="settingsSentence" className="settingsSentence" style={theme === "dark" ? {color: "gold"} : null}>
            I prefer to read:
          </div>

          <div id="checkWrapper" className="checkWrapper">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              ></input>
              <label className="form-check-label">
                Pages Scrolling Up and Down
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
              ></input>
              <label className="form-check-label">
                Pages Flipping Left to Right
              </label>
            </div>
          </div>

          <div id="modeSwitch" className="form-check form-switch modeSwitch">
            <input
              className="form-check-input"
              type="checkbox"
              id="flexSwitchCheckDefault"
              onChange={() => setTheme("dark")}
              // value={true}
            ></input>
            <label className="form-check-label">Light mode</label>
          </div>

          <div className="form-outline preferencesSearchBar">
            <input
              type="search"
              id="form1"
              className="form-control shadow bg-white rounded"
              placeholder="Search page #"
            />
          </div>
        </div>
      ) : null}

      <button className="pull-down" onClick={() => setUpArrow(!upArrow)}>
        {upArrow ? <BsChevronUp size="20" /> : <BsChevronDown size="20" />}
      </button>
    </div>
  );
}
