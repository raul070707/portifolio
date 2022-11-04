import { createGlobalStyle } from "styled-components";

interface GlobalProps {
  theme: {
    body: string;
    sidebar: string;
    primary: string;
    primaryLight: string;
    toggle: string;
    text: string;
  };
}

export default createGlobalStyle<GlobalProps>`
    * {
        margin: 0;
        padding: 0;
        border: none;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
    }

    :root {

        --body-color: ${(props) => props.theme.body};
        --sidebar-color: ${(props) => props.theme.sidebar};
        --primary-color: ${(props) => props.theme.primary};
        --primary-light-color: ${(props) => props.theme.primaryLight};
        --toggle-color: ${(props) => props.theme.toggle};
        --text-color: ${(props) => props.theme.text};


        --white: #ffffff;
        --black: #000000;

        --grey: #f5f5f5;
        --grey-100: #d9d9d9;
        --grey-300: #a6a6a6;
        --grey-500: #737373;
        --grey-700: #404040;
        --grey-900: #0d0d0d;

        --blue-100: #c9e0f5;
        --blue-300: #94c5eb;
        --blue-500: #0d9cd9;
        --blue-700: #015c94;
    }

    body {
        width: 100%;
        height: 100vh;
        background: var(--body-color);
        transition: all 0.2s ease;
        color: var(--text-color)
        background-size: cover;
        background-repeat: no-repeat;
    }
`;
