import React from 'react';
import styled from 'styled-components';

const Switch = ({ onToggle }) => {
  return (
    <StyledWrapper>
      <label className="switch">
        <input type="checkbox" onChange={onToggle} />
        <span className="slider">
          <span className="circle" />
        </span>
      </label>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .switch {
    font-size: 10px;
    position: relative;
    display: inline-block;
    width: 3em;
    height: .5em;
  }

  /* Hide default HTML checkbox */
  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  /* The slider */
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #D4D4D8;
    transition: .4s;
    border-radius: 10px;
    display: flex;
    align-items: center;
  }

  .slider .circle {
    background-color: #D4D4D8;
    height: 3em;
    width: 3em;
    border-radius: 50%;
    position: absolute;
    left: 0;
    transform: translateX(-50%);
    transition: .4s;
  }

  .slider .circle::before {
    position: absolute;
    content: "";
    height: 2.3em;
    width: 2.3em;
    border-radius: 50%;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: rgb(182, 182, 182);
    transition: .4s;
  }

  .slider .circle::after {
    content: '';
    background-color: #615FFF;
    height: 1.7em;
    width: 1.7em;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: .4s;
  }

  input:checked + .slider .circle {
    transform: translateX(2em);
    transition: .4s;
  }

  input:checked + .slider .circle::before {
    background-color: #615FFF;
    transition: .4s;
  }

  input:checked + .slider .circle::after {
    width: 0;
    height: 0;
    transition: .4s;
  }npm run dev
  
`;

export default Switch;
