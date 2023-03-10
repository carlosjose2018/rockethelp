import React from 'react';
//importa o IInputProps com todas as funcionalidades 
import { Input as NativebaseInput, IInputProps } from 'native-base';


// {... rest } funcionalidade do rest operation é colocar varias props passada atraves do input, passando o IInputProps com o tipo principalç
export function Input({...rest}: IInputProps) {
  return (
    <NativebaseInput 
     bg='gray.700'
     h={14}
     size='md'
     borderWidth={0}
     fontSize="md"
     fontFamily='body'
     color="white"
     placeholderTextColor='gray.300'
     _focus={{
        borderWidth:1,
        borderColor:'green.500',
        bg:'gray.700'
     }}
     {...rest}
    />
  );
}