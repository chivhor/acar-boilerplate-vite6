/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./index.html", // Include your HTML files
    "./src/**/*.{js,ts,jsx,tsx}", // JavaScript/React/TypeScript files
    "./src/**/*.{html,js}", // Ensure HTML files are included
    "./src/assets/**/*.{css,html,js}", // Ensure asset CSS files are included
  ],
  theme: {
  	extend: {
  		fontSize: {
  			xs: '0.75rem',
  			sm: '0.875rem',
  			base: '1rem',
  			lg: '1.125rem',
  			xl: '1.5rem',
  			'2xl': '2rem',
  			'3xl': '3rem',
  			'4xl': '4.25rem',
  			'5xl': '5.875rem'
  		},
  		colors: {
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			},
  			sidebar: {
  				DEFAULT: 'hsl(var(--sidebar-background))',
  				foreground: 'hsl(var(--sidebar-foreground))',
  				primary: 'hsl(var(--sidebar-primary))',
  				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
  				accent: 'hsl(var(--sidebar-accent))',
  				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
  				border: 'hsl(var(--sidebar-border))',
  				ring: 'hsl(var(--sidebar-ring))'
  			}
  		},
  		fontFamily: {
  			body: [
  				'Noto Sans',
  				'Kantumruy Pro'
  			],
  			heading: [
  				'Noto Sans',
  				'Moul'
  			]
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: 0
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: 0
  				}
  			},
  			fadeInDown: {
  				'0%': {
  					opacity: 0,
  					transform: 'translateY(-20px)'
  				},
  				'100%': {
  					opacity: 1,
  					transform: 'translateY(0)'
  				}
  			},
  			'infinite-scroll': {
  				to: {
  					transform: 'translateX(-50%)'
  				}
  			},
  			'infinite-scroll-reverse': {
  				from: {
  					transform: 'translateX(-50%)'
  				}
  			},
  			'float-bob-y': {
  				'0%': {
  					transform: 'translateY(-20px)'
  				},
  				'50%': {
  					transform: 'translateY(-10px)'
  				},
  				'100%': {
  					transform: 'translateY(-20px)'
  				}
  			},
  			'float-bob-x': {
  				'0%': {
  					transform: 'translateX(-20px)'
  				},
  				'50%': {
  					transform: 'translateX(-10px)'
  				},
  				'100%': {
  					transform: 'translateX(-20px)'
  				}
  			},
  			'rotate-me': {
  				'0%': {
  					transform: 'rotate(0deg)'
  				},
  				'100%': {
  					transform: 'rotate(360deg)'
  				}
  			},
  			ripple: {
  				'70%': {
  					boxShadow: '0 0 0 40px rgba(10, 165, 205, 0)'
  				},
  				'100%': {
  					boxShadow: '0 0 0 0 rgba(10, 165, 205, 0)'
  				}
  			},
  			'top-bottom-from-top': {
  				'49%': {
  					transform: 'translateY(-100%)'
  				},
  				'50%': {
  					opacity: '0',
  					transform: 'translateY(100%)'
  				},
  				'51%': {
  					opacity: '1'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out',
  			fadeInDown: 'fadeInDown 1s both 0s',
  			'infinite-scroll': 'infinite-scroll 40s linear infinite',
  			'infinite-scroll-reverse': 'infinite-scroll-reverse 40s linear infinite',
  			'float-bob-y': 'float-bob-y 2s linear infinite',
  			'rotate-me': 'rotate-me 25s linear infinite',
  			'float-bob-x': 'float-bob-x 2s linear infinite',
  			ripple: 'ripple 3s infinite',
  			'top-bottom-from-top': 'top-bottom-from-top 0.5s forwards'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}

