/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cc: {
          // Custom Colors

          text: '#232629',
          'text-dark': '#0C0D0E',
          'text-ui': '#525960',
          'text-link': '#0074CC',
          'text-link-hover': '#0A95FF',

          red: '#C22E32',
          background: '#F1F2F3',
          orange: '#F48225',
          green: '#2F6F44',

          tag: '#E1ECF4',
          'tag-hover': '#D0E3F1',
          'tag-text': '#39739D',

          'input-border': '#BABFC4',
          'input-border-click': '#59A4DE',
          'input-effect': '#BABFC4',

          'logo-hover': '#E3E6E8',
          footer: '#232629',
          border: '#D6D9DC',

          button: {
            'header-hover': '#D6D9DC',

            white: '#FFFFFF',
            'white-border': '#9FA6AD',
            'white-hover': '#F8F9F9',
            'white-click': '#E3E6E8',
            'white-effect': '#E9E9E9',
            'white-text': '#525960',

            sky: '#E1ECF4',
            'sky-border': '#7AA7C7',
            'sky-hover': '#B3D3EA',
            'sky-click': '#A0C8E4',
            'sky-effect': '#D9EAF7',
            'sky-text': '#39739D',

            blue: '#0A95FF',
            'blue-border': '#0A95FF',
            'blue-hover': '#0074CC',
            'blue-click': '#0063BF',
            'blue-effect': '#D8EAF7',
            'blue-text': '#FFFFFF',

            aside: '#FFFFFF',
            'aside-active': '#F1F2F3',
            'aside-text': '#838C95',
            'aside-text-hover': '#0C0D0E',
            'aside-text-active': '#0C0D0E',
          },

          icon: {
            search: '#838C95',
            nav: '#525960',
          },
        },
      },
    },
  },
  plugins: [],
};
