'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Loader as Loader2, CircleCheck as CheckCircle2, CircleAlert as AlertCircle, Send, RotateCcw } from 'lucide-react';
import { SectionHeading } from '@/components/section-heading';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { serviceOptions } from '@/lib/services-data';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import type { SubmitStatus } from '@/types';

const initialForm = {
  fullName: '',
  designation: '',
  organization: '',
  phone: '',
  email: '',
  city: '',
  service: '',
  preferredDate: '',
  message: '',
  agree: false,
};

export function BookWorkshopSection() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<SubmitStatus>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (field: string, value: string | boolean) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: '' }));
  };

  const validate = () => {
    const e: Record<string, string> = {};
    if (form.fullName.trim().length < 2) e.fullName = 'Full name is required';
    if (form.designation.trim().length < 2) e.designation = 'Designation is required';
    if (form.organization.trim().length < 2) e.organization = 'School/College name is required';
    if (!/^[+]?[0-9\s\-()]{10,15}$/.test(form.phone)) e.phone = 'Valid phone required';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Valid email required';
    if (form.city.trim().length < 2) e.city = 'City is required';
    if (!form.service) e.service = 'Select a service';
    if (!form.preferredDate) e.preferredDate = 'Select a date';
    if (!form.agree) e.agree = 'You must agree to be contacted';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    setStatus('loading');
    setErrorMsg('');
    try {
      const res = await fetch('/api/submit-workshop', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        setStatus('success');
        setForm(initialForm);
      } else {
        setStatus('error');
        setErrorMsg(data.message || 'Submission failed. Please try again.');
      }
    } catch {
      setStatus('error');
      setErrorMsg('Network error. Please check your connection.');
    }
  };

  const handleClear = () => {
    setForm(initialForm);
    setErrors({});
    setStatus('idle');
    setErrorMsg('');
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <section id="book" className="relative py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Book a Workshop"
          title={
            <>
              Start Your <span className="text-gradient-gold">Innovation Journey</span>
            </>
          }
          subtitle="Fill out the form below and we'll get back to you within 24 hours."
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 overflow-hidden rounded-3xl glass-card p-6 sm:p-10"
        >
          <AnimatePresence mode="wait">
            {status === 'success' ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-16 text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 200 }}
                  className="flex h-20 w-20 items-center justify-center rounded-full bg-green-500/10"
                >
                  <CheckCircle2 className="h-12 w-12 text-green-500" />
                </motion.div>
                <h3 className="mt-6 font-display text-2xl font-bold">
                  Inquiry Submitted!
                </h3>
                <p className="mt-2 max-w-md text-muted-foreground">
                  Thank you for your interest. We'll contact you within 24 hours
                  to discuss your workshop.
                </p>
                <Button
                  onClick={() => setStatus('idle')}
                  variant="outline"
                  className="mt-6 glass-card"
                >
                  Submit Another Inquiry
                </Button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <FormField
                    label="Full Name"
                    error={errors.fullName}
                    required
                  >
                    <Input
                      value={form.fullName}
                      onChange={(e) => handleChange('fullName', e.target.value)}
                      placeholder="John Doe"
                      className="glass-card"
                    />
                  </FormField>
                  <FormField
                    label="Designation"
                    error={errors.designation}
                    required
                  >
                    <Input
                      value={form.designation}
                      onChange={(e) => handleChange('designation', e.target.value)}
                      placeholder="Principal / Teacher / Student"
                      className="glass-card"
                    />
                  </FormField>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <FormField
                    label="School / College Name"
                    error={errors.organization}
                    required
                  >
                    <Input
                      value={form.organization}
                      onChange={(e) => handleChange('organization', e.target.value)}
                      placeholder="Institution name"
                      className="glass-card"
                    />
                  </FormField>
                  <FormField
                    label="Phone Number"
                    error={errors.phone}
                    required
                  >
                    <Input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => handleChange('phone', e.target.value)}
                      placeholder="+91 98765 43210"
                      className="glass-card"
                    />
                  </FormField>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <FormField
                    label="Email Address"
                    error={errors.email}
                    required
                  >
                    <Input
                      type="email"
                      value={form.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      placeholder="you@example.com"
                      className="glass-card"
                    />
                  </FormField>
                  <FormField label="City" error={errors.city} required>
                    <Input
                      value={form.city}
                      onChange={(e) => handleChange('city', e.target.value)}
                      placeholder="Your city"
                      className="glass-card"
                    />
                  </FormField>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <FormField label="Select Service" error={errors.service} required>
                    <Select
                      value={form.service}
                      onValueChange={(v) => handleChange('service', v)}
                    >
                      <SelectTrigger className="glass-card">
                        <SelectValue placeholder="Choose a service" />
                      </SelectTrigger>
                      <SelectContent>
                        {serviceOptions.map((opt) => (
                          <SelectItem key={opt.value} value={opt.value}>
                            {opt.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormField>
                  <FormField
                    label="Preferred Date"
                    error={errors.preferredDate}
                    required
                  >
                    <Input
                      type="date"
                      min={today}
                      value={form.preferredDate}
                      onChange={(e) => handleChange('preferredDate', e.target.value)}
                      className="glass-card"
                    />
                  </FormField>
                </div>

                <FormField label="Message (Optional)">
                  <Textarea
                    value={form.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    placeholder="Tell us about your requirements..."
                    className="glass-card min-h-[100px]"
                    maxLength={1000}
                  />
                </FormField>

                <div className="flex items-start gap-3">
                  <Checkbox
                    checked={form.agree}
                    onCheckedChange={(v) => handleChange('agree', v === true)}
                  />
                  <label className="text-sm text-muted-foreground">
                    I agree to be contacted regarding my workshop inquiry.
                  </label>
                </div>
                {errors.agree && (
                  <p className="text-sm font-medium text-destructive">
                    {errors.agree}
                  </p>
                )}

                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 rounded-xl border border-destructive/30 bg-destructive/5 p-3 text-sm text-destructive"
                  >
                    <AlertCircle className="h-4 w-4 flex-shrink-0" />
                    {errorMsg}
                  </motion.div>
                )}

                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button
                    type="submit"
                    disabled={status === 'loading'}
                    className="flex-1 bg-gradient-to-r from-yellow-400 to-amber-500 text-zinc-900 hover:from-yellow-500 hover:to-amber-600"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Submit Inquiry
                      </>
                    )}
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={handleClear}
                    className="glass-card"
                  >
                    <RotateCcw className="mr-2 h-4 w-4" />
                    Clear Form
                  </Button>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

function FormField({
  label,
  error,
  required,
  children,
}: {
  label: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium">
        {label}
        {required && <span className="ml-1 text-yellow-500">*</span>}
      </label>
      {children}
      {error && (
        <p className="mt-1 text-xs font-medium text-destructive">{error}</p>
      )}
    </div>
  );
}
