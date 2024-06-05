import { Box, Button, Flex, Heading, Input, Text, Image } from "@chakra-ui/react";


export default function Home() {

  const users = [
    {
      id: "10",
      name: "wesley",
      age: 30,
      email: "wes@email.com"
    },
    {
      id: "11",
      name: "wes",
      age: 35,
      email: "w@email.com"
    },
    {
      id: "12",
      name: "ley",
      age: 299,
      email: "ley@email.com"
    },
    {
      id: "13",
      name: "Everlin",
      age: 29,
      email: "everlin@email.com"
    }
  ]

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
        <Input placeholder="Digite seu nome" type="text" />
        <Input placeholder="Digite sua idade" type="text" />
        <Input placeholder="Digite seu email" type="email" />
        <Button colorScheme={'purple'}>
          Cadastrar
        </Button>
      </Box>

      {users.map((user) => (
        <Flex
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
            key={user.id}
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
