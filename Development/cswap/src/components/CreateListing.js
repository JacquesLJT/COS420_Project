import React, {useState} from 'react'
import { 
    Center,
    Stack,
    Heading, 
    Text, 
    Button, 
    CheckFlex, 
    Input, 
    InputLeftAddon, 
    InputGroup,
    Select,
    Image,
    Flex,
    VStack,
    HStack,
    Textarea
} from '@chakra-ui/react';
import { ImBooks, ImHome3, ImMobile} from 'react-icons/im';
import { GiCoffeeMug } from 'react-icons/gi';
import {BiChair} from 'react-icons/bi';
import { Switch, Routes, Route, Navigate, Link,} from 'react-router-dom';
import { useNavigate } from 'react-router';
import { db, storage, auth } from '../firebase';
import { addDoc, collection, getDocs } from 'firebase/firestore';
import { ref, uploadBytes } from 'firebase/storage';
import { date } from 'yup';


function SelectProduct() {
    return (
        <Stack boxShadow="md" bg="whiteAlpha.900" p='10' rounded="md" w="50%" >  
            <Center mb='10'>
                        <Heading as={'h1'} size={'xl'} colorScheme="green">Create Listing</Heading>
            </Center>
            <HStack>
                <Link to ="/home"><Button colorScheme={"red"}>Cancel</Button></Link>
                    <VStack mt="15" spacing="5" w="100%" > 
                    <Link to="textbook/"><Button 
                        leftIcon={<ImBooks />} 
                        boxShadow="lg" 
                        colorScheme="green" 
                        variant="outline">
                        Textbooks
                    </Button></Link>
                    <Link to="apartmentRentals/">
                        <Button 
                            leftIcon={<ImHome3 />} 
                            boxShadow="lg" 
                            colorScheme="green" 
                            variant="outline">
                            Apartment Rentals
                        </Button>
                    </Link>
                    <Link to="electronics/"><Button 
                        leftIcon={<ImMobile />}
                        boxShadow="lg" 
                        colorScheme="green" 
                        variant="outline">
                    Electronics  
                    </Button></Link> 
                    <Link to="furniture/"><Button 
                        leftIcon={<BiChair />} 
                        boxShadow="lg" 
                        colorScheme="green" 
                        variant="outline">
                        Furniture
                    </Button></Link>
                    <Link to="appliances/"><Button 
                        leftIcon={<GiCoffeeMug />} 
                        boxShadow="lg" 
                        colorScheme="green" 
                        variant="outline">
                        Appliances
                    </Button></Link>   
                </VStack>
                <Button colorScheme={"green"} visibility={'hidden'}>Next</Button>
            </HStack>
        </Stack>
    )
}

