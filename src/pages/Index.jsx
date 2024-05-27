import { Box, Container, Flex, Heading, HStack, Link, Text, VStack, Spacer, IconButton } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Navigation Bar */}
      <Flex as="nav" bg="brand.800" color="white" padding={4} justifyContent="space-between" alignItems="center">
        <HStack spacing={8}>
          <Link href="/" fontSize="xl" fontWeight="bold">EventManager</Link>
          <HStack spacing={4}>
            <Link href="/">Home</Link>
            <Link href="/events">Events</Link>
            <Link href="/create-event">Create Event</Link>
            <Link href="/profile">Profile</Link>
          </HStack>
        </HStack>
      </Flex>

      {/* Main Section */}
      <Container maxW="container.md" centerContent py={10}>
        <VStack spacing={4} textAlign="center">
          <Heading>Welcome to EventManager</Heading>
          <Text fontSize="lg">Your one-stop platform for managing and attending events seamlessly.</Text>
        </VStack>
      </Container>

      {/* Upcoming Events Section */}
      <Container maxW="container.md" py={10}>
        <Heading size="lg" mb={4}>Upcoming Events</Heading>
        <VStack spacing={4}>
          {/* Placeholder for events */}
          <Box p={5} shadow="md" borderWidth="1px" width="100%">
            <Heading fontSize="xl">Event Title</Heading>
            <Text mt={4}>Event description goes here...</Text>
          </Box>
          <Box p={5} shadow="md" borderWidth="1px" width="100%">
            <Heading fontSize="xl">Event Title</Heading>
            <Text mt={4}>Event description goes here...</Text>
          </Box>
        </VStack>
      </Container>

      {/* Footer */}
      <Box as="footer" bg="brand.800" color="white" py={4}>
        <Container maxW="container.md">
          <Flex justifyContent="space-between" alignItems="center">
            <Text>&copy; 2023 EventManager. All rights reserved.</Text>
            <HStack spacing={4}>
              <IconButton as="a" href="https://facebook.com" aria-label="Facebook" icon={<FaFacebook />} />
              <IconButton as="a" href="https://twitter.com" aria-label="Twitter" icon={<FaTwitter />} />
              <IconButton as="a" href="https://instagram.com" aria-label="Instagram" icon={<FaInstagram />} />
            </HStack>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;