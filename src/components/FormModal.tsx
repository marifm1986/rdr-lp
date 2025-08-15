import React, { useState } from 'react';
import { Modal } from './ui/Modal';
import { Button } from './ui/Button';
import emailjs from 'emailjs-com';

// US states array for the dropdown
const usStates = [
  'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware',
  'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
  'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
  'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico',
  'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania',
  'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
  'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
];

// Debt amount options
const debtAmounts = [
  '$0 - $4,999', '$5,000 - $7,499', '$7,500 - $9,999', '$10,000 - $14,999',
  '$15,000 - $19,999', '$20,000 - $29,999', '$30,000 - $39,999', '$40,000 - $49,999',
  '$50,000 - $59,999', '$60,000 - $69,999', '$70,000 - $79,999', '$80,000 - $89,999',
  '$90,000 - $99,999', '$100,000+'
];

interface FormModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNotification: (type: 'success' | 'error', title: string, message: string) => void;
}
export function FormModal({
  isOpen,
  onClose,
  onNotification
}: FormModalProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    debtAmount: '',
    state: ''
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // EmailJS configuration
    const serviceId = 'service_2j9mi1k';
    const templateId = 'template_bffzhpy';
    const userId = 'PnDk_YjucNlEzJTJW';

    // Prepare email template parameters
    const templateParams = {
      first_name: formData.firstName,
      last_name: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      debt_amount: formData.debtAmount,
      state: formData.state,
      message: `New debt relief quote request from ${formData.firstName} ${formData.lastName}`,
      to_email: 'royallandingpage@gmail.com', 
      reply_to: formData.email
    };

    // Send email using EmailJS
    emailjs.send(serviceId, templateId, templateParams, userId)
      .then((response) => {
        console.log('Email sent successfully:', response.status, response.text);
        setIsLoading(false);
        
        // Reset form data
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          debtAmount: '',
          state: ''
        });
        
        // Close form modal
        onClose();
        
        // Show success notification
        onNotification(
          'success',
          'Thank You!',
          'Your information has been submitted successfully. One of our debt relief specialists will contact you shortly.'
        );
      })
      .catch((error) => {
        console.error('Email sending failed:', error);
        setIsLoading(false);
        
        // Close form modal
        onClose();
        
        // Show error notification
        onNotification(
          'error',
          'Submission Failed',
          'There was an error sending your request. Please try again or contact us directly.'
        );
      });
  };
  return <Modal isOpen={isOpen} onClose={onClose} title="Get Your Free Debt Relief Quote">
      <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B1538]" required />
            </div>
            <div>
              <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B1538]" required />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B1538]" required />
            </div>
            <div>
              <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B1538]" required />
            </div>
          </div>
          <div className="relative">
            <select name="debtAmount" value={formData.debtAmount} onChange={handleChange} className="w-full px-4 py-3 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B1538] bg-white appearance-none" required>
              <option value="" disabled>
                Select Your Debt Amount
              </option>
              {debtAmounts.map((amount, index) => (
                <option key={index} value={amount}>
                  {amount}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
          <div className="relative">
            <select name="state" value={formData.state} onChange={handleChange} className="w-full px-4 py-3 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B1538] bg-white appearance-none" required>
              <option value="" disabled>
                Select Your State
              </option>
              {usStates.map((state, index) => (
                <option key={index} value={state}>
                  {state}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
          <div className="flex items-start">
            <input type="checkbox" id="consent" className="mt-1 mr-2" required />
            <label htmlFor="consent" className="text-xs text-gray-600">
              I consent to receive calls and SMS messages from Royal Debt Relief
              and understand that consent is not required to use services.
            </label>
          </div>
          <Button variant="primary" className="w-full py-3 text-base font-semibold" disabled={isLoading}>
            {isLoading ? 'Sending...' : 'GET MY FREE QUOTE'}
          </Button>
        </form>
    </Modal>;
}