export default defineAppConfig({
  ui: {
    primary: 'blue',
    gray: 'slate',
    
    // Custom component styling
    button: {
      rounded: 'rounded-md',
      font: 'font-medium',
      size: {
        md: 'text-sm px-4 py-2.5',
        lg: 'text-base px-5 py-3'
      },
      default: {
        size: 'md',
        color: 'primary'
      }
    },
    
    input: {
      rounded: 'rounded-md',
      size: {
        md: 'text-sm px-4 py-2',
        lg: 'px-4 py-2.5'
      },
      default: {
        size: 'md'
      }
    },
    
    textarea: {
      rounded: 'rounded-md',
      default: {
        size: 'md'
      }
    },
    
    formGroup: {
      label: {
        base: 'block font-medium text-gray-700 mb-1.5'
      }
    },
    
    checkbox: {
      rounded: 'rounded',
      default: {
        color: 'primary'
      }
    }
  }
})