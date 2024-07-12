/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      height: {
        screen: ['100vh /* fallback for Opera, IE and etc. */', '100dvh'],
      },
      minHeight: {
        screen: ['100vh /* fallback for Opera, IE and etc. */', '100dvh'],
      },
      maxHeight: {
        screen: ['100vh /* fallback for Opera, IE and etc. */', '100dvh'],
      },
      colors: {
        light: {
          primary: '#65558F',
          surfaceTint: '#6750A4',
          onPrimary: '#FFFFFF',
          primaryContainer: '#EADDFF',
          onPrimaryContainer: '#21005D',
          secondary: '#625B71',
          onSecondary: '#FFFFFF',
          secondaryContainer: '#E8DEF8',
          onSecondaryContainer: '#1D192B',
          tertiary: '#7D5260',
          onTertiary: '#FFFFFF',
          tertiaryContainer: '#FFD8E4',
          onTertiaryContainer: '#31111D',
          error: '#B3261E',
          onError: '#FFFFFF',
          errorContainer: '#F9DEDC',
          onErrorContainer: '#410E0B',
          background: '#FEF7FF',
          onBackground: '#1D1B20',
          surface: '#FEF7FF',
          onSurface: '#1D1B20',
          surfaceVariant: '#E7E0EC',
          onSurfaceVariant: '#49454F',
          outline: '#79747E',
          outlineVariant: '#CAC4D0',
          shadow: '#000000',
          scrim: '#000000',
          inverseSurface: '#322F35',
          inverseOnSurface: '#F5EFF7',
          inversePrimary: '#D0BCFF',
          primaryFixed: '#EADDFF',
          onPrimaryFixed: '#21005D',
          primaryFixedDim: '#D0BCFF',
          onPrimaryFixedVariant: '#4F378B',
          secondaryFixed: '#E8DEF8',
          onSecondaryFixed: '#1D192B',
          secondaryFixedDim: '#CCC2DC',
          onSecondaryFixedVariant: '#4A4458',
          tertiaryFixed: '#FFD8E4',
          onTertiaryFixed: '#31111D',
          tertiaryFixedDim: '#EFB8C8',
          onTertiaryFixedVariant: '#633B48',
          surfaceDim: '#DED8E1',
          surfaceBright: '#FEF7FF',
          surfaceContainerLowest: '#FFFFFF',
          surfaceContainerLow: '#F7F2FA',
          surfaceContainer: '#F3EDF7',
          surfaceContainerHigh: '#ECE6F0',
          surfaceContainerHighest: '#E6E0E9',
        },
        dark: {
          primary: '#D0BCFE',
          surfaceTint: '#D0BCFF',
          onPrimary: '#381E72',
          primaryContainer: '#4F378B',
          onPrimaryContainer: '#EADDFF',
          secondary: '#CCC2DC',
          onSecondary: '#332D41',
          secondaryContainer: '#4A4458',
          onSecondaryContainer: '#E8DEF8',
          tertiary: '#EFB8C8',
          onTertiary: '#492532',
          tertiaryContainer: '#633B48',
          onTertiaryContainer: '#FFD8E4',
          error: '#F2B8B5',
          onError: '#601410',
          errorContainer: '#8C1D18',
          onErrorContainer: '#F9DEDC',
          background: '#141218',
          onBackground: '#E6E0E9',
          surface: '#141218',
          onSurface: '#E6E0E9',
          surfaceVariant: '#49454F',
          onSurfaceVariant: '#CAC4D0',
          outline: '#938F99',
          outlineVariant: '#49454F',
          shadow: '#000000',
          scrim: '#000000',
          inverseSurface: '#E6E0E9',
          inverseOnSurface: '#322F35',
          inversePrimary: '#6750A4',
          primaryFixed: '#EADDFF',
          onPrimaryFixed: '#21005D',
          primaryFixedDim: '#D0BCFF',
          onPrimaryFixedVariant: '#4F378B',
          secondaryFixed: '#E8DEF8',
          onSecondaryFixed: '#1D192B',
          secondaryFixedDim: '#CCC2DC',
          onSecondaryFixedVariant: '#4A4458',
          tertiaryFixed: '#FFD8E4',
          onTertiaryFixed: '#31111D',
          tertiaryFixedDim: '#EFB8C8',
          onTertiaryFixedVariant: '#633B48',
          surfaceDim: '#141218',
          surfaceBright: '#3B383E',
          surfaceContainerLowest: '#0F0D13',
          surfaceContainerLow: '#1D1B20',
          surfaceContainer: '#211F26',
          surfaceContainerHigh: '#2B2930',
          surfaceContainerHighest: '#36343B',
        },
      },
    },
  },
  plugins: [],
};
