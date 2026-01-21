'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    preferredDate: '',
    preferredTime: '',
    location: '',
    goals: '',
    notes: '',
  });
  const [submitted, setSubmitted] = useState(false);

  // Input sanitization function
  const sanitizeInput = (input: string): string => {
    // Remove potentially dangerous characters and trim whitespace
    return input
      .trim()
      .replace(/[<>]/g, '') // Remove angle brackets to prevent HTML injection
      .slice(0, 5000); // Limit length to prevent DoS
  };

  // Email validation
  const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Phone validation (optional field)
  const isValidPhone = (phone: string): boolean => {
    if (!phone) return true; // Optional field
    const phoneRegex = /^[\d\s\-\+\(\)]+$/;
    return phoneRegex.test(phone) && phone.replace(/\D/g, '').length >= 10;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate inputs
    if (!formData.name || formData.name.trim().length < 2) {
      alert('Please enter a valid name (at least 2 characters)');
      return;
    }

    if (!isValidEmail(formData.email)) {
      alert('Please enter a valid email address');
      return;
    }

    if (formData.phone && !isValidPhone(formData.phone)) {
      alert('Please enter a valid phone number');
      return;
    }

    if (!formData.location || formData.location.trim().length < 3) {
      alert('Please enter a valid location');
      return;
    }

    // Sanitize all inputs before submission
    const sanitizedData = {
      name: sanitizeInput(formData.name),
      email: sanitizeInput(formData.email),
      phone: formData.phone ? sanitizeInput(formData.phone) : '',
      preferredDate: formData.preferredDate,
      preferredTime: formData.preferredTime,
      location: sanitizeInput(formData.location),
      goals: formData.goals ? sanitizeInput(formData.goals) : '',
      notes: formData.notes ? sanitizeInput(formData.notes) : '',
    };

    // In a real application, this would submit to an API
    // For now, we'll just show the success message
    console.log('Form data (sanitized):', sanitizedData);
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const value = e.target.value;
    const name = e.target.name;

    // Apply basic sanitization on change for text inputs
    if (name === 'name' || name === 'location' || name === 'goals' || name === 'notes') {
      // Limit length in real-time
      const sanitized = value.slice(0, 5000);
      setFormData({
        ...formData,
        [name]: sanitized,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  if (submitted) {
    return (
      <div className="pt-24 min-h-screen flex items-center justify-center bg-warm-stone">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto px-6 text-center"
        >
          <h1 className="font-caudex text-4xl md:text-5xl mb-6 tracking-tight">
            Thank You
          </h1>
          <p className="font-inter text-lg font-light text-ash-brown/80 leading-relaxed mb-8">
            We've received your request and will respond within 24 hours. We look forward to creating a ritual experience for you.
          </p>
          <a
            href="/"
            className="inline-block bg-domus-green text-warm-stone px-8 py-4 rounded-sm font-inter text-sm tracking-wide hover:bg-domus-green/90 transition-colors"
          >
            Return Home
          </a>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="relative py-20 text-warm-stone overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/background.jpeg"
            alt=""
            fill
            className="object-cover"
            priority
          />
          {/* Green overlay with 40% opacity */}
          <div className="absolute inset-0 bg-domus-green/40"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-caudex text-5xl md:text-6xl mb-6 tracking-tight"
          >
            Book a ritual
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-inter text-lg font-light text-warm-stone/90 leading-relaxed max-w-2xl mx-auto"
          >
            Share your preferences, and we'll respond within 24 hours to confirm availability and discuss your ritual.
          </motion.p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24 bg-warm-stone">
        <div className="max-w-2xl mx-auto px-6">
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div>
              <label htmlFor="name" className="block font-inter text-sm font-normal text-ash-brown mb-2 tracking-wide">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-warm-stone border border-aureum-gold/30 rounded-sm font-inter text-base text-ash-brown focus:outline-none focus:ring-2 focus:ring-aureum-gold/50 focus:border-aureum-gold transition-all"
              />
            </div>

            <div>
              <label htmlFor="email" className="block font-inter text-sm font-normal text-ash-brown mb-2 tracking-wide">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-warm-stone border border-aureum-gold/30 rounded-sm font-inter text-base text-ash-brown focus:outline-none focus:ring-2 focus:ring-aureum-gold/50 focus:border-aureum-gold transition-all"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block font-inter text-sm font-normal text-ash-brown mb-2 tracking-wide">
                Phone (optional)
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-warm-stone border border-aureum-gold/30 rounded-sm font-inter text-base text-ash-brown focus:outline-none focus:ring-2 focus:ring-aureum-gold/50 focus:border-aureum-gold transition-all"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="preferredDate" className="block font-inter text-sm font-normal text-ash-brown mb-2 tracking-wide">
                  Preferred Date
                </label>
                <input
                  type="date"
                  id="preferredDate"
                  name="preferredDate"
                  value={formData.preferredDate}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-warm-stone border border-aureum-gold/30 rounded-sm font-inter text-base text-ash-brown focus:outline-none focus:ring-2 focus:ring-aureum-gold/50 focus:border-aureum-gold transition-all"
                />
              </div>

              <div>
                <label htmlFor="preferredTime" className="block font-inter text-sm font-normal text-ash-brown mb-2 tracking-wide">
                  Preferred Time
                </label>
                <input
                  type="time"
                  id="preferredTime"
                  name="preferredTime"
                  value={formData.preferredTime}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-warm-stone border border-aureum-gold/30 rounded-sm font-inter text-base text-ash-brown focus:outline-none focus:ring-2 focus:ring-aureum-gold/50 focus:border-aureum-gold transition-all"
                />
              </div>
            </div>

            <div>
              <label htmlFor="location" className="block font-inter text-sm font-normal text-ash-brown mb-2 tracking-wide">
                Location
              </label>
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="City and area"
                required
                className="w-full px-4 py-3 bg-warm-stone border border-aureum-gold/30 rounded-sm font-inter text-base text-ash-brown focus:outline-none focus:ring-2 focus:ring-aureum-gold/50 focus:border-aureum-gold transition-all placeholder:text-ash-brown/40"
              />
            </div>

            <div>
              <label htmlFor="goals" className="block font-inter text-sm font-normal text-ash-brown mb-2 tracking-wide">
                What are you hoping to experience? (optional)
              </label>
              <textarea
                id="goals"
                name="goals"
                value={formData.goals}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 bg-warm-stone border border-aureum-gold/30 rounded-sm font-inter text-base text-ash-brown focus:outline-none focus:ring-2 focus:ring-aureum-gold/50 focus:border-aureum-gold transition-all resize-none"
              />
            </div>

            <div>
              <label htmlFor="notes" className="block font-inter text-sm font-normal text-ash-brown mb-2 tracking-wide">
                Additional Notes (optional)
              </label>
              <textarea
                id="notes"
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 bg-warm-stone border border-aureum-gold/30 rounded-sm font-inter text-base text-ash-brown focus:outline-none focus:ring-2 focus:ring-aureum-gold/50 focus:border-aureum-gold transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-domus-green text-warm-stone px-8 py-4 rounded-sm font-inter text-sm tracking-wide hover:bg-domus-green/90 transition-colors"
            >
              Submit Request
            </button>
          </motion.form>
        </div>
      </section>
    </div>
  );
}

