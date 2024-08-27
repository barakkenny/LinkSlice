"use client";

import React, { useState, ChangeEvent, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "./button";
import { BeatLoader } from "react-spinners";
import Error from "../Error";
import * as Yup from 'yup';
import useFetch from "@/hooks/useFetch";
import { login } from "@/app/db/apiAuth";


interface FormData {
  email: string;
  password: string;
}

interface ValidationError {
  [key: string]: string;
}


const Login = () => {
  const [errors, setErrors] = useState<ValidationError>({});
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  })

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }
  // const handleLogin = async ()=> {
  //   setErrors([])
  //   try {
  //     const schema = Yup.object().shape({
  //     email: Yup.string().email('Invalid Email')
  //       .required('Email is Required'),
  //     password: Yup.string().min(6, 'Password must be at least 6 characters')
  //     .required('Password is Required'),
  //     })
  //     await schema.validate(formData, {abortEarly: false});
  //   }catch (e: any) {
  //     const newErrors = {};
  //     e?.inner?.forEach((err) => {
  //       newErrors[err.path] = err.message
  //     })

  //     setErrors(newErrors);
  //   }
  // }

//  const {data, error, loading, fn: fnLogin} useFetch(login, formData);

//   useEffect(()=> {
//     console.log(data)
//  if(error === null && data) {

//  }
//   }, [error])


// Assuming `login` and `formData` have types defined elsewhere
const { data, error, loading, fn: fnLogin } = useFetch(login, formData);

useEffect(() => {
    console.log(data);
    if (error === null && data) {
        // Handle successful data fetch
    }
}, [data, error]);

  const handleLogin = async (formData: FormData) => {
  setErrors({});
  try {
    const schema = Yup.object().shape({
      email: Yup.string().email('Invalid Email').required('Email is Required'),
      password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is Required'),
    });

    await schema.validate(formData, { abortEarly: false });
    await fnLogin()
  } catch (e: any) {
    const newErrors: ValidationError = {};
    e?.inner?.forEach((err: Yup.ValidationError) => {
      newErrors[err.path as string] = err.message;
    });
    // if (e instanceof Yup.ValidationError) {
    //   e.inner.forEach((err) => {
    //     if (err.path) {
    //       newErrors[err.path] = err.message;
    //     }
    //   });
    // }

    setErrors(newErrors);
  }
};


  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-center">Login</CardTitle>
        <CardDescription className="text-center mt-8">Have an account? login</CardDescription>
      {/* {error.email && <Error  message={error.email} />} */}
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="space-y-1">
          <Input name="email" type="email" 
          placeholder="Enter Email"
          onChange={handleInputChange}
          />
           {errors.email && <Error  message={errors.email} />}
        </div>
        <div className="space-y-1">
          <Input name="passwprd" 
          type="password" 
          placeholder="Enter Password"
          onChange={handleInputChange}
          />
          {errors.password && <Error message={errors.password} />}
        </div>
      </CardContent>
      <CardFooter>
        <Button onClick={handleLogin}>
          {loading ? <BeatLoader size={10} color="#36d7b7"/> : "Login"}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Login;
