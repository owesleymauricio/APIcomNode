'use client'
import { Box, Button, Flex, Heading, Input, Text, Image } from "@chakra-ui/react";
import api from "@/services/api";
import { useEffect, useState, useRef } from "react";

interface User {
  id: string;
  name: string;
  email: string;
  age: number;
}



export default function Home() {
  const [users, setUsers] = useState<User[]>([])


  // passo esses valores para cada vaolr correspomdendte
  const inputName = useRef<HTMLInputElement>(null); // Referência para o campo de nome
  const inputEmail = useRef<HTMLInputElement>(null); // Referência para o campo de nome
  const inputAge = useRef<HTMLInputElement>(null); // Referência para o campo de nome

  async function getUsers() {
   const usersApi = await api.get('/users')

   setUsers(usersApi.data)
   console.log(users)
  }

  async function createUsers() {
    await api.post('users', {
      name: inputName.current?.value,
      age: inputAge.current?.value,
      email: inputEmail.current?.value
    })
    getUsers() // vai atualizar a tela com o novo cadastro
   }
   
  async function deleteUsers(id: string) {
    await api.delete(`/users/${id}`)
 
    getUsers() // vai atualizar a tela com o novo cadastro
   }

  useEffect(() => {
   getUsers()
  }, [])
  

  return (
    <Flex
      h={'100vh'}
      w={'100%'}
      alignItems={'center'}
     
      maxW={'1200px'}
      flexDirection={'column'}
      mr={'auto'}
      ml={'auto'}
    >
      <Box
        display={'flex'}
        flexDirection={'column'}
        border={'1px solid gray'}
        borderRadius={'10px'}
        gap={4}
        p={'30px'}
        mt={'20px'}
        backgroundColor={'#7B68EE'}
      >
        <Heading>
          Cadastro Lufa Lufa
        </Heading>
        <Input placeholder="Digite seu nome" type="text" ref={inputName}/>
        <Input placeholder="Digite sua idade" type="text" ref={inputAge} />
        <Input type="email" ref={inputEmail}/>
        <Button onClick={createUsers} colorScheme={'purple'}>
          <Text>Cadastrar</Text>
        </Button>
      </Box>

      {users.map((user) => (
        <Flex
          key={user.id}
          alignItems={'center'}
          bg={'#483D8B'}
          width={'400px'}
          border={'1px solid black'}
          borderRadius={'10px'}
          m={'20px'}
          justifyContent={'space-between'}
          p={'5px'}
          boxShadow={'50px 50px 44px -18px rgba(0,0,0,0.3)'}
        >
          <Flex
            flexDir={'column'}
            
            >
            <Text>Nome: {user.name} </Text>
            <Text>idade: {user.age} </Text>
            <Text>Email: {user.email} </Text>
          </Flex>
          <Button
            bg={'#483D8B'}
            borderRadius={'50px'}
            p={0}
            minW={0}
            h="auto"
            onClick={() => deleteUsers(user.id)}
          >
            <Image
              src='./lixeira.svg'
              boxSize={'40px'}
            />
          </Button>
        </Flex>
      ))}


    </Flex>
  );
}
