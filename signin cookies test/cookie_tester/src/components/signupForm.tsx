"use client"
import { useState ,ChangeEvent,FormEvent} from 'react';
import { useRouter } from "next/navigation";
const SignupForm = () => {
    const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form Data:', formData);

    if (router){ router.push('/home');}
   
    // Here you can add your form submission logic, e.g., send the data to a server
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input style={{ color: 'black' }} type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input style={{ color: 'black' }} type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input style={{ color: 'black' }} type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />
      </div>
      <button style={{ backgroundColor: 'blue' }} type="submit">Sign Up</button>
    </form>
  );
};

export default SignupForm;
