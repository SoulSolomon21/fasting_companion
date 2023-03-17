import React, { createElement, useState } from 'react';
import "./Journal.css";

const Journal = () => {
  return (
    <div>
      <ul>
        <li>
          <a href="#">
            <h2> Week #1 </h2>
            <p> Your Thoughts </p>
          </a>
        </li>
        <li>
          <a href="#">
            <h2> Week #2 </h2>
            <p> Your Thoughts </p>
          </a>
        </li>
        <li>
          <a href="#">
            <h2> Week #3 </h2>
            <p> Your Thoughts </p>
          </a>
        </li>
        <li>
          <a href="#">
            <h2> Week #4 </h2>
            <p> Your Thoughts </p>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Journal