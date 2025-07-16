import { useState } from 'react';

export default function Login({ onLogin }) {
    const [form, setForm] = useState({email: '', password: ''});
    const [errors, setErrorrs] = useState({});

    function validate() {
        const errs = {};
        if (!form.email.trim()) errs.email ='Email is required';
        if (!form.password) errs.password = 'password is required';
        setErrorrs(errs);
        return Object.keys(errs).length === 0;
    }

    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (!validate()) return;
        onLogin(form);
    }

    return (
        <form onSubmit = {handleSubmit} className='bg-green-500 p-6 rounded shadow-md w-90 space-y-4'>
            <h2 className='text-2xl font-extrabold'>Login</h2>
            {['email', 'password'].map(field => (
                <div key={field}>
                    <input 
                      name={field}
                      type={field === 'password' ? 'password': 'text'}
                      placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                      value={form[field]}
                      onchange={handleChange}
                      className='w-full p-2 border rounded'
                      />
                      {errors[field] && <p className='text-red-500 text-sm'>{errors[field]}</p>}
                </div>
            ))}
            <button type='submit' className='w-full bg-green-700 text-white p-2 rounded'>Log In</button>
        </form>
    );
}