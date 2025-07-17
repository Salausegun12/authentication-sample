import { useState } from 'react';

export default function Signup({ onSignup }) {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [errors, setErrors] = useState({});

  function validate() {
    const errs = {};
    if (!form.name.trim()) errs.name = 'Name is required';
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) errs.email = 'Valid email required';
    if (form.password.length < 6) errs.password = 'Password must be at least 6 chars';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  }

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!validate()) return;
    console.log(form)
    onSignup(form);
  }

    return(
        <form onSubmit={handleSubmit} className='bg-white p-10 rounded shadow-lg w-90 space-y-4 '>
            <h2 className='font-extrabold text-2xl'>Sign Up</h2>
            {['name', 'email', 'password'].map(field => (
                <div key={field}>
                    <input
                        name= {field}
                        type= {field === 'password' ? 'password': 'text'}
                        placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                        value={form[field]}
                        onChange={handleChange}
                        className='w-full p-2 border rounded'
                    />
                    { errors[field] && <p className='text-red-500 text-sm'>{errors[field]}</p> }
                </div>
            ))}
            <button type='submit' className='w-full bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% p-2 rounded'>Sign Up</button>
            <p>Register your account. </p>
        </form>
    );
}