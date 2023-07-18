/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./templates/views/**/*.hbs",
            "/templetes/**/*",
            "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {},
  },
  plugins: [require('flowbite/plugin')],
}
