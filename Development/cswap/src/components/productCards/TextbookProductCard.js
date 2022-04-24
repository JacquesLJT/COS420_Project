import { Center, Text, Box, Image, Badge, AspectRatio, Button, HStack, Stack, Heading} from '@chakra-ui/react'
import {StarIcon} from "@chakra-ui/icons";
import React, { useEffect, useState } from 'react'
import { db, storage } from '../../firebase';
import { collection, getDocs } from 'firebase/firestore';
import { getDownloadURL, ref } from 'firebase/storage';
import { Link, Route, Routes } from 'react-router-dom';

function TextbookProductCard({textbook}) {
  const [textbookProp, setTextbook] = useState([]);
  useEffect(() => {
    loadData()
  }, []);
  const loadData = async () => {
    getDownloadURL(ref(storage, 'images/'+textbook.imageName)).then((url) => { 
      setTextbook({
        uid: textbook.UID,
        imageUrl: url,
        imageAlt: textbook.description.length > 45 ? textbook.description.substring(0,45)+"..." : textbook.description,
        tags: textbook.tags,
        title: textbook.title,
        description: textbook.description,
        formattedPrice: "$"+textbook.price,
        reviewCount: 34,
        rating: 4,
      });
      console.log("YOyo "+textbookProp.title);
    })
    .catch((error) => {
      // A full list of error codes is available at
      // https://firebase.google.com/docs/storage/web/handle-errors
      switch (error.code) {
        case 'storage/object-not-found':
          // File doesn't exist
          break;
        case 'storage/unauthorized':
          // User doesn't have permission to access the object
          break;
        case 'storage/canceled':
          // User canceled the upload
          break;
  
        // ...
  
        case 'storage/unknown':
          // Unknown error occurred, inspect the server response
          break;
      }
    });
  }
  // Allows for data to actually get loaded
  function GenerateProductCard(){
    // console.log(apartmentProp.title);
    return (
      <Link to={{pathname: "textbook/"+textbookProp.uid}}>
        <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
          <Box name="do" backgroundColor="blackAlpha.200" p={2}>
            <Center>
                  <Image src={textbookProp.imageUrl} alt={textbookProp.imageAlt} width={250} height={128} objectFit='contain'/>  
            </Center>
          </Box>

          <Box p='6'>
            <Box display='flex' alignItems='baseline'>
              <Badge borderRadius='full' px='2' colorScheme='teal'>
                New
              </Badge>
              <Box
                color='gray.500'
                fontWeight='semibold'
                letterSpacing='wide'
                fontSize='xs'
                textTransform='uppercase'
                ml='2'
              >
                {textbookProp.tags} 
              </Box>
            </Box>

            <Box
              mt='1'
              fontWeight='semibold'
              as='h4'
              lineHeight='tight'
              isTruncated
            >
              {textbookProp.title}
            </Box>

            <Box>
              {textbookProp.formattedPrice}
              {/* <Box as='span' color='gray.600' fontSize='sm'>
                / wk
              </Box> */}
            </Box>

            <Box display='flex' mt='2' alignItems='center'>
              {Array(5)
                .fill('')
                .map((_, i) => (
                  <StarIcon
                    key={i}
                    color={i < textbookProp.rating ? 'teal.500' : 'gray.300'}
                  />
                ))}
              <Box as='span' ml='2' color='gray.600' fontSize='sm'>
                {textbookProp.reviewCount} reviews
              </Box>
            </Box>
          </Box>
        </Box>
      </Link>
    )
  }
  
  return (
    <Routes>
      <Route path="/" element={<GenerateProductCard />} />
      <Route path={"/textbook/"+textbookProp.uid} element={<LinkedProductCard product={textbookProp}/>} />
    </Routes>
    
  );
}

function LinkedProductCard({product}){
  useEffect(() => {
    loadData()
  }, []);
  const loadData = async () => {
    console.log("clicked");
    console.log(product.uid+" "+product.description);
  }
  return (
    <Stack boxShadow="md" bg="black.900" p='10' rounded="md" w="100%" >  
      <Center mb='2'>      
        <HStack>
          <Link to="/home"><Button colorScheme={"green"}>Back</Button></Link> 
          <Center mb='2'>
                  <Heading as={'h1'} size={'md'} colorScheme="green">{product.title}</Heading>
          </Center>
          <Link to="/chat"><Button colorScheme={"green"}>Message</Button></Link> 
        </HStack>
      </Center>

      <Box name="do"p={2}>
        <Center>
              <Image src={product.imageUrl} alt={product.imageAlt} width={250*2} height={128*2} objectFit='contain'/>  
        </Center>
      </Box>
      
      <Center mb='2'>
          <Text> 
          {product.formattedPrice}
          </Text>
      </Center>
      <Center mb='2'>
          <Text>Description: 
          {" "+product.description}
          </Text>
      </Center>
          {/* <Button colorScheme={"green"} onClick="createAListing(formData)" type="submit">Create</Button>  */}

    </Stack>

  );
}
export default TextbookProductCard