import React, { useState } from 'react';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        email: '',
        phone: '',
        address: '',
        message: '',
        preferredContact: 'Email',
        bestTime: '',
        agreeToTerms: false,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add logic to handle form submission (e.g., send data to backend, display success message)
        console.log(formData);
    };

    return (
        <div className="max-w-screen-lg mx-auto p-8">
            <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
            <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                    <label className="block font-bold mb-1">Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded px-4 py-2"
                        required
                    />
                </div>
                <div>
                    <label className="block font-bold mb-1">Phone Number:</label>
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded px-4 py-2"
                        required
                    />
                </div>
                <div>
                    <label className="block font-bold mb-1">Address:</label>
                    <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded px-4 py-2"
                        required
                    />
                </div>
                <div>
                    <label className="block font-bold mb-1">Message:</label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        placeholder="Type your message here..."
                        className="w-full border border-gray-300 rounded px-4 py-2"
                        required
                    />
                </div>
                <div>
                    <label className="block font-bold mb-1">Preferred Contact Method:</label>
                    <select
                        name="preferredContact"
                        value={formData.preferredContact}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded px-4 py-2"
                    >
                        <option value="Email">Email</option>
                        <option value="Phone">Phone</option>
                        <option value="No preference">No preference</option>
                    </select>
                </div>
                <div>
                    <label className="block font-bold mb-1">Best Time to Contact:</label>
                    <input
                        type="text"
                        name="bestTime"
                        value={formData.bestTime}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded px-4 py-2"
                    />
                </div>
                <div className="flex items-center">
                    <input
                        type="checkbox"
                        name="agreeToTerms"
                        checked={formData.agreeToTerms}
                        onChange={(e) =>
                            setFormData((prevData) => ({
                                ...prevData,
                                agreeToTerms: e.target.checked,
                            }))
                        }
                        className="mr-2"
                        required
                    />
                    <span className="text-sm">
            I agree to the <a href="" className="text-blue-500 hover:underline">Privacy Policy</a> and{' '}
                        <a href="" className="text-blue-500 hover:underline">Terms of Service</a>.
          </span>
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4"
                >
                    Send Message
                </button>
            </form>
        </div>
    );
};

export default ContactPage;