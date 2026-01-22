/* ================= DASHBOARD ================= */

export const dashboardStats = {
  totalLeads: 845,
  newLeadsToday: 21,
  newLeadsWeek: 134,
  convertedLeads: 312,
  pendingFollowUps: 97,
  lostLeads: 88,
  totalSalesValue: 4875000,
  monthlyTarget: 6000000,
  achievementPercent: 81,
}

/* ================= LEADS GRAPH ================= */

export const leadsByDate = [
  { date: "Mon", leads: 18 },
  { date: "Tue", leads: 24 },
  { date: "Wed", leads: 16 },
  { date: "Thu", leads: 32 },
  { date: "Fri", leads: 41 },
  { date: "Sat", leads: 21 },
  { date: "Sun", leads: 12 },
]

/* ================= LEADS ================= */

export const leads = [
  {
    id: 1,
    name: "Rahul Sharma",
    mobile: "9876543210",
    email: "rahul@gmail.com",
    city: "Delhi",
    source: "Website",
    product: "Smart Lock",
    status: "New",
    priority: "High",
    assignedTo: "employee1",
    createdAt: "2026-01-18",
    followUp: {
      date: "2026-01-25",
      time: "16:00",
      note: "Asked for discount",
    },
  },
  {
    id: 2,
    name: "Amit Verma",
    mobile: "9123456789",
    email: "amit@outlook.com",
    city: "Mumbai",
    source: "Dealer",
    product: "Kitchen Fittings",
    status: "Converted",
    priority: "Medium",
    assignedTo: "employee2",
    createdAt: "2026-01-10",
    followUp: null,
  },
  {
    id: 3,
    name: "Neha Kapoor",
    mobile: "9988776655",
    email: "neha@yahoo.com",
    city: "Bangalore",
    source: "Instagram",
    product: "Digital Door Lock",
    status: "Follow Up",
    priority: "High",
    assignedTo: "employee1",
    createdAt: "2026-01-14",
    followUp: {
      date: "2026-01-23",
      time: "11:30",
      note: "Needs demo video",
    },
  },
  {
    id: 4,
    name: "Suresh Patel",
    mobile: "9090909090",
    email: "suresh@gmail.com",
    city: "Ahmedabad",
    source: "Referral",
    product: "Wardrobe Handles",
    status: "Lost",
    priority: "Low",
    assignedTo: "employee3",
    createdAt: "2026-01-05",
    followUp: null,
  },
]

/* ================= PRODUCTS ================= */

export const products = [
  {
    id: 1,
    name: "Smart Digital Lock X1",
    category: "Security",
    sku: "LOCK-001",
    price: 18500,
    stock: "In Stock",
    warranty: "2 Years",
  },
  {
    id: 2,
    name: "Smart Digital Lock X2 Pro",
    category: "Security",
    sku: "LOCK-002",
    price: 24500,
    stock: "In Stock",
    warranty: "3 Years",
  },
  {
    id: 3,
    name: "Premium Kitchen Handle",
    category: "Kitchen",
    sku: "KIT-021",
    price: 1200,
    stock: "Out of Stock",
    warranty: "1 Year",
  },
  {
    id: 4,
    name: "Luxury Wardrobe Handle",
    category: "Furniture",
    sku: "FUR-009",
    price: 2400,
    stock: "In Stock",
    warranty: "1 Year",
  },
]

/* ================= ORDERS ================= */

export const orders = [
  {
    id: 101,
    customer: "Rahul Sharma",
    product: "Smart Digital Lock X1",
    quantity: 1,
    amount: 18500,
    paymentMode: "UPI",
    status: "Dispatched",
    date: "2026-01-18",
  },
  {
    id: 102,
    customer: "Amit Verma",
    product: "Premium Kitchen Handle",
    quantity: 4,
    amount: 4800,
    paymentMode: "Credit Card",
    status: "Delivered",
    date: "2026-01-12",
  },
]

/* ================= PAYMENTS ================= */

export const payments = [
  {
    id: 1,
    customer: "Rahul Sharma",
    amount: 18500,
    paidAmount: 10000,
    dueAmount: 8500,
    dueDate: "2026-01-30",
    status: "Partial",
  },
  {
    id: 2,
    customer: "Amit Verma",
    amount: 4800,
    paidAmount: 4800,
    dueAmount: 0,
    dueDate: null,
    status: "Paid",
  },
]

/* ================= COMPLAINTS (MERGED & FIXED) ================= */

export const complaints = [
  {
    id: 1,
    title: "Smart Lock Not Working",
    description: "Lock is not opening after installation",
    customer: "Rahul Sharma",
    priority: "High",
    status: "Open",
    assignedTo: "employee1",
    createdAt: "2026-01-20",
  },
  {
    id: 2,
    title: "Kitchen Handle Broken",
    description: "Handle broke within 10 days",
    customer: "Amit Verma",
    priority: "Medium",
    status: "In Progress",
    assignedTo: "employee2",
    createdAt: "2026-01-18",
  },
  {
    id: 3,
    title: "Payment Not Reflected",
    description: "Paid amount not showing in dashboard",
    customer: "Neha Singh",
    priority: "Low",
    status: "Resolved",
    assignedTo: "employee1",
    createdAt: "2026-01-15",
  },
]

/* ================= USERS ================= */

export const systemUsers = [
  {
    id: 1,
    name: "Super Admin",
    email: "admin@lumenza.com",
    role: "admin",
    active: true,
    lastLogin: "2026-01-21",
  },
  {
    id: 2,
    name: "Sales Executive 1",
    email: "sales1@lumenza.com",
    role: "employee",
    active: true,
    lastLogin: "2026-01-20",
  },
  {
    id: 3,
    name: "Sales Executive 2",
    email: "sales2@lumenza.com",
    role: "employee",
    active: false,
    lastLogin: "2026-01-05",
  },
  {
    id: 4,
    name: "Support Agent",
    email: "support@lumenza.com",
    role: "user",
    active: true,
    lastLogin: "2026-01-21",
  },
]
