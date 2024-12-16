import React from 'react';
import {Link} from 'react-router-dom'
export function Termcondition() {
  return (
    <div className="bg-gray-50 text-gray-900 font-sans mt-20">
      {/* Header */}
      <header className="bg-blue-600 text-white py-6 text-center">
        <h1 className="text-3xl font-semibold">Terms and Conditions</h1>
        <p className="text-lg">Welcome to RemoveBgg, the leading AI-driven solution for background removal</p>
      </header>

      {/* Main Content */}
      <main className="max-w-screen-xl mx-auto px-6 py-12 space-y-12">
        <section className="bg-white shadow-lg rounded-lg p-6 space-y-6">
          <h2 className="text-2xl font-semibold text-blue-600">Introduction</h2>
          <p className="text-base">
            These Terms and Conditions govern your use of RemoveBgg's services, which include background removal from images
            using machine learning algorithms. By using our website and services, you agree to comply with these terms.
          </p>
        </section>

        <section className="bg-white shadow-lg rounded-lg p-6 space-y-6">
          <h2 className="text-2xl font-semibold text-blue-600">Acceptable Use</h2>
          <p className="text-base">
            You agree not to misuse the RemoveBgg platform or its services. This includes using our platform for illegal activities,
            uploading offensive content, or exploiting the machine learning technology in ways not intended by the company.
          </p>
        </section>

        {/* New Section: Restrictions on Content */}
        <section className="bg-white shadow-lg rounded-lg p-6 space-y-6">
          <h2 className="text-2xl font-semibold text-blue-600">Prohibited Content</h2>
          <p className="text-base">
            You are prohibited from using our services to upload or process the following types of content:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Images that contain explicit or adult content (18+ material), including nudity or sexual content.</li>
            <li>Images that depict violence, hate speech, or any form of harassment or discrimination.</li>
            <li>Images that are intended for illegal or unethical activities, including but not limited to, copyright infringement or illegal trades.</li>
            <li>Any content that violates the rights of others, including intellectual property rights, privacy rights, or any other legal rights.</li>
          </ul>
          <p className="text-base">
            RemoveBgg reserves the right to monitor and reject any content that violates these terms. If such content is uploaded, your access to the service may be suspended or terminated.
          </p>
        </section>

        {/* New Section: Legal Actions and Enforcement */}
        <section className="bg-white shadow-lg rounded-lg p-6 space-y-6">
          <h2 className="text-2xl font-semibold text-blue-600">Legal Actions and Enforcement</h2>
          <p className="text-base">
            By using RemoveBgg's services, you acknowledge and agree that the company may take legal action if you violate any of these terms.
            This includes, but is not limited to:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Legal action for the misuse of the platform or uploading prohibited content.</li>
            <li>Suspension or termination of your account or access to our services without prior notice.</li>
            <li>Notification to law enforcement authorities if your actions involve illegal activities or violate the law.</li>
          </ul>
          <p className="text-base">
            RemoveBgg takes the misuse of its platform seriously and will cooperate with authorities to enforce these terms.
          </p>
        </section>

        <section className="bg-white shadow-lg rounded-lg p-6 space-y-6">
          <h2 className="text-2xl font-semibold text-blue-600">Liability</h2>
          <p className="text-base">
            RemoveBgg will not be held liable for any damages or losses that arise from using our services. While we strive to
            provide the highest quality results, we cannot guarantee 100% accuracy in every case.
          </p>
        </section>

        <section className="bg-white shadow-lg rounded-lg p-6 space-y-6">
          <h2 className="text-2xl font-semibold text-blue-600">Privacy Policy</h2>
          <p className="text-base">
            We are committed to safeguarding your personal information. For more details, please read our <Link to="/privacy_policy" className="text-blue-500 hover:underline">Privacy Policy</Link>.
          </p>
        </section>

        <section className="bg-white shadow-lg rounded-lg p-6 space-y-6">
          <h2 className="text-2xl font-semibold text-blue-600">Modifications to the Terms</h2>
          <p className="text-base">
            We may update these Terms and Conditions from time to time. Any changes will be posted on this page, and the new terms
            will be effective immediately upon posting.
          </p>
        </section>
      </main>

    
    </div>
  );
}
