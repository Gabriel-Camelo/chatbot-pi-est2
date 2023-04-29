/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'mobile': '425px', // tela pequena
      'desktop': '1024px', // tela grande
    },
    minHeight: {
      '10': '40px',
    },
    extend: {
      backgroundImage: {
        'ground-img': "url('/public/img/background.png')",
        'ground-login': "url('/public/img/login/background-login.png')",
      },
      colors: {
        'message1': '#0088CC',
        'message2': '#556080',
        'chat-header': '#30D6CE',
        'text-box': '#E8E8E8',
        'footer': '#187236',
        'letter': '#014e1c',
        'user-logo': '#24B0A0',
        'login-label': '#187236',
        'buttom': '#3A9E5C',
      },
      spacing: {
        '3/10': '30%',
        '1/5': '20%',
        '1/10': '10%',
        'total': '1%',
        'middle-login': '37.5%',
        '22': '88px',
      },
      fontFamily: {
        'exo2': ['Almarai', 'Antic Didone', 'sans-serif'],
        'oswald': ['Oswald', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

