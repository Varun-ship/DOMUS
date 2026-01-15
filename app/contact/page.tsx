'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would submit to an API
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
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
          <h1 className="font-bodoni text-4xl md:text-5xl mb-6 tracking-tight">
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
      <section className="py-20 bg-domus-green text-warm-stone stone-texture">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-bodoni text-5xl md:text-6xl mb-6 tracking-tight"
          >
            Request a Ritual
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

