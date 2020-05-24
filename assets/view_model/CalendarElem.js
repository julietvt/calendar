'use strict';

import CalendarHeadElem from "./CalendarHeadElem.js";
import CalendarBodyElem from "./CalendarBodyElem.js";

export default function (month) {
    const calendarTableElem = document.createElement("table");
    calendarTableElem.appendChild(CalendarHeadElem(month));
    calendarTableElem.appendChild(CalendarBodyElem(month));
    return calendarTableElem;
}