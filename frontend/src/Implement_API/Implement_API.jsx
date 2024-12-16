// import React, { useState } from "react";

// export function Implement_API(){
//   const [selectedLanguage, setSelectedLanguage] = useState("Python");
//   const [helpForm, setHelpForm] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });
//   const [formSuccess, setFormSuccess] = useState(false);

//   const codeSnippets = {
//     Python: `import http.client

// conn = http.client.HTTPSConnection("ai-background-remover.p.rapidapi.com")

// payload = ""

// headers = {
//     'x-rapidapi-key': "<your-api-key>",
//     'x-rapidapi-host': "ai-background-remover.p.rapidapi.com",
//     'Content-Type': "application/x-www-form-urlencoded"
// }

// conn.request("POST", "/image/matte/v1", payload, headers)

// res = conn.getresponse()
// data = res.read()

// print(data.decode("utf-8"))`,
//     "Node.js": `const http = require('https');

// const options = {
//   method: 'POST',
//   hostname: 'ai-background-remover.p.rapidapi.com',
//   headers: {
//     'x-rapidapi-key': '<your-api-key>',
//     'Content-Type': 'application/x-www-form-urlencoded'
//   }
// };

// const req = http.request(options, res => {
//   res.on('data', chunk => console.log(chunk.toString()));
// });

// req.end();`,
//     Java: `AsyncHttpClient client = new DefaultAsyncHttpClient();
// client.prepare("POST", "https://ai-background-remover.p.rapidapi.com/image/matte/v1")
//   .setHeader("x-rapidapi-key", "<your-api-key>")
//   .setHeader("Content-Type", "application/x-www-form-urlencoded")
//   .execute()
//   .toCompletableFuture()
//   .thenAccept(System.out::println)
//   .join();

// client.close();`,
//     JavaScript: `const xhr = new XMLHttpRequest();
// xhr.open('POST', 'https://ai-background-remover.p.rapidapi.com/image/matte/v1');
// xhr.setRequestHeader('x-rapidapi-key', '<your-api-key>');
// xhr.send(null);`,
//    Go : `package main

// import (
// 	"fmt"
// 	"net/http"
// 	"io"
// )

// func main() {

// 	url := "https://ai-background-remover.p.rapidapi.com/image/matte/v1"

// 	req, _ := http.NewRequest("POST", url, nil)

// 	req.Header.Add("x-rapidapi-key", "22bae51b51msh427681c913a6933p13b6c0jsna0e35215ad3f")
// 	req.Header.Add("x-rapidapi-host", "ai-background-remover.p.rapidapi.com")
// 	req.Header.Add("Content-Type", "application/x-www-form-urlencoded")

// 	res, _ := http.DefaultClient.Do(req)

// 	defer res.Body.Close()
// 	body, _ := io.ReadAll(res.Body)

// 	fmt.Println(res)
// 	fmt.Println(string(body))

// }`,
// Php : `<?php

// $curl = curl_init();

// curl_setopt_array($curl, [
// 	CURLOPT_URL => "https://ai-background-remover.p.rapidapi.com/image/matte/v1",
// 	CURLOPT_RETURNTRANSFER => true,
// 	CURLOPT_ENCODING => "",
// 	CURLOPT_MAXREDIRS => 10,
// 	CURLOPT_TIMEOUT => 30,
// 	CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
// 	CURLOPT_CUSTOMREQUEST => "POST",
// 	CURLOPT_POSTFIELDS => "",
// 	CURLOPT_HTTPHEADER => [
// 		"Content-Type: application/x-www-form-urlencoded",
// 		"x-rapidapi-host: ai-background-remover.p.rapidapi.com",
// 		"x-rapidapi-key: 22bae51b51msh427681c913a6933p13b6c0jsna0e35215ad3f"
// 	],
// ]);

// $response = curl_exec($curl);
// $err = curl_error($curl);

// curl_close($curl);

// if ($err) {
// 	echo "cURL Error #:" . $err;
// } else {
// 	echo $response;
// }`


//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setHelpForm((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmitForm = (e) => {
//     e.preventDefault();
//     console.log("Email sent to admin@123 with the following data:", helpForm);
//     setFormSuccess(true);
//     setHelpForm({ name: "", email: "", message: "" });
//     setTimeout(() => setFormSuccess(false), 5000);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
//       {/* Header */}
//       <div className="bg-blue-600 text-white py-12 text-center">
//         <h1 className="text-4xl font-extrabold sm:text-5xl lg:text-6xl">AI Background Remover API</h1>
//         <p className="mt-4 text-lg sm:text-xl">Effortlessly integrate background removal with our powerful API</p>
//       </div>

