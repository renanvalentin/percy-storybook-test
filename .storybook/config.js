import { configure, addParameters } from '@storybook/react'
import requireContext from 'require-context.macro'

// automatically import all files ending in *.stories.js
const req = requireContext('../src/', true, /\.stories\.(js|tsx)$/)
configure(req, module)

addParameters({
  percy: {
    skip: true,
    widths: [1280],
  },
})
