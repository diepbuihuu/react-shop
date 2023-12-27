import styled from 'styled-components/macro';

import CB from 'commons/Checkbox';

export const Container = styled.div``;

export const Checkbox = styled(CB)`
  display: inline-block;
  margin-bottom: 10px;

  /* Customize the label (the container) */
  label {
    display: inline-block;
    position: relative;
    cursor: pointer;
    font-size: 22px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    width: 100px;
    height: 35px;
    font-size: 0.8em;
    margin-bottom: 8px;
    margin-right: 8px;
    border-radius: 5px;
    line-height: 35px;
    text-align: center;
    background-color: #ececec;

    /* On mouse-over, add a border with the primary color */
    &:hover input ~ .checkmark {
      border: 1px solid ${({ theme }) => theme.colors.primary};
    }

    input:focus-visible ~ .checkmark {
      box-sizing: border-box;
      line-height: 30px;
      border: 3px solid ${({ theme }) => theme.colors.secondary};
    }

    /* When the checkbox is checked, add the primary color to background */
    & input:checked ~ .checkmark {
      background-color: ${({ theme }) => theme.colors.primary};
      color: #ececec;
    }

    /* Show the checkmark when checked */
    & input:checked ~ .checkmark:after {
      display: block;
    }

    input {
      position: absolute;
      opacity: 0;
      cursor: pointer;
    }

    /* Create a custom checkbox */
    .checkmark {
      position: absolute;
      width: 100%;
      top: 0;
      left: 0;
      height: 35px;
      font-size: 0.8em;
      box-sizing: border-box;
      line-height: 35px;
      text-align: left;
      padding-left: 15px;
      color: ${({ theme }) => theme.colors.primary};


      border: 1px solid transparent;
    }
  }
`;

export const Title = styled.h4`
  margin-top: 2px;
  margin-bottom: 20px;
`;
