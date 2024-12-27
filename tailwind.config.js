/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        aliceblue: "#eef2ff",
        primary: "#545f71",
        white: "#fff",
        secondary: "#9ba5b7",
        lightcoral: {
          "100": "#ff7a87",
          "200": "#fb7185",
        },
        lightsteelblue: "#c7d2fe",
        cornflowerblue: "#33aaff",
      },
      spacing: {},
      fontFamily: {
        "body-small": "Inter",
      },
      borderRadius: {
        "10xs": "3px",
      },
    },
    fontSize: {
      sm: "14px",
      base: "16px",
      smi: "13px",
      inherit: "inherit",
    },
    screens: {
      mq1825: {
        raw: "screen and (max-width: 1825px)",
      },
      mq925: {
        raw: "screen and (max-width: 925px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
