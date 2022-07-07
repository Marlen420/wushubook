import React, { Fragment } from "react";
// import PropTypes from "prop-types";
import { formatDistance } from 'date-fns';
import ruLocale from "date-fns/locale/ru";
import { now } from "lodash";

const Time = ({ date }) =>
    // console.log("date: ", date)
    <Fragment> {formatDistance(new Date(), date, { locale: ruLocale, addSuffix: true })} </Fragment >



// Time.propTypes = {   
//   date: PropTypes.string
// };

export default Time;