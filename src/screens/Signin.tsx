import { VStack, Heading, Icon, useTheme  } from 'native-base';

import { Envelope, Key } from 'phosphor-react-native';

import Logo from '../assets/logo_primary.svg'

import { Input } from '../components/Input';
import { Button } from '../components/Button';

export default function Signin(){
  
  const {colors } =useTheme();

   return(
     < VStack flex={1} alignItems="center" bg='gray.600' px={8} pt={24} >

      <Logo/>

      < Heading color='white' fontSize='xl' mt={20} mb={6}>Acesse sua conta</ Heading >

        <Input
        placeholder='Email'
        mb={4}
        InputLeftElement={<Icon as={<Envelope color={colors.gray[300]} />} ml={2} />}
        />

        <Input
        mb={8}
        placeholder='Senha'
        InputLeftElement={<Icon as={<Key color={colors.gray[300]} />} ml={3}  />} secureTextEntry 
        />

        <Button title={'Entrar'}  w="full"/>
        
     </ VStack >
   )
}

