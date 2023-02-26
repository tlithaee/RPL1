import Head from 'next/head'
import Navbar from '@/Components/Navbar'
import End from '@/Components/End'

import { useState } from 'react';

export default function Home() {

  const [name, setName] = useState('');

  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

    const [formErrors, setFormErrors] = useState({ //nyimpen message ketika error
      name: "",
      email: "",
    });

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Submitted:", name);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    if (name === "name") {
      if (!value) {
        setFormErrors((prevState) => ({
          ...prevState,
          name: "Name is required",
        }));
      } else {
        setFormErrors((prevState) => ({
          ...prevState,
          name: "",
        }));
      }
    }

    if (name === "email") {
      if (!value) {
        setFormErrors((prevState) => ({
          ...prevState,
          email: "Email is required",
        }));
      } else if (!/\S+@\S+\.\S+/.test(value)) {
        setFormErrors((prevState) => ({
          ...prevState,
          email: "Email is invalid",
        }));
      } else {
        setFormErrors((prevState) => ({
          ...prevState,
          email: "",
        }));
      }
    }
  };

  return (
    <>
      <Head>
        <title>Lita</title>
        <meta name="description" content="width-device-width, Initial-scale-1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
        <form className='pt-20' onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
            {formErrors.name && <div className='text-red-500'>{formErrors.name}</div>}

          <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
            {formErrors.email && <div className='text-red-500'>{formErrors.email}</div>}

          <button type="submit">Submit</button>
        </form>
      <End/>
    </>
  )
}
