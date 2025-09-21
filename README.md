Crypto Dashboard

A production-like crypto dashboard built with React.js, fetching live cryptocurrency market data from the CoinGecko API
.
Displays an All Coins table with search, sorting, and pagination, and a Highlights section (top gainers, top losers, trending coins).

🛠 Tech Stack

Frontend: React.js (Vite)

Styling: Plain CSS

Data Fetching: Fetch API

State Management: React Hooks (useState, useEffect)

Utilities: Custom adapters and sorting functions

📂 Project Structure
src/
 ┣ components/
 ┃ ┣ CoinTable.jsx
 ┃ ┣ Highlights.jsx
 ┃ ┣ Loader.jsx
 ┣ pages/
 ┃ ┣ Dashboard.jsx
 ┣ services/
 ┃ ┣ cryptoApi.js
 ┃ ┣ adapters.js
 ┣ hooks/
 ┃ ┣ useCoins.js
 ┣ utils/
 ┃ ┣ sorting.js
 ┣ App.jsx
 ┣ App.css
 ┣ main.jsx
.env.example
.gitignore

⚡ Features
All Coins Table

Displays rank, name/symbol, price, 24h % change, market cap, volume

Pagination (Next / Prev buttons)

Search by coin name or symbol

Sort by price, 24h %, market cap, or volume

Loading & error handling with spinner

Highlights Section

Top gainers (24h)

Top losers (24h)

Trending coins

Resilience

Loading spinner while fetching data

Error handling for API failures

Empty state messaging

🚀 Getting Started
1. Clone the repo
git clone https://github.com/<your-username>/crypto-dashboard.git
cd crypto-dashboard

2. Install dependencies
npm install

3. Add environment variables

Create a .env file in the project root:

VITE_API_BASE_URL=https://api.coingecko.com/api/v3


Use your CoinGecko API key if needed.
See .env.example for reference.

4. Run the app locally
npm run dev


Open http://localhost:5173
 in your browser.

📝 Notes / Assumptions

CoinGecko free tier is used; rate limiting is respected

Data is fetched client-side

Sorting is done client-side for simplicity

Highlights (gainers, losers, trending) are fetched from first 50 coins

🔮 Future Improvements

Add infinite scrolling

Add coin detail modal/page with charts

Add 7-day or 30-day performance highlights

Implement server-side caching or API proxy for performance

🎨 Design Patterns & Architecture

Adapter pattern: adapters.js maps raw API response to clean domain models

Custom hook: useCoins.js for managing coins, pagination, search, sorting, and loading/error states

Separation of concerns: API services, hooks, utils, components clearly separated
