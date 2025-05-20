# Hotel Website

A modern, responsive hotel booking website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- Modern and responsive design
- Advanced hotel search and filtering
- Room booking system
- User authentication and profiles
- Secure payment integration
- Mobile-friendly interface
- Dark/Light mode support
- Location-based hotel search
- Hotel reviews and ratings
- Newsletter subscription

## Tech Stack

- **Frontend:**
  - Next.js 14
  - TypeScript
  - Tailwind CSS
  - Shadcn UI Components
  - React Icons

- **Backend:**
  - Next.js API Routes
  - Prisma ORM
  - MongoDB Database
  - NextAuth.js for authentication

- **Development Tools:**
  - ESLint
  - Prettier
  - TypeScript
  - Git

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or pnpm
- MongoDB database

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/aabhansh06/hotel-website.git
   cd hotel-website
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   pnpm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory and add:
   ```
   DATABASE_URL="your_mongodb_connection_string"
   NEXTAUTH_SECRET="your_nextauth_secret"
   NEXTAUTH_URL="http://localhost:3000"
   ```

4. Run the development server:
   ```bash
   npm run dev
   # or
   pnpm dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
hotel-website/
├── app/                 # Next.js app directory
├── components/          # React components
├── lib/                 # Utility functions
├── models/             # Database models
├── public/             # Static assets
├── styles/             # Global styles
└── types/              # TypeScript types
```

## Key Features Implementation

- **Authentication:** Secure user authentication using NextAuth.js
- **Booking System:** Complete booking flow with confirmation
- **Search:** Advanced search with filters and sorting
- **Responsive Design:** Mobile-first approach with Tailwind CSS
- **Dark Mode:** Theme switching with system preference detection

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

**Aabhansh Gupta**
- GitHub: [@aabhansh06](https://github.com/aabhansh06)
- LinkedIn: [Aabhansh Gupta](https://linkedin.com/in/aabhanshgupta)

## Acknowledgments

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Shadcn UI](https://ui.shadcn.com/)
- [Prisma](https://www.prisma.io/)
- [NextAuth.js](https://next-auth.js.org/) 