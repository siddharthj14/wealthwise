import {
  BarChart3,
  Receipt,
  CreditCard,
  Zap,
  FileText,
  ShieldCheck,
  PieChart,
} from "lucide-react";

// Stats Data
export const statsData = [
  {
    value: "50K+",
    label: "Active Users",
  },
  {
    value: "$2B+",
    label: "Transactions Tracked",
  },
  {
    value: "99.9%",
    label: "Uptime",
  },
  {
    value: "4.9/5",
    label: "User Rating",
  },
];

// Features Data
export const featuresData = [
  {
    icon: <BarChart3 className="h-8 w-8 text-blue-600" />,
    title: "Spending Analytics",
    description:
      "Visualize and break down your transactions with interactive charts and smart filters.",
  },
  {
    icon: <Receipt className="h-8 w-8 text-blue-600" />,
    title: "AI Receipt Scanner",
    description:
      "Snap and upload receipts to automatically extract and categorize expenses.",
  },
  {
    icon: <CreditCard className="h-8 w-8 text-blue-600" />,
    title: "Multi-Account Tracking",
    description:
      "Track finances across multiple bank accounts and cards in one place.",
  },
  {
    icon: <Zap className="h-8 w-8 text-blue-600" />,
    title: "Smart Insights",
    description:
      "Receive real-time alerts and recommendations tailored to your spending behavior.",
  },
  {
    icon: <FileText className="h-8 w-8 text-blue-600" />,
    title: "Monthly Budget Reports",
    description:
      "Generate downloadable monthly reports to stay on track with your financial goals.",
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-blue-600" />,
    title: "Secure Authentication",
    description:
      "Protect your data with google login and modern authentication via Clerk.",
  },
];

// How It Works Data
export const howItWorksData = [
  {
    icon: <CreditCard className="h-8 w-8 text-blue-600" />,
    title: "1. Create Your Account",
    description:
      "Get started in minutes with our simple and secure sign-up process",
  },
  {
    icon: <BarChart3 className="h-8 w-8 text-blue-600" />,
    title: "2. Track Your Spending",
    description:
      "Automatically categorize and track your transactions in real-time",
  },
  {
    icon: <PieChart className="h-8 w-8 text-blue-600" />,
    title: "3. Get Insights",
    description:
      "Receive AI-powered insights and recommendations to optimize your finances",
  },
];

// Testimonials Data
export const testimonialsData = [
  {
    name: "Pulkit Nandwana",
    role: "Financial Advisor",
    image: "https://randomuser.me/api/portraits/men/71.jpg",
    quote:
    "WealthWise is a game-changer. It gives me a clear picture of my burn rate and helps us plan budgets smartly every month.",
  },
  {
    name: "Affan Ahammed",
    role: "Small Business Owner",
    image: "https://randomuser.me/api/portraits/men/72.jpg",
    quote:
    "I love how easy it is to track transactions across my personal and business accounts. WealthWise just works—no fluff, just real insights.",
  },
  {
    name: "Abhishek Kushwaha",
    role: "Startup Founder",
    image: "https://randomuser.me/api/portraits/men/73.jpg",
    quote:
    "Welth has transformed how I manage my business finances. The AI insights have helped me identify cost-saving opportunities I never knew existed.",
  },
  {
    name: "Akshat Agarwal",
    role: "Product Manager",
    image: "https://randomuser.me/api/portraits/men/74.jpg",
    quote:
    "The receipt scanning feature saves me hours each month. Now I can focus on my work instead of manual data entry and expense tracking.",
  },
  {
    name: "Daksh Khandelwal",
    role: "Freelancer",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    quote:
      "I recommend Welth to all my clients. The multi-currency support and detailed analytics make it perfect for international investors.",
  },
];
