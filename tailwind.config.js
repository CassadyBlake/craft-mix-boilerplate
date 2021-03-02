module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    aspectRatio: { // defaults to {}
      'none': 0,
      'square': [1, 1], // or 1 / 1, or simply 1
      '16/9': [16, 9],  // or 16 / 9
      '4/3': [4, 3],    // or 4 / 3
      '21/9': [21, 9],  // or 21 / 9
    },
    colors: {
      gray: '#969696',
      blue: {
        DEFAULT: '#253D5B',
        light: '#67697C',
        dark: '#67697C'
      },
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    fontSize: {
      xxs: "0.75rem", // 12px
      xs: "0.875rem", // 14px
      sm: "1rem", // 16px
      base: "1.125rem", // 18px
      lg: "1.3125rem", // 21px
      xl: "1.25rem", // 20px
      "2xl": "1.5rem", // 24px
      "3xl": "2.125rem", // 34px
      "4xl": "3rem", // 48px
      "5xl": "3.75rem", // 60px
      "6xl": "4.5rem", // 72px
      caption: "0.75rem", // 12px
      overline: "0.75rem", // 12px
    },
    textStyles: theme => ({ // defaults to {}
      heading: {
        output: false, // this means there won't be a "heading" component in the CSS, but it can be extended
        fontWeight: theme('fontWeight.bold'),
        lineHeight: theme('lineHeight.tight'),
      },
      h1: {
        extends: 'heading', // this means all the styles in "heading" will be copied here; "extends" can also be an array to extend multiple text styles
        fontSize: theme('fontSize.5xl'),
        '@screen sm': {
          fontSize: theme('fontSize.6xl'),
        },
      },
      h2: {
        extends: 'heading',
        fontSize: theme('fontSize.4xl'),
        '@screen sm': {
          fontSize: theme('fontSize.5xl'),
        },
      },
      h3: {
        extends: 'heading',
        fontSize: theme('fontSize.4xl'),
      },
      h4: {
        extends: 'heading',
        fontSize: theme('fontSize.3xl'),
      },
      h5: {
        extends: 'heading',
        fontSize: theme('fontSize.2xl'),
      },
      h6: {
        extends: 'heading',
        fontSize: theme('fontSize.xl'),
      },
      link: {
        fontWeight: theme('fontWeight.bold'),
        color: theme('colors.blue.400'),
        '&:hover': {
          color: theme('colors.blue.600'),
          textDecoration: 'underline',
        },
      },
      richText: {
        fontWeight: theme('fontWeight.normal'),
        fontSize: theme('fontSize.base'),
        lineHeight: theme('lineHeight.relaxed'),
        '> * + *': {
          marginTop: '1em',
        },
        'h1': {
          extends: 'h1',
        },
        'h2': {
          extends: 'h2',
        },
        'h3': {
          extends: 'h3',
        },
        'h4': {
          extends: 'h4',
        },
        'h5': {
          extends: 'h5',
        },
        'h6': {
          extends: 'h6',
        },
        'ul': {
          listStyleType: 'disc',
        },
        'ol': {
          listStyleType: 'decimal',
        },
        'a': {
          extends: 'link',
        },
        'b, strong': {
          fontWeight: theme('fontWeight.bold'),
        },
        'i, em': {
          fontStyle: 'italic',
        },
      },
    }),
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-typography')({
      // all these options default to the values specified here
      ellipsis: true,         // whether to generate ellipsis utilities
      hyphens: true,          // whether to generate hyphenation utilities
      kerning: true,          // whether to generate kerning utilities
      textUnset: true,        // whether to generate utilities to unset text properties
      componentPrefix: 'c-',  // the prefix to use for text style classes
    }),
    require('tailwindcss-aspect-ratio'),
    require("tailwindcss-rfs"),
  ],
}

// /**
//  * Docs
//  * https://tailwindcss.com/docs/configuration
//  *
//  * Default configuration
//  * https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
//  */

// const colors = require('tailwindcss/colors')

