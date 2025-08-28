
import React from 'react';

const App: React.FC = () => {

  const Question: React.FC<{ number: string; label: string; required?: boolean; children?: React.ReactNode; }> = ({ number, label, required, children }) => (
    <div className="mb-5 break-inside-avoid">
      <label className="block text-sm font-semibold text-gray-700 mb-1.5">
        {number}. {label} {required && <span className="text-red-500">*</span>}
      </label>
      {children}
    </div>
  );

  const AnswerSpace: React.FC<{ lines?: number }> = ({ lines = 1 }) => (
    <>
      {Array.from({ length: lines }).map((_, i) => (
        <div key={i} className="border-b border-gray-400 min-h-[24px] mb-1"></div>
      ))}
    </>
  );

  const Section: React.FC<{ title: string; className?: string; children: React.ReactNode }> = ({ title, className, children }) => (
    <section className={`mb-6 break-inside-avoid ${className || ''}`}>
      <h2 className="text-xl font-bold text-[#1e3a8a] border-b-2 border-gray-200 pb-2 mb-5">
        {title}
      </h2>
      {children}
    </section>
  );

  return (
    <main className="bg-gray-100 min-h-screen p-4 sm:p-8 print:bg-white print:p-0">
      <div className="max-w-4xl mx-auto bg-white p-6 sm:p-10 md:p-12 shadow-lg rounded-lg print:shadow-none print:rounded-none print:p-1 font-sans text-gray-800 leading-relaxed">
        
        <header className="text-center mb-8 pb-5 border-b-2 border-gray-200">
          <div className="flex justify-center mb-4">
            <img 
              src="https://static.wixstatic.com/media/297e2c_219dd8a8a2004c38ae6baf48171cea73~mv2.png" 
              alt="PIPPS Smart Apps Logo"
              className="w-64 h-auto"
            />
          </div>
          <h1 className="text-3xl font-bold text-[#1e3a8a] tracking-tight">Business Information Form</h1>
          <p className="text-gray-500 mt-1">Help us create your amazing landing page by PIPPS Smart Apps</p>
        </header>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8 text-sm">
          <h3 className="font-bold text-[#1e3a8a] text-base mb-2">Instructions:</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            <li>Complete all required fields (marked with <span className="text-red-500 font-bold">*</span>).</li>
            <li>Use a pen to fill in your responses clearly if printing.</li>
            <li>Attach logos and images separately when returning this form.</li>
            <li>For links, write full URLs (e.g., https://www.instagram.com/yourpage).</li>
            <li>Return this completed form to your PIPPS Smart Apps contact.</li>
          </ul>
        </div>
        
        <Section title="Business Details & Branding">
          <Question number="1" label="Business Name" required><AnswerSpace /></Question>
          <Question number="2" label="Your Tagline or Slogan"><AnswerSpace /></Question>
          <Question number="3" label="Preferred Heading Font Style"><AnswerSpace /></Question>
          <Question number="4" label="Preferred Heading Color"><AnswerSpace /></Question>
          <Question number="5" label="Your Logo">
            <p className="text-xs italic text-gray-500 mt-1">[Please attach the logo file separately when returning this form.]</p>
          </Question>
        </Section>
        
        <Section title="About Your Business">
          <Question number="6" label="Your Business Story (the 'why' behind your work)"><AnswerSpace lines={3} /></Question>
          <Question number="7" label="Your Mission"><AnswerSpace lines={2} /></Question>
          <Question number="8" label="What Makes You Unique?"><AnswerSpace lines={2} /></Question>
        </Section>
        
        <Section title="Marketing & SEO">
          <Question number="9" label="What is the main goal of your landing page?" required><AnswerSpace /></Question>
          <Question number="10" label="Who is your ideal customer?"><AnswerSpace /></Question>
          <Question number="11" label="List 5–10 keywords people would use to find you">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 mt-2">
              {Array.from({ length: 10 }).map((_, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="font-bold text-gray-400 w-6 text-right">{i + 1}.</span>
                  <div className="flex-1 border-b border-gray-400 min-h-[24px]"></div>
                </div>
              ))}
            </div>
          </Question>
        </Section>

        <div className="print:break-before-page"></div>

        <Section title="Services / Products">
          <Question number="12" label="List up to 10 key services or products">
            <div className="space-y-2 mt-2">
              {Array.from({ length: 10 }).map((_, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="font-bold text-gray-400 w-6 text-right">{i + 1}.</span>
                  <div className="flex-1 border-b border-gray-400 min-h-[24px]"></div>
                </div>
              ))}
            </div>
          </Question>
        </Section>

        <Section title="Contact & Social Media">
          <Question number="13" label="Email Address for Customer Contact" required><AnswerSpace /></Question>
          <Question number="14" label="Phone Number"><AnswerSpace /></Question>
          <Question number="15" label="Is this a WhatsApp number?">
            <div className="flex gap-8 mt-2 text-sm">
              <div className="flex items-center gap-2"><div className="w-4 h-4 border-2 border-gray-400 rounded-sm"></div> Yes</div>
              <div className="flex items-center gap-2"><div className="w-4 h-4 border-2 border-gray-400 rounded-sm"></div> No</div>
            </div>
          </Question>
          <Question number="16" label="Business Address"><AnswerSpace lines={2}/></Question>
          <Question number="17" label="Primary Website Link (e.g., Etsy, Booking Page)"><AnswerSpace /></Question>
          <Question number="18" label="Facebook"><AnswerSpace /></Question>
          <Question number="19" label="Instagram"><AnswerSpace /></Question>
          <Question number="20" label="LinkedIn / Other"><AnswerSpace /></Question>
        </Section>
        
        <Section title="Business Images">
          <Question number="21" label="Up to 5 images">
            <p className="text-xs italic text-gray-500 mt-1">[Please attach image files separately. Label them clearly (e.g., "Product 1," "Team Photo").]</p>
          </Question>
        </Section>
        
        <footer className="text-center mt-10 pt-5 border-t-2 border-gray-200 text-xs">
          <p className="font-bold text-gray-600">Thank you for completing the PIPPS Smart Apps Business Information Form.</p>
          <p className="text-gray-500 mt-1">Please return this form along with any supporting files to your project coordinator.</p>
          <div className="mt-4 font-semibold text-gray-700 text-sm">
            Parent Company: J.C Epiphany Limited – https://jcepiphany.com/
          </div>
        </footer>

      </div>
      
      <button 
        onClick={() => window.print()}
        className="fixed top-4 right-4 bg-blue-600 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors print:hidden"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block mr-2" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M5 4v3H4a2 2 0 00-2 2v6a2 2 0 002 2h12a2 2 0 002-2V9a2 2 0 00-2-2h-1V4a2 2 0 00-2-2H7a2 2 0 00-2 2zm8 0H7v3h6V4zm0 8H7V9h6v3z" clipRule="evenodd" />
          <path d="M9 17a1 1 0 011-1h0a1 1 0 011 1v1a1 1 0 01-1 1h0a1 1 0 01-1-1v-1z" />
        </svg>
        Print Form
      </button>
    </main>
  );
};

export default App;
