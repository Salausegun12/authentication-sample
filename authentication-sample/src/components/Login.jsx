import { useState } from 'react'

export default function Login ({ onLogin }) {
    const [form, setForm] = useState({ email: '', password: ''});
    const [errors, setErrors] = useState({});

    function validate() {
        const errs = {};
        if (!form.email.trim()) errs.email = 'Email is required';
        if (!form.password) errs.password = 'Password is required';
        setErrors(errs);
        return Object.keys(errs).length === 0;
    }

    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value});
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (!validate()) return;
        onLogin(form)
    }

    return (
        <form onSubmit={handleSubmit} className='bg-white p-6 rounded shadow-md w-80 space-y-4'>
            <h2 className='text-xl font-bold'>Login</h2>
            {['email', 'password'].map((field) => (
                <div key={field}>
                    <input type={field === 'password' ? 'password': 'text'}
                    name={field}
                    placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                    value={form[field]}
                    onChange={handleChange}
                    className='w-full p-2 border rounded-xl' />
                    {errors[field] && <p className='text-red-500 text-sm'>{errors[field]}</p> }
                </div>
            ))}
            <button type='submit' className='w-full bg-green-500 text-white p-2 rounded'>Log In</button>
        </form>
    )
}