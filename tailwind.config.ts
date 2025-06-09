
const config = {
    content: [
        './index.html',
        './src/**/*.{ts,tsx,js,jsx,html}',
    ],
    theme: {
        extend: {
            animation: {
                'fade-in': 'fadeIn 0.3s ease-in-out',
                'slide-up': 'slideUp 0.3s ease-out',
            }
        }
    },
    plugins: [],
}
export default config
