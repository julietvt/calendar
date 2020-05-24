'use strict';

import model from '../model/index.js';
import CalendarElem from "./CalendarElem.js";

document.body.appendChild(CalendarElem(new model.Month(new Date())));

