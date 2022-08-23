/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      border: '#282828',
      white: '#FFF',
      placeholder: '#ABABAB',
      black: '#000',
      gray: '#7D7D7D',
      darkred: '#d01a1a'
    },
    fontSize: {
      base: ['16px', '24px'],
      xs: ['12px', '18px'],
      sm: ['14px', '21px'],
      xl: ['19px', '28px'],
      xxs: ['10px', '16px'],
      '2xl': ['25px', '37.5px'],
      '3xl': ['31px', '46.5px']
    },
    screens: {
      xxl: { max: '1440px' },
      xl: { max: '1240px' },
      lg: { max: '1024px' },
      md: { max: '768px' },
      sm: { max: '520px' }
    },
    borderRadius: {
      none: '0px',
      DEFAULT: '10px',
      input: '6px'
    },
    extend: {
      backgroundImage: {
        'login-image': "url('@/assets/images/small-team.png')"
      }
    }
  },
  plugins: []
}
