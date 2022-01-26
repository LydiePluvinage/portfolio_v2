module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        main: "url('/resources/gradienta-coj7UZ7iN60-unsplash-scaled.jpg')",
      }),
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        playfair: ['"Playfair display"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
