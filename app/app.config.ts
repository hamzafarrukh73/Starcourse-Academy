export default defineAppConfig({
  ui: {
    header: {
      slots: {
        root: 'flex items-center bg-transparent backdrop-blur-none border-none'
      }
    },
    main: {
      base: 'grow grid min-h-0 h-[-ui-main-height]'
    },
    footer: {
      slots: {
        root: 'grid items-center '
      }
    },
    page: {
      slots: {
        root: 'p-4 lg:p-8'
        // center: 'grow flex flex-col'
      }
    },
    // pageHeader: {
    //   slots: {
    //     root: 'mx-4 lg:mx-8'
    //   }
    // },
    pageBody: {
      base: 'p-0 m-0 py-4 lg:py-8 '
    },
    colors: {
      primary: 'yellow',
      secondary: 'slate',
      neutral: 'neutral'
    }
  }
})
