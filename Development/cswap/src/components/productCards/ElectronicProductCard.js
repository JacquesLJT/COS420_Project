import { Center, Text, Box, Image, Badge} from '@chakra-ui/react'
import {StarIcon} from "@chakra-ui/icons";
import React, { useEffect, useState } from 'react'
import { db, storage } from '../../firebase';
import { collection, getDocs } from 'firebase/firestore';
import { getDownloadURL, ref } from 'firebase/storage';

function ElectronicProductCard({electronic}) {
  const [electronicProp, setElectronic] = useState([]);
  useEffect(() => {
    loadData()
  }, []);
  const loadData = async () => {
    const storeElectronic = [];
    getDownloadURL(ref(storage, 'images/'+electronic.imageName)).then((url) => { 
      setElectronic({
        imageUrl: url,
        imageAlt: electronic.description.length > 45 ? electronic.description.substring(0,45)+"..." : electronic.description,
        condition: electronic.condition,
        title: electronic.title,
        formattedPrice: "$"+electronic.price,
        reviewCount: 34,
        rating: 4,
      });
      console.log(electronicProp.title);
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
      <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
      <Box name="do" backgroundColor="blackAlpha.200" p={2}>
        <Center>
              <Image src={electronicProp.imageUrl} alt={electronicProp.imageAlt} width={250} height={128} objectFit='contain'/>  
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
              {electronicProp.condition} 
            </Box>
          </Box>
  
          <Box
            mt='1'
            fontWeight='semibold'
            as='h4'
            lineHeight='tight'
            isTruncated
          >
            {electronicProp.title}
          </Box>
  
          <Box>
            {electronicProp.formattedPrice}
            <Box as='span' color='gray.600' fontSize='sm'>
              / wk
            </Box>
          </Box>
  
          <Box display='flex' mt='2' alignItems='center'>
            {Array(5)
              .fill('')
              .map((_, i) => (
                <StarIcon
                  key={i}
                  color={i < electronicProp.rating ? 'teal.500' : 'gray.300'}
                />
              ))}
            <Box as='span' ml='2' color='gray.600' fontSize='sm'>
              {electronicProp.reviewCount} reviews
            </Box>
          </Box>
        </Box>
      </Box>
    )
  }
  return (
    <GenerateProductCard></GenerateProductCard>
  );
}

export default ElectronicProductCard