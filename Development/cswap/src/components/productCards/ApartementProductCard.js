import { Center, Text, Box, Image, Badge} from '@chakra-ui/react'
import {StarIcon} from "@chakra-ui/icons";
import React, { useEffect, useState } from 'react'
import { db, storage } from '../../firebase';
import { collection, getDocs } from 'firebase/firestore';
import { getDownloadURL, ref } from 'firebase/storage';

function ApartementProductCard({apartment}) {
  const [apartmentProp, setApartment] = useState([]);
  useEffect(() => {
    loadData()
  }, []);
  const loadData = async () => {
    const storeApartment = [];
    getDownloadURL(ref(storage, 'images/'+apartment.imageName)).then((url) => { 
      setApartment({
        imageUrl: url,
        imageAlt: apartment.description.length > 45 ? apartment.description.substring(0,45)+"..." : apartment.description,
        beds: apartment.beds,
        baths: 2,
        title: apartment.title,
        formattedPrice: "$"+apartment.price,
        reviewCount: 34,
        rating: 4,
      });
      console.log(apartmentProp.title);
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
              <Image src={apartmentProp.imageUrl} alt={apartmentProp.imageAlt} width={250} height={128} objectFit='contain'/>  
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
              {apartmentProp.beds} beds &bull; {apartmentProp.baths} baths
            </Box>
          </Box>
  
          <Box
            mt='1'
            fontWeight='semibold'
            as='h4'
            lineHeight='tight'
            isTruncated
          >
            {apartmentProp.title}
          </Box>
  
          <Box>
            {apartmentProp.formattedPrice}
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
                  color={i < apartmentProp.rating ? 'teal.500' : 'gray.300'}
                />
              ))}
            <Box as='span' ml='2' color='gray.600' fontSize='sm'>
              {apartmentProp.reviewCount} reviews
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

export default ApartementProductCard