import {
  Center,
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Heading
} from '@chakra-ui/react'

export default function Element() {
  return (
    <><>
    <Center>
     <Heading>Contactez-Nous </Heading>
    </Center>
    <Box my={8} textAlign='left'>
      <form>
 
        <FormControl>
          <FormLabel>Nom :
          </FormLabel>
          <Input type='text' placeholder='Entrez votre nom' />
        </FormControl>
        <FormControl>
          <FormLabel>Email :
           </FormLabel>
          <Input type='email' placeholder='Entrez votre email' />
        </FormControl>
           <FormControl>
          <FormLabel>Téléphone :
          </FormLabel>
          <Input type='number' placeholder='Entrez votre numéro de téléphone ' />
        </FormControl>
        <FormControl>
          <FormLabel>Message :</FormLabel>
          <Textarea type='textarea' placeholder='Entrez votre message' />
        </FormControl>
 
     <Button  variantColor="blue" type="submit" colorScheme='blue' mt={4} >Envoyer</Button>

        
      </form>
    </Box>
    
    </></>
  )
}

