module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        colors: {
          // 'proaince': '#0b48ff',
          'proaince': '#2c65f6',
          'aigent': '#008000',
          'surface': '#F2F5F8',
          'surfaceinverse': '#020617',
          'cardbg': '#f9f9f926',
          'primary': '#020617',
          'secondary': '#324158',
          'tertiary': '#90A2B9',
        },
        keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
          },
           typing: {
            "0%": {
              width: "0%",
              visibility: "hidden"
            },
            "100%": {
              width: "100%"
            }
          },
          blink: {
            "50%": {
              borderColor: "transparent"
            },
            "100%": {
              borderColor: "black"
            }
          }
        },
        animation: {
          'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
          typing: "typing 5s steps(60)  alternate, blink .7s infinite"
        }
      }
    },
    plugins: [],
  };