import { defineStyle, defineStyleConfig } from '@chakra-ui/react'

const thick = defineStyle({
    borderWidth: '5px', // change the width of the border
    borderStyle: "solid", // change the style of the border
    borderRadius: 5, 
    borderColor: '#525252',
})

export const dividerTheme = defineStyleConfig({
    variants: { thick },
})
