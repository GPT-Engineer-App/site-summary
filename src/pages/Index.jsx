import React from "react";
import { Box, Flex, Heading, Text, VStack, HStack, Button, Spacer, Image, Container, Link, Icon } from "@chakra-ui/react";
import { FaPlus, FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Navigation */}
      <Flex as="header" bg="teal.500" color="white" p={4} align="center">
        <Heading size="md">SummarySite</Heading>
        <Spacer />
        <HStack spacing={4}>
          <Link>Home</Link>
          <Link>About</Link>
          <Link>Contact</Link>
        </HStack>
      </Flex>

      {/* Main Content */}
      <Container maxW="container.xl" p={4}>
        <VStack spacing={8}>
          <Heading as="h1" size="2xl" textAlign="center">
            Welcome to SummarySite
          </Heading>
          <Text fontSize="lg" textAlign="center">
            Your one-stop destination for quick and concise summaries of various topics.
          </Text>
          <Button leftIcon={<FaPlus />} colorScheme="teal" variant="solid">
            Add Summary
          </Button>

          <Flex wrap="wrap" justify="center" spacing={4}>
            {/* Summary Card #1 */}
            <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" p={5} m={2}>
              <Image src="https://images.unsplash.com/photo-1462642109801-4ac2971a3a51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxib29rJTIwc3VtbWFyeXxlbnwwfHx8fDE3MDkyMDE5NzZ8MA&ixlib=rb-4.0.3&q=80&w=1080" />
              <Box p="6">
                <Box fontWeight="semibold" as="h4" lineHeight="tight">
                  Book Summary
                </Box>
                <Box mt="1" fontWeight="light" as="p" lineHeight="tight" isTruncated>
                  A quick summary of the bestselling book "The Great Adventure".
                </Box>
              </Box>
            </Box>

            {/* Summary Card #2 */}
            <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" p={5} m={2}>
              <Image src="https://images.unsplash.com/photo-1485846234645-a62644f84728?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtb3ZpZSUyMHN1bW1hcnl8ZW58MHx8fHwxNzA5MjAxOTc3fDA&ixlib=rb-4.0.3&q=80&w=1080" />
              <Box p="6">
                <Box fontWeight="semibold" as="h4" lineHeight="tight">
                  Movie Summary
                </Box>
                <Box mt="1" fontWeight="light" as="p" lineHeight="tight" isTruncated>
                  An overview of the plot and themes of the film "Cinematic Journey".
                </Box>
              </Box>
            </Box>
          </Flex>
        </VStack>
      </Container>

      {/* Footer */}
      <Box bg="gray.100" p={4}>
        <Flex as="footer" justify="space-between" align="center">
          <Text>© 2023 SummarySite</Text>
          <HStack spacing={4}>
            <Link href="#">
              <Icon as={FaTwitter} />
            </Link>
            <Link href="#">
              <Icon as={FaFacebook} />
            </Link>
            <Link href="#">
              <Icon as={FaInstagram} />
            </Link>
            <Link href="#">
              <Icon as={FaLinkedin} />
            </Link>
          </HStack>
        </Flex>
      </Box>
    </Box>
  );
};

export default Index;