function TextBookForm() {
    const [formData, setFormData] = useState({});
    const [image, setImage] = useState("");
    let navigate = useNavigate();
    var numOfDocs = 0;
    const updateInput = async (e) => {
        // console.log("Updated "+e.target.name+" with "+e.target.value+" Files "+e.target.files)
        if (e.target.files != null){
            await setImage(e.target.files[0]);
            // console.log("Files: "+image.name);
        } else {
            setFormData({
              ...formData,
              [e.target.name]: e.target.value,
            })
        }
    }

    const handleSubmit = event => {
        event.preventDefault()
        createAListing(formData)
        console.log("Title: "+formData.title)
        setImage();
        setFormData({
            title: '',
            ISBN: '',
            description: '',
            zip: '',
            price: '',
            imageName: '',
            tag: ''
        })
    }
    const uploadImage = async ()=>{
        if(image == null)
            return;
        const querySnapshot = await getDocs(collection(db, "textbooks"));
        numOfDocs = querySnapshot.size;
        const imageRef = ref(storage, `/images/${"text_"+auth.currentUser.uid+"_"+ numOfDocs+"_"+image.name}`);
        uploadBytes(imageRef, image).then((snapshot) => {
            console.log('Uploaded a blob or file!');
        });
    }
    const createAListing = async (formData) => {
        // console.log(formData);
        await uploadImage();
        const docRef = await addDoc(collection(db, "textbooks"), {
            UID: auth.currentUser.uid,
            title: formData.title,
            ISBN: formData.ISBN || '',
            description: formData.description || '',
            zip: formData.zip,
            price: formData.price,
            imageName: "text_"+auth.currentUser.uid+"_"+ numOfDocs+"_"+image.name,
            tags: "",
        });
        navigate("/home", { replace: true });
    }
    
    return (
        <Stack boxShadow="md" bg="whiteAlpha.900" p='10' rounded="md" w="50%" >  
             <Center mb='10'>
                    <Heading as={'h1'} size={'xl'} colorScheme="green">Add Textbook</Heading>
            </Center>
                <form onSubmit={handleSubmit}>
                <HStack>
                    <Link to="/createListing"><Button colorScheme={"green"}>Back</Button></Link> 
                    <VStack spacing={5} p={10}>
                        <Center>
                            <Text p={5}>Title</Text>
                            <Input borderColor="green" border ="2px" name='title' onChange={updateInput} value={formData.title || ''}></Input>
                            
                            <Text p={5}>Price</Text>
                            <Input borderColor="green" border ="2px" name='price' onChange={updateInput} value={formData.price || ''}></Input>
                        </Center>
                        
                        <Center>
                            <Text p={5}>ISBN</Text>
                            <Input borderColor="green" border ="2px" name='ISBN' onChange={updateInput} value={formData.ISBN || ''}></Input>
                            <Text p={5}>ZIP</Text>
                            <Input borderColor="green" border ="2px" name='zip' onChange={updateInput} value={formData.zip || ''}></Input>
                        </Center>
                        
                        <Text>Description</Text>
                        <Center>
                            <Textarea
                                name='description'
                                borderColor="green" 
                                border ="2px"
                                rows={10}
                                cols={40}        
                                onChange={updateInput}
                                value={formData.description || ''}
                                >
                            </Textarea>
                        </Center>
                        <input type="file" onChange={updateInput}/>
                    </VStack>
                    <Button colorScheme={"green"} onClick="createAListing(formData)" type="submit">Create</Button>  
                </HStack>
            </form>
        </Stack>
    )
}


function ApartmentRentalsForm() {
    const [formData, setFormData] = useState({});
    const [image, setImage] = useState("");
    let navigate = useNavigate();
    var numOfDocs = 0;
    const updateInput = async (e) => {
        // console.log("Updated "+e.target.name+" with "+e.target.value+" Files "+e.target.files)
        if (e.target.files != null){
            await setImage(e.target.files[0]);
            // console.log("Files: "+image.name);
        } else {
            setFormData({
              ...formData,
              [e.target.name]: e.target.value,
            })
        }
    }

    const handleSubmit = event => {
        event.preventDefault()
        createAListing(formData)
        console.log("Title: "+formData.title)
        setImage();
        setFormData({
            title: '',
            beds: '',
            description: '',
            zip: '',
            price: '',
            imageName: '',
            tag: ''
        });
    }
    const uploadImage = async ()=>{
        if(image == null || auth.currentUser.uid == null)
            return;
        const querySnapshot = await getDocs(collection(db, "apartments"));
        numOfDocs = querySnapshot.size;
        const imageRef = ref(storage, `/images/${"apar_"+auth.currentUser.uid+"_"+ numOfDocs+"_"+image.name}`);
        uploadBytes(imageRef, image).then((snapshot) => {
            console.log('Uploaded a blob or file!');
        });
    }
    const createAListing = async (formData) => {
        // console.log(formData);
        await uploadImage();
        const docRef = await addDoc(collection(db, "apartments"), {
            UID: auth.currentUser.uid,
            title: formData.title,
            beds: formData.beds,
            baths: formData.baths,
            description: formData.description || '',
            zip: formData.zip,
            price: formData.price,
            imageName: "apar_"+auth.currentUser.uid+"_"+ numOfDocs+"_"+image.name,
            tags: "",
        });
        navigate("/home", { replace: true });
    }
    
    return (
        <Stack boxShadow="md" bg="whiteAlpha.900" p='10' rounded="md" w="50%" >  
             <Center mb='10'>
                    <Heading as={'h1'} size={'xl'} colorScheme="green">Add Apartment</Heading>
            </Center>
                <form onSubmit={handleSubmit}>
                <HStack>
                    <Link to="/createListing"><Button colorScheme={"green"}>Back</Button></Link> 
                    <VStack spacing={5} p={10}>
                        <Center>
                            <Text p={5}>Title</Text>
                            <Input borderColor="green" border ="2px" name='title' onChange={updateInput} value={formData.title || ''}></Input>
                            
                            <Text p={5}>Price</Text>
                            <Input borderColor="green" border ="2px" name='price' onChange={updateInput} value={formData.price || ''}></Input>
                        </Center>
                        
                        <Center>
                            <Text p={5}>Beds</Text>
                            <Input borderColor="green" border ="2px" name='beds' onChange={updateInput} value={formData.beds || ''}></Input>
                            <Text p={5}>Baths</Text>
                            <Input borderColor="green" border ="2px" name='baths' onChange={updateInput} value={formData.baths || ''}></Input>
                            <Text p={5}>ZIP</Text>
                            <Input borderColor="green" border ="2px" name='zip' onChange={updateInput} value={formData.zip || ''}></Input>
                        </Center>
                        
                        <Text>Description</Text>
                        <Center>
                            <Textarea
                                name='description'
                                borderColor="green" 
                                border ="2px"
                                rows={10}
                                cols={40}        
                                onChange={updateInput}
                                value={formData.description || ''}
                                >
                            </Textarea>
                        </Center>
                        <input type="file" onChange={updateInput}/>
                    </VStack>
                    <Link to="/home"><Button colorScheme={"green"} onClick="createAListing(formData)" type="submit">Create</Button></Link>
                </HStack>
            </form>
        </Stack>
    )
}