//       {/* Main Content */}
//       <div className="container mx-auto px-6 py-8 space-y-12">
//         {/* Language Selection */}
//         <div>
//           <h2 className="text-3xl font-bold text-gray-800">API Integration Code</h2>
//           <p className="mt-2 text-gray-600">
//             Select your programming language below to view the corresponding integration code snippet.
//           </p>
//           <div className="mt-6 flex flex-wrap gap-4">
//             {Object.keys(codeSnippets).map((lang) => (
//               <button
//                 key={lang}
//                 className={`px-6 py-2 rounded-md font-semibold shadow-md ${
//                   selectedLanguage === lang
//                     ? "bg-blue-600 text-white"
//                     : "bg-white text-blue-600 border border-blue-600 hover:bg-blue-100"
//                 }`}
//                 onClick={() => setSelectedLanguage(lang)}
//               >
//                 {lang}
//               </button>
//             ))}
//           </div>
//           <div className="mt-6 p-4 bg-white rounded-md shadow-lg">
//             <pre className="text-sm whitespace-pre-wrap">
//               <code>{codeSnippets[selectedLanguage]}</code>
//             </pre>
//             <button
//               className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700"
//               onClick={() => navigator.clipboard.writeText(codeSnippets[selectedLanguage])}
//             >
//               Copy Code
//             </button>
//           </div>
//         </div>

//         {/* Help Center */}
//         <div>
//           <h2 className="text-3xl font-bold text-gray-800">Help Center</h2>
//           <p className="mt-2 text-gray-600">Need assistance with the API? Send us a message below.</p>
//           <form onSubmit={handleSubmitForm} className="mt-6 bg-white p-6 rounded-md shadow-lg space-y-4">
//             <div>
//               <label htmlFor="name" className="block text-gray-700 font-medium">
//                 Your Name:
//               </label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 value={helpForm.name}
//                 onChange={handleInputChange}
//                 className="mt-2 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 required
//               />
//             </div>
//             <div>
//               <label htmlFor="email" className="block text-gray-700 font-medium">
//                 Your Email:
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 value={helpForm.email}
//                 onChange={handleInputChange}
//                 className="mt-2 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 required
//               />
//             </div>
//             <div>
//               <label htmlFor="message" className="block text-gray-700 font-medium">
//                 Your Message:
//               </label>
//               <textarea
//                 id="message"
//                 name="message"
//                 value={helpForm.message}
//                 onChange={handleInputChange}
//                 rows="4"
//                 className="mt-2 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 required
//               ></textarea>
//             </div>
//             <button
//               type="submit"
//               className="w-full px-4 py-2 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700"
//             >
//               Send Message
//             </button>
//           </form>
//           {formSuccess && (
//             <p className="mt-4 text-green-700 font-medium text-center">
//               Thank you for reaching out! We will respond to you shortly.
//             </p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };







import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { solarizedlight } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Link } from "react-router-dom";

