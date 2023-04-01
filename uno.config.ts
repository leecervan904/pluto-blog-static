import { defineConfig } from 'unocss'

export default defineConfig({
  theme: {
    colors: {
      pane: 'var(--bg-color)',
      veryCool: '#0000ff', // class="text-very-cool"
      brand: {
        primary: 'hsla(var(--hue, 217), 78%, 51%)', //class="bg-brand-primary"
      },
    },
    breakpoints: {
      sm: '640px',  // w-full mobile, toc: 0
      md: '960px',  // w-full, toc: 240 content: auto, max-width: 1200
      lg: '1280px', // w-1200, toc: 240 content: auto
      xl: '1600px', // w-1440, toc: 240 content: auto
    }
  },
  rules: [
    [
      /^lee-shadow$/,
      () => ({
        'box-shadow': `1px 1px 8px 1px var(--shadow-color)`,
      }),
    ],
    [
      /^lee-indent-(.*)em$/,
      ([, c]) => ({
        'text-indent': `${c}em`,
      }),
    ],
    [
      /^lee-indent-(.*)px$/,
      ([, c]) => ({
        'text-indent': `${c}px`,
      }),
    ],
    [
      /^link-active$/,
      () => ({
        'background-color': 'bg-red-400',
      }),
    ],
    [
      /^ellipsis$/,
      () => ({
        overflow: 'hidden',
        'white-space': 'no-wrap',
        'text-overflow': 'ellipsis',
      }),
    ],
    [
      /^multi-ellipsis-(\d+)$/,
      (match) => ({
        overflow: 'hidden',
        'text-overflow': 'ellipsis',
        display: '-webkit-box',
        '-webkit-line-clamp': match[1],
        '-webkit-box-orient': 'vertical',
      }),
    ],
    [
      /^text-(.*)$/,
      ([, c], { theme }) => {
        if (theme.colors[c]) return { color: theme.colors[c] }
      },
    ],
  ],
  shortcuts: {
    // shortcuts to multiple utilities
    btn: 'py-2 px-4 font-semibold rounded-lg shadow-md',
    'btn-green': 'text-white bg-green-500 hover:bg-green-700',
    // single utility alias
    red: 'text-red-100',
  },
})
