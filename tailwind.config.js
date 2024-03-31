/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
      screens: {
        sm: '780px',
        md: '880px',
        fd: '1024px',
        xd: '1330px',
        lg: '1530px',
        xl: '1700px',
    },
		extend: {},
	},
	plugins: [],
};
