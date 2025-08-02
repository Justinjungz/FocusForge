import leaderboard from "../assets/leaderboard.png"

export const services = [
    {
        title: "Task Management",
        description: "Organize your tasks and set priorities to stay focused.",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="white"
                className="w-11.5 h-11.5"
            >
                <path
                    d="M3 4h18v2H3V4zm0 5h18v2H3V9zm0 5h18v2H3v-2zm0 5h12v2H3v-2z" />
                <path
                    d="M20.3 14.3l-1.3 1.3-1.3-1.3-1.4 1.4 2.7 2.7 2.7-2.7z"
                />
            </svg>
        ),
    },
    {
        title: "Parental Controls",
        description: "Need help staying accountable? Set gaming time limits with a partner or parent.",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="white"
                className="w-12.5 h-12.5"
            >
                {/* Left person */}
                <circle cx="5" cy="7" r="2" />
                <path d="M3 14c0-2 3.2-3 4-3s4 1 4 3v1H3v-1Z" />

                {/* Right person */}
                <circle cx="19" cy="7" r="2" />
                <path d="M17 14c0-2 3.2-3 4-3s4 1 4 3v1h-8v-1Z" transform="translate(-4 0)" />

                {/* Checklist box */}
                <rect x="10" y="6" width="4" height="10" rx="0.5" stroke="white" strokeWidth="0.5" fill="none" />

                {/* Checklist lines */}
                <line x1="11" y1="8" x2="13.5" y2="8" stroke="white" strokeWidth="0.5" />
                <line x1="11" y1="10" x2="13.5" y2="10" stroke="white" strokeWidth="0.5" />
                <line x1="11" y1="12" x2="13.5" y2="12" stroke="white" strokeWidth="0.5" />

                {/* Checkmarks */}
                <polyline points="11,8 10.7,8.3 10.5,8" stroke="white" strokeWidth="0.5" fill="none" />
                <polyline points="11,10 10.7,10.3 10.5,10" stroke="white" strokeWidth="0.5" fill="none" />
                <polyline points="11,12 10.7,12.3 10.5,12" stroke="white" strokeWidth="0.5" fill="none" />
            </svg>

        ),

    },
    {
        title: "Friends & Leaderboards",
        description: "Compete with friends and track each others progress on the leaderboard.",
     icon: (
        <div className=""> 
            <img src={leaderboard} alt="Leaderboard and Friends system" className="w-12.5 h-12.5" />
        </div>
     ),
    },
];