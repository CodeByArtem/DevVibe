import React from 'react';
import GoBackButton from '@/components/ui/button/GoBackButton';

const TermsOfUse = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6">Terms of Use</h2>
      <p className="mb-4">
        By accessing or using our website and services, you agree to comply with and be bound by these Terms of Use.
        Please read them carefully before using our website.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">1. Introduction</h2>
      <p className="mb-4">
        These Terms of Use govern your use of our website, services, and any content, functionality, and services
        offered on or through the website. By using the website, you agree to these terms.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">2. Acceptable Use</h2>
      <p className="mb-4">
        You agree to use the website only for lawful purposes and in accordance with these Terms of Use. You may not use
        the website in any of the following ways:
      </p>
      <ul className="list-disc pl-8 mb-4">
        <li>In any way that violates any applicable local, national, or international law or regulation.</li>
        <li>To transmit harmful or illegal content.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-4">3. Limitations of Liability</h2>
      <p className="mb-4">
        We do not guarantee that our website will always be available or free of errors. To the extent permitted by law,
        we are not liable for any damages arising from the use of the website.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">4. Modifications to the Terms</h2>
      <p className="mb-4">
        We may update or change these Terms of Use at any time, and the updated version will be posted on this page with
        the effective date.
      </p>

      <p className="mt-6">Last Updated: December 1, 2024</p>
      <GoBackButton />
    </div>
  );
};

export default TermsOfUse;
