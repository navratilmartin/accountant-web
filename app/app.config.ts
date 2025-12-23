export default defineAppConfig({
  ui: {
    colors: {
      primary: 'blue',
      neutral: 'slate'
    },
    
    button: {
      slots: {
        base: 'rounded-lg'
      },
      variants: {
        size: {
          md: {
            base: 'text-sm px-4 py-2.5'
          },
          lg: {
            base: 'text-base px-5 py-3'
          }
        }
      }
    },
    
    input: {
      slots: {
        root: 'rounded-md'
      },
      variants: {
        size: {
          md: {
            root: 'text-sm',
            base: 'px-4 py-2'
          },
          lg: {
            base: 'px-4 py-2.5'
          }
        }
      },
      defaultVariants: {
        size: 'md'
      }
    },
    
    textarea: {
      slots: {
        root: 'rounded-md'
      },
      defaultVariants: {
        size: 'md'
      }
    },
    
    formGroup: {
      slots: {
        label: 'block font-medium text-gray-700 mb-1.5'
      }
    },
    
    checkbox: {
      slots: {
        root: 'rounded'
      },
      defaultVariants: {
        color: 'primary'
      }
    }
  }
})