// module.exports = {
//   purge: {
//     content: [
//       './templates/**/*.twig',
//       './src/**/*.html',
//       './src/**/*.php',
//       './src/**/*.liquid',
//       './src/**/*.js',
//     ],
//   },
//   theme: {
//     screens: {
//       'sm': '640px',
//       'md': '768px',
//       'lg': '1024px',
//       'xl': '1280px',
//       '2xl': '1536px',
//     },
//     aspectRatio: { // defaults to {}
//       'none': 0,
//       'square': [1, 1], // or 1 / 1, or simply 1
//       '16/9': [16, 9],  // or 16 / 9
//       '4/3': [4, 3],    // or 4 / 3
//       '21/9': [21, 9],  // or 21 / 9
//     },
//     colors: {
//       gray: '#969696',
//       blue: {
//         DEFAULT: '#253D5B',
//         light: '#67697C',
//         dark: '#67697C'
//       },
//     },
//     fontFamily: {
//       sans: ['Graphik', 'sans-serif'],
//       serif: ['Merriweather', 'serif'],
//     },
//     fontSize: {
//       xxs: "0.75rem", // 12px
//       xs: "0.875rem", // 14px
//       sm: "1rem", // 16px
//       base: "1.125rem", // 18px
//       lg: "1.3125rem", // 21px
//       xl: "2rem", // 32px
//       sub1: "1.5rem", // 24px
//       sub2: "1.125rem", // 18px
//       h6: "1.25rem", // 20px
//       h5: "1.5rem", // 24px
//       h4: "2.125rem", // 34px
//       h3: "3rem", // 48px
//       h2: "3.75rem", // 60px
//       h1: "4.5rem", // 72px
//       caption: "0.75rem", // 12px
//       overline: "0.75rem", // 12px
//     },
//     textStyles: theme => ({ // defaults to {}
//       heading: {
//         output: false, // this means there won't be a "heading" component in the CSS, but it can be extended
//         fontWeight: theme('fontWeight.bold'),
//         lineHeight: theme('lineHeight.tight'),
//       },
//       h1: {
//         extends: 'heading', // this means all the styles in "heading" will be copied here; "extends" can also be an array to extend multiple text styles
//         fontSize: theme('fontSize.5xl'),
//         '@screen sm': {
//           fontSize: theme('fontSize.6xl'),
//         },
//       },
//       h2: {
//         extends: 'heading',
//         fontSize: theme('fontSize.4xl'),
//         '@screen sm': {
//           fontSize: theme('fontSize.5xl'),
//         },
//       },
//       h3: {
//         extends: 'heading',
//         fontSize: theme('fontSize.4xl'),
//       },
//       h4: {
//         extends: 'heading',
//         fontSize: theme('fontSize.3xl'),
//       },
//       h5: {
//         extends: 'heading',
//         fontSize: theme('fontSize.2xl'),
//       },
//       h6: {
//         extends: 'heading',
//         fontSize: theme('fontSize.xl'),
//       },
//       link: {
//         fontWeight: theme('fontWeight.bold'),
//         color: theme('colors.blue.400'),
//         '&:hover': {
//           color: theme('colors.blue.600'),
//           textDecoration: 'underline',
//         },
//       },
//       richText: {
//         fontWeight: theme('fontWeight.normal'),
//         fontSize: theme('fontSize.base'),
//         lineHeight: theme('lineHeight.relaxed'),
//         '> * + *': {
//           marginTop: '1em',
//         },
//         'h1': {
//           extends: 'h1',
//         },
//         'h2': {
//           extends: 'h2',
//         },
//         'h3': {
//           extends: 'h3',
//         },
//         'h4': {
//           extends: 'h4',
//         },
//         'h5': {
//           extends: 'h5',
//         },
//         'h6': {
//           extends: 'h6',
//         },
//         'ul': {
//           listStyleType: 'disc',
//         },
//         'ol': {
//           listStyleType: 'decimal',
//         },
//         'a': {
//           extends: 'link',
//         },
//         'b, strong': {
//           fontWeight: theme('fontWeight.bold'),
//         },
//         'i, em': {
//           fontStyle: 'italic',
//         },
//       },
//     }),
//     extend: {
      
//     }
//   },
//   variants: {},
//   plugins: [
//     require('tailwindcss-typography'),
//     require('tailwindcss-aspect-ratio'),
//     require("tailwindcss-rfs"),
//   ],
// }