export function Implement_API() {
  const [selectedLanguage, setSelectedLanguage] = useState("Python");
  const [helpForm, setHelpForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formSuccess, setFormSuccess] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);

  const codeSnippets = {
    Python: `import http.client

conn = http.client.HTTPSConnection("ai-background-remover.p.rapidapi.com")

payload = ""

headers = {
    'x-rapidapi-key': "<your-api-key>",
    'x-rapidapi-host': "ai-background-remover.p.rapidapi.com",
    'Content-Type': "application/x-www-form-urlencoded"
}

conn.request("POST", "/image/matte/v1", payload, headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))`,
    "Node.js": `const http = require('https');

const options = {
  method: 'POST',
  hostname: 'ai-background-remover.p.rapidapi.com',
  headers: {
    'x-rapidapi-key': '<your-api-key>',
    'Content-Type': 'application/x-www-form-urlencoded'
  }
};

const req = http.request(options, res => {
  res.on('data', chunk => console.log(chunk.toString()));
});

req.end();`,
    Java: `AsyncHttpClient client = new DefaultAsyncHttpClient();
client.prepare("POST", "https://ai-background-remover.p.rapidapi.com/image/matte/v1")
  .setHeader("x-rapidapi-key", "<your-api-key>")
  .setHeader("Content-Type", "application/x-www-form-urlencoded")
  .execute()
  .toCompletableFuture()
  .thenAccept(System.out::println)
  .join();

client.close();`,
    JavaScript: `const xhr = new XMLHttpRequest();
xhr.open('POST', 'https://ai-background-remover.p.rapidapi.com/image/matte/v1');
xhr.setRequestHeader('x-rapidapi-key', '<your-api-key>');
xhr.send(null);`,
    Go: `package main

import (
	"fmt"
	"net/http"
	"io"
)

func main() {

	url := "https://ai-background-remover.p.rapidapi.com/image/matte/v1"

	req, _ := http.NewRequest("POST", url, nil)

	req.Header.Add("x-rapidapi-key", "<your-api-key>")
	req.Header.Add("x-rapidapi-host", "ai-background-remover.p.rapidapi.com")
	req.Header.Add("Content-Type", "application/x-www-form-urlencoded")

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := io.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))
}`,
    PHP: `<?php

$curl = curl_init();

curl_setopt_array($curl, [
	CURLOPT_URL => "https://ai-background-remover.p.rapidapi.com/image/matte/v1",
	CURLOPT_RETURNTRANSFER => true,
	CURLOPT_ENCODING => "",
	CURLOPT_MAXREDIRS => 10,
	CURLOPT_TIMEOUT => 30,
	CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
	CURLOPT_CUSTOMREQUEST => "POST",
	CURLOPT_POSTFIELDS => "",
	CURLOPT_HTTPHEADER => [
		"Content-Type: application/x-www-form-urlencoded",
		"x-rapidapi-host: ai-background-remover.p.rapidapi.com",
		"x-rapidapi-key: <your-api-key>"
	],
]);

$response = curl_exec($curl);
$err = curl_error($curl);

curl_close($curl);

if ($err) {
	echo "cURL Error #:" . $err;
} else {
	echo $response;
}`,
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setHelpForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    console.log("Email sent to admin@123 with the following data:", helpForm);
    setFormSuccess(true);
    setHelpForm({ name: "", email: "", message: "" });
    setTimeout(() => setFormSuccess(false), 5000);
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(codeSnippets[selectedLanguage]);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 mt-20">
      {/* Header */}
      <div className="bg-blue-600 text-white py-12 text-center">
        <h1 className="text-4xl font-extrabold sm:text-5xl lg:text-6xl">AI Background Remover API</h1>
        <p className="mt-4 text-lg sm:text-xl">Effortlessly integrate background removal with our powerful API</p>
      </div>




      
      <section className="bg-blue-600 text-white py-16 text-center">
        <h2 className="text-3xl font-semibold mb-4">Ready to Get Started?</h2>
        <p className="text-lg mb-6">
          Choose a plan that fits your business needs and start integrating today. Our API is easy to use and provides powerful tools to enhance your operations.
        </p>
        <Link to='/api_buy'  className="bg-white text-blue-600 py-3 px-8 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300">
          Buy Now
        </Link>
      </section>
   











      {/* Main Content */}
      <div className="container mx-auto px-6 py-8 space-y-12">
        {/* Language Selection */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800">API Integration Code</h2>
          <p className="mt-2 text-gray-600">
            Select your programming language below to view the corresponding integration code snippet.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            {Object.keys(codeSnippets).map((lang) => (
              <button
                key={lang}
                className={`px-6 py-2 rounded-md font-semibold shadow-md ${
                  selectedLanguage === lang
                    ? "bg-blue-600 text-white"
                    : "bg-white text-blue-600 border border-blue-600 hover:bg-blue-100"
                }`}
                onClick={() => setSelectedLanguage(lang)}
              >
                {lang}
              </button>
            ))}
          </div>
          <div className="mt-6 p-4 bg-white rounded-md shadow-lg">
            <SyntaxHighlighter
              language={selectedLanguage.toLowerCase()}
              style={solarizedlight}
              className="text-sm whitespace-pre-wrap"
            >
              {codeSnippets[selectedLanguage]}
            </SyntaxHighlighter>
            <button
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700"
              onClick={handleCopyCode}
            >
              Copy Code
            </button>
            {copySuccess && (
              <p className="mt-2 text-green-600 font-medium">Code copied to clipboard!</p>
            )}
          </div>
        </div>

        {/* Help Center */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800">Help Center</h2>
          <p className="mt-2 text-gray-600">Need assistance with the API? Send us a message below.</p>
          <form onSubmit={handleSubmitForm} className="mt-6 bg-white p-6 rounded-md shadow-lg space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-700 font-medium">
                Your Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={helpForm.name}
                onChange={handleInputChange}
                className="mt-2 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 font-medium">
                Your Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={helpForm.email}
                onChange={handleInputChange}
                className="mt-2 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 font-medium">
                Your Message:
              </label>
              <textarea
                id="message"
                name="message"
                value={helpForm.message}
                onChange={handleInputChange}
                rows="4"
                className="mt-2 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700"
            >
              Send Message
            </button>
          </form>
          {formSuccess && (
            <p className="mt-4 text-green-700 font-medium text-center">
              Thank you for reaching out! We will respond to you shortly.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

