# GPT-4_API_Access

A Next.js application designed to interface with OpenAI's GPT-4 API, featuring a password-protected chat experience. This project showcases how to integrate and utilize OpenAI's GPT-4 model to generate text-based responses efficiently.

## Features

- **GPT-4 Integration**: Connects seamlessly with OpenAI's GPT-4 API for generating high-quality text responses.
- **Password Protection**: Restricts access to the chat interface with a simple password mechanism.
- **Responsive Design**: Provides a clean and user-friendly chat interface optimized for various devices.
- **Dark Mode**: Allows users to toggle between light and dark themes for a personalized experience.

## Installation

To run this project locally, follow these steps:

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/yourusername/GPT-4_ApiAccess.git
   cd GPT-4_ApiAccess
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

3. **Set Up Environment Variables**:
   Create a `.env.local` file in the root directory and add your OpenAI API key and Passkey:

   ```plaintext
   OPENAI_API_KEY=your_openai_api_key_here
   ```
      ```plaintext
   AUTH_PASSWORD=set_your_passkey
   ```

4. **Run the Development Server**:

   ```bash
   npm run dev
   ```

   Navigate to `http://localhost:3000` in your browser to view the application.

## Usage

- **Access**: Enter the password on the login page to access the chat interface.
- **Chat**: Type your message into the input field and press "Send" to interact with GPT-4.
- **Dark Mode**: Toggle the dark mode by clicking the sun/moon icon in the header.

## Deployment

To deploy this application to Vercel:

1. **Push the Repository to GitHub**:

   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Connect to Vercel**:
   - Go to [Vercel](https://vercel.com).
   - Create a new project and import your GitHub repository.
   - Set up environment variables on Vercel with the key `OPENAI_API_KEY` and `AUTH_PASSWORD`.

3. **Deploy**: Vercel will automatically deploy your application and provide a live URL.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## Contact

For any inquiries or support, please contact **Mahesh Sharan** at [Maheshsharan28@gmail.com].
