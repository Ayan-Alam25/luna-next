<h1 align="center">Luna</h1>
<p align="center">A sleep tracking and wellness app built with Next.js</p>

![Luna Dashboard](/public/screenshot-for-readme.png)

## 🌙 Key Features

- **Sleep Tracking**: Log and analyze your sleep patterns
- **Data Visualization**: Interactive charts of your sleep history
- **Personalized Insights**: Science-backed sleep recommendations
- **Wellness Journal**: Track mood and daily habits

## 🚀 Tech Stack

- **Framework**: Next.js App Router
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: Clerk
- **Styling**: Tailwind CSS
- **Types**: TypeScript
- **Charts**: Chart.js

## ✨ Technical Highlights

- **Performance**: Optimized with Server Components and caching
- **Data**: Secure sleep records with encryption
- **Responsive**: Works across all devices
- **Analytics**: Detailed sleep statistics and trends

### Setup .env file



## ⚙️ Setup

1. Clone the repository
2. Install dependencies
    ```
    npm install
    ```

3. Setup .env file
    ```js
    DATABASE_URL=your_database_url
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
    CLERK_SECRET_KEY=your_clerk_secret_key
    NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
    NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL=/
    NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL=/
    ```
4. Run database migrations:
    ```sh
    npx prisma migrate dev
    ```

5. Run the development server
    ```shell
    npm run dev
    ```