function ElectronicsForm() {
    const [formData, setFormData] = useState({});
    const [image, setImage] = useState("");
    let navigate = useNavigate();
    var numOfDocs = 0;
    const updateInput = async (e) => {
        // console.log("Updated "+e.target.name+" with "+e.target.value+" Files "+e.target.files)
        if (e.target.files != null){
            await setImage(e.target.files[0]);
            // console.log("Files: "+image.name);
        } else {
            setFormData({
              ...formData,
              [e.target.name]: e.target.value,
            })
        }
    }

    const handleSubmit = event => {
        event.preventDefault()
        createAListing(formData)
        console.log("Title: "+formData.title)
        setImage();
        setFormData({
            title: '',
            description: '',
            condition: '',
            zip: '',
            price: '',
            imageName: '',
            tag: ''
        })
    }
    const uploadImage = async ()=>{
        if(image == null)
            return;
        const querySnapshot = await getDocs(collection(db, "electronics"));
        numOfDocs = querySnapshot.size;
        const imageRef = ref(storage, `/images/${"elec_"+auth.currentUser.uid+"_"+ numOfDocs+"_"+image.name}`);
        uploadBytes(imageRef, image).then((snapshot) => {
            console.log('Uploaded a blob or file!');
        });
    }
    const createAListing = async (formData) => {
        // console.log(formData);
        await uploadImage();
        const docRef = await addDoc(collection(db, "electronics"), {
            UID: auth.currentUser.uid,
            title: formData.title,
            description: formData.description || '',
            condition: formData.condition || '',
            zip: formData.zip,
            price: formData.price,
            imageName: "elec_"+auth.currentUser.uid+"_"+ numOfDocs+"_"+image.name,
            tags: "",
        });
        navigate("/home", { replace: true });
    }
    
    return (
        <Stack boxShadow="md" bg="whiteAlpha.900" p='10' rounded="md" w="50%" >  
             <Center mb='10'>
                    <Heading as={'h1'} size={'xl'} colorScheme="green">Add Electronic</Heading>
            </Center>
            <form onSubmit={handleSubmit}>
                <HStack>
                    <Link to="/createListing"><Button colorScheme={"green"}>Back</Button></Link> 
                    <VStack spacing={5} p={10}>
                        <Center>
                            <Text p={5}>Title</Text>
                            <Input borderColor="green" border ="2px" name='title' onChange={updateInput} value={formData.title || ''}></Input>
                            
                            <Text p={5}>Price</Text>
                            <Input borderColor="green" border ="2px" name='price' onChange={updateInput} value={formData.price || ''}></Input>
                        </Center>
                        
                        <Center>
                            <Select onChange={(e)=>formData.condition=e.target.value} placeholder = 'Condition'>
                                <option value={'New'}>New</option>
                                <option value={'Used'}>Used</option>
                            </Select>
                            <Text p={5}>ZIP</Text>
                            <Input borderColor="green" border ="2px" name='zip' onChange={updateInput} value={formData.zip || ''}></Input>
                        </Center>
                        
                        <Text>Description</Text>
                        <Center>
                            <Textarea
                                name='description'
                                borderColor="green" 
                                border ="2px"
                                rows={10}
                                cols={40}        
                                onChange={updateInput}
                                value={formData.description || ''}
                                >
                            </Textarea>
                        </Center>
                        <input type="file" onChange={updateInput}/>
                    </VStack>
                    <Button colorScheme={"green"} onClick="createAListing(formData)" type="submit">Create</Button> 
                </HStack>
            </form>
        </Stack>
    )
}
function FurnitureForm() {
    const [formData, setFormData] = useState({});
    const [image, setImage] = useState("");
    let navigate = useNavigate();
    var numOfDocs = 0;
    const updateInput = async (e) => {
        // console.log("Updated "+e.target.name+" with "+e.target.value+" Files "+e.target.files)
        if (e.target.files != null){
            await setImage(e.target.files[0]);
            // console.log("Files: "+image.name);
        } else {
            setFormData({
              ...formData,
              [e.target.name]: e.target.value,
            })
        }
    }

    const handleSubmit = event => {
        event.preventDefault()
        createAListing(formData)
        console.log("Title: "+formData.title)
        setImage();
        setFormData({
            title: '',
            description: '',
            condition: '',
            zip: '',
            price: '',
            imageName: '',
            tag: ''
        })
    }
    const uploadImage = async ()=>{
        if(image == null)
            return;
        const querySnapshot = await getDocs(collection(db, "furniture"));
        numOfDocs = querySnapshot.size;
        const imageRef = ref(storage, `/images/${"furn_"+auth.currentUser.uid+"_"+ numOfDocs+"_"+image.name}`);
        uploadBytes(imageRef, image).then((snapshot) => {
            console.log('Uploaded a blob or file!');
        });
    }
    const createAListing = async (formData) => {
        // console.log(formData);
        await uploadImage();
        const docRef = await addDoc(collection(db, "furniture"), {
            UID: auth.currentUser.uid,
            title: formData.title,
            description: formData.description || '',
            condition: formData.condition || '',
            zip: formData.zip,
            price: formData.price,
            imageName: "furn_"+auth.currentUser.uid+"_"+ numOfDocs+"_"+image.name,
            tags: "",
        });
        navigate("/home", { replace: true });
    }
    
    return (
        <Stack boxShadow="md" bg="whiteAlpha.900" p='10' rounded="md" w="50%" >  
             <Center mb='10'>
                    <Heading as={'h1'} size={'xl'} colorScheme="green">Add Furniture</Heading>
            </Center>
            <form onSubmit={handleSubmit}>
                <HStack>
                    <Link to="/createListing"><Button colorScheme={"green"}>Back</Button></Link> 
                    <VStack spacing={5} p={10}>
                        <Center>
                            <Text p={5}>Title</Text>
                            <Input borderColor="green" border ="2px" name='title' onChange={updateInput} value={formData.title || ''}></Input>
                            
                            <Text p={5}>Price</Text>
                            <Input borderColor="green" border ="2px" name='price' onChange={updateInput} value={formData.price || ''}></Input>
                        </Center>
                        
                        <Center>
                            <Select onChange={(e)=>{formData.condition=e.target.value; console.log(date);}} placeholder = 'Condition'>
                                <option value={'New'}>New</option>
                                <option value={'Used'}>Used</option>
                            </Select>
                            <Text p={5}>ZIP</Text>
                            <Input borderColor="green" border ="2px" name='zip' onChange={updateInput} value={formData.zip || ''}></Input>
                        </Center>
                        
                        <Text>Description</Text>
                        <Center>
                            <Textarea
                                name='description'
                                borderColor="green" 
                                border ="2px"
                                rows={10}
                                cols={40}        
                                onChange={updateInput}
                                value={formData.description || ''}
                                >
                            </Textarea>
                        </Center>
                        <input type="file" onChange={updateInput}/>
                    </VStack>
                    <Button colorScheme={"green"} onClick="createAListing(formData)" type="submit">Create</Button> 
                </HStack>
            </form>
        </Stack>
    )
}
function AppliancesForm() {
    const [formData, setFormData] = useState({});
    const [image, setImage] = useState("");
    let navigate = useNavigate();
    var numOfDocs = 0;
    const updateInput = async (e) => {
        // console.log("Updated "+e.target.name+" with "+e.target.value+" Files "+e.target.files)
        if (e.target.files != null){
            await setImage(e.target.files[0]);
            // console.log("Files: "+image.name);
        } else {
            setFormData({
              ...formData,
              [e.target.name]: e.target.value,
            })
        }
    }

    const handleSubmit = event => {
        event.preventDefault()
        createAListing(formData)
        console.log("Title: "+formData.title)
        setImage();
        setFormData({
            title: '',
            description: '',
            condition: '',
            zip: '',
            price: '',
            imageName: '',
            tag: ''
        })
    }
    const uploadImage = async ()=>{
        if(image == null)
            return;
        const querySnapshot = await getDocs(collection(db, "appliances"));
        numOfDocs = querySnapshot.size;
        const imageRef = ref(storage, `/images/${"appl_"+auth.currentUser.uid+"_"+ numOfDocs+"_"+image.name}`);
        uploadBytes(imageRef, image).then((snapshot) => {
            console.log('Uploaded a blob or file!');
        });
    }
    const createAListing = async (formData) => {
        // console.log(formData);
        await uploadImage();
        const docRef = await addDoc(collection(db, "appliances"), {
            UID: auth.currentUser.uid,
            title: formData.title,
            description: formData.description || '',
            condition: formData.condition || '',
            zip: formData.zip,
            price: formData.price,
            imageName: "appl_"+auth.currentUser.uid+"_"+ numOfDocs+"_"+image.name,
            tags: "",
        });
        navigate("/home", { replace: true });
    }
    
    return (
        <Stack boxShadow="md" bg="whiteAlpha.900" p='10' rounded="md" w="50%" >  
             <Center mb='10'>
                    <Heading as={'h1'} size={'xl'} colorScheme="green">Add Appliances</Heading>
            </Center>
            <form onSubmit={handleSubmit}>
                <HStack>
                    <Link to="/createListing"><Button colorScheme={"green"}>Back</Button></Link> 
                    <VStack spacing={5} p={10}>
                        <Center>
                            <Text p={5}>Title</Text>
                            <Input borderColor="green" border ="2px" name='title' onChange={updateInput} value={formData.title || ''}></Input>
                            
                            <Text p={5}>Price</Text>
                            <Input borderColor="green" border ="2px" name='price' onChange={updateInput} value={formData.price || ''}></Input>
                        </Center>
                        
                        <Center>
                            <Select onChange={(e)=>formData.condition=e.target.value} placeholder = 'Condition'>
                                <option value={'New'}>New</option>
                                <option value={'Used'}>Used</option>
                            </Select>
                            <Text p={5}>ZIP</Text>
                            <Input borderColor="green" border ="2px" name='zip' onChange={updateInput} value={formData.zip || ''}></Input>
                        </Center>
                        
                        <Text>Description</Text>
                        <Center>
                            <Textarea
                                name='description'
                                borderColor="green" 
                                border ="2px"
                                rows={10}
                                cols={40}        
                                onChange={updateInput}
                                value={formData.description || ''}
                                >
                            </Textarea>
                        </Center>
                        <input type="file" onChange={updateInput}/>
                    </VStack>
                    <Button colorScheme={"green"} onClick="createAListing(formData)" type="submit">Create</Button> 
                </HStack>
            </form>
        </Stack>
    )
}

function CreateListing() {
  return (
    <Center h="100vh" bg="#013220">
        <Routes>
            <Route path="/" element={<SelectProduct />} />
            <Route path="/textbook" element={<TextBookForm />} />
            <Route path="/apartmentRentals" element={<ApartmentRentalsForm />} />
            <Route path="/electronics" element={<ElectronicsForm />} />
            <Route path="/furniture" element={<FurnitureForm />} />
            <Route path="/appliances" element={<AppliancesForm />} />
        </Routes>
    </Center>
  )
}

export default CreateListing;