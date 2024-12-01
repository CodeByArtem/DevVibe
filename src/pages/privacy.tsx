import React from 'react';
import GoBackButton from '@/components/ui/button/GoBackButton';

const Privacy = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6">Privacy Policy</h2>
      <p className="mb-4">
        This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website. Please read it carefully.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">1. Information We Collect</h2>
      <p className="mb-4">
        We collect personal information that you provide to us when using our services. This may include your name, email address, and any other information you provide.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">2. How We Use Your Information</h2>
      <p className="mb-4">
        The information we collect is used to improve our services, communicate with you, and provide a better experience on our website.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">3. Data Security</h2>
      <p className="mb-4">
        We take appropriate security measures to protect your personal data from unauthorized access or disclosure. However, no method of transmission over the internet is completely secure.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">4. Sharing Your Information</h2>
      <p className="mb-4">
        We do not sell or rent your personal information to third parties. However, we may share your information with trusted partners who assist in providing our services.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">5. Changes to This Privacy Policy</h2>
      <p className="mb-4">
        We reserve the right to update this Privacy Policy at any time. Any changes will be posted on this page with the updated date.
      </p>

      <p className="mt-6">Last Updated: December 1, 2024</p>
      <GoBackButton />
    </div>
  );
};

export default Privacy;
