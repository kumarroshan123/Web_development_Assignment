import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { HStack } from "@chakra-ui/react"
import {
  AccordionItem,
  AccordionItemContent,
  AccordionItemTrigger,
  AccordionRoot,
} from "@/components/ui/accordion"
import { Box } from "@chakra-ui/react"
import { Flex } from '@chakra-ui/react'

const Demo = () => {
  return (
    <AccordionRoot collapsible defaultValue={["b"]}>
      {items.map((item, index) => (
        <AccordionItem key={index} value={item.value}>
          <AccordionItemTrigger>{item.title}</AccordionItemTrigger>
          <AccordionItemContent>{item.text}</AccordionItemContent>
        </AccordionItem>
      ))}
    </AccordionRoot>
  )
}

const items = [
  { value: "a", title: "First Item", text: "Some value 1..." },
  { value: "b", title: "Second Item", text: "Some value 2..." },
  { value: "c", title: "Third Item", text: "Some value 3..." },
]


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>helloe </h1>
     <Box border="1px solid black" background="tomato" width="100%" padding="4" color="white" >this is the box</Box>
     <HStack>
      <Flex gap="4" direction="column">
      <Button>Click me</Button>
      <Button>Click me</Button>
      </Flex>
    </HStack>
    <Demo />
    </>
  )
}

export default App
