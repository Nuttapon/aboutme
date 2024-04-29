import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import {
  Box,
  Button,
  FormLabel,
  Input,
  Spinner,
  Stack,
  useToast,
} from "@chakra-ui/react";

import thaiIdCard from './ThaiIdCard';


export default function IdCardGenerator() {
  const { handleSubmit } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [idCard, setIdCard] = useState("XXXXXXXXXXXXX");
  const toast = useToast();
  
  const copyToClipboard = () => {
    navigator.clipboard.writeText(idCard);
    toast({
      title: "Copied.",
      description: "ID Card copied to clipboard.",
      status: "success",
      duration: 2000,
      isClosable: true,
    })
  }

  const onSubmit = async () => {
    setIsLoading(true);
    const idCard = thaiIdCard.generate();

    setIdCard(idCard);

    setIsLoading(false);
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="30vh" boxShadow="md" padding="5" borderColor="gray.900">
      <Box maxW="medium" mx="auto" w="100%">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box paddingTop={5}>
            <Stack spacing={3}>
              <FormLabel textAlign={"center"}>ID Card Generator (ONLY Testing)</FormLabel>
              <Input
                id="id-card-generator"
                value={idCard}
                placeholder="XXXXXXXXXXXXX"
                readOnly
                style={{width: 'fit-content', textAlign: 'center'}}
                marginLeft="auto"
                marginRight="auto"
                onClick={copyToClipboard}              
              />
              <Box display="flex" flexDirection="row" justifyContent="center">
                <Button
                  mt={3}
                  size={"xs"}
                  colorScheme="teal"
                  type="submit"
                  isLoading={isLoading}
                  loadingText="Generating..."
                  rightIcon={isLoading ? <Spinner /> : undefined}>
                  Generate
                </Button>
              </Box>
            </Stack>
          </Box>
        </form>
      </Box>
    </Box>
  )
}
