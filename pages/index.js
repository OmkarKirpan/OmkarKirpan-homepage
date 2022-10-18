import NextLink from 'next/link'
import {
  Container,
  Box,
  Heading,
  Button,
  Image,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import Section from '../components/section'
import { BioSection, BioYear } from '../components/bio'

const Page = () => {
  return (
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, I&apos;m a full-stack developer based in India!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Omkar Kirpan
          </Heading>
          <p>Digital Craftzman ( Artist / Developer / Designer )</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          align="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/omkar.jpg"
            alt="Profile Image"
          />
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          Omkar is a freelance and a full-stack developer based in India with a
          passion for building digital services/stuff he wants. He has a knack
          for all things launching products, from planning and designing all the
          way to solving real-life problems with code.
        </Paragraph>

        <Box align="center" my={4}>
          <NextLink
            href="https://github.com/OmkarKirpan/omkarkirpan.github.io/raw/master/omkar%20resume%2058.pdf"
            passHref
            scroll={false}
          >
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My Portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>1996</BioYear>
          Born in Nagpur, India.
        </BioSection>
        <BioSection>
          <BioYear>2017</BioYear>
          Completed the Bachelor of Engineering Program (Computer Science &
          Engineering) at Rajiv Gandhi College of Engineering and Research in
          Nagpur, India.
        </BioSection>
        <BioSection>
          <BioYear>2018</BioYear>
          Worked at UNI (Uniegis Network Private Limited), Delhi, India.
        </BioSection>
        <BioSection>
          <BioYear>2018</BioYear>
          Worked at Noviga Automation Pvt Ltd., Pune, India.
        </BioSection>
        <BioSection>
          <BioYear>2020</BioYear>
          Worked at Greenway Grameen Infra Pvt. Ltd., Bangalore, India.
        </BioSection>
        <BioSection>
          <BioYear>2020 to present</BioYear>
          Worked at Mobile Programming LLC, Bangalore, India.
        </BioSection>
        <BioSection>
          <BioYear>2020 to present</BioYear>
          Worked at IBM, Bangalore, India.
        </BioSection>
        <BioSection>
          <BioYear>2020 to present</BioYear>
          Worked at ANZ, Bangalore, India.
        </BioSection>
      </Section>
    </Container>
  )
}

export default Page
