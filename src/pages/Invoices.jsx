import React, { useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import Button from '@mui/material/Button'; // Using MUI's Button


const data = [
  { month: 'Nov 2024', revenue: 18000, expense: 0 },
  { month: 'Dec 2024', revenue: 5000, expense: 3000 },
  { month: 'Jan 2025', revenue: 1000, expense: 14000 },
  { month: 'Feb 2025', revenue: 0, expense: 5000 },
];

const invoices = [
  { title: 'William Test', recipient: 'Laci Taylor', amount: '$5,000.00', dueDate: '2025-02-19', status: 'Pending' },
  { title: 'Design Services', recipient: 'Laci Taylor', amount: '$6,000.00', dueDate: '2025-01-31', status: 'Pending' },
  { title: 'Art Auction Setup Charges', recipient: 'Bryan Cash', amount: '$6,000.00', dueDate: '2025-01-30', status: 'Pending' },
  { title: 'Digital Marketing', recipient: 'Bryan Cash', amount: '$2,000.00', dueDate: '2024-12-31', status: 'Pending' },
  { title: 'Framing Costs', recipient: 'Laci Taylor', amount: '$850.00', dueDate: '2024-12-31', status: 'Paid' },
  { title: 'Test Invoice', recipient: 'Bryan Cash', amount: '$5,500.00', dueDate: '2024-11-30', status: 'Paid' },
  { title: 'Artwork Transport Services', recipient: 'Laci Taylor', amount: '$4,750.00', dueDate: '2024-11-30', status: 'Paid' },
  { title: 'Curation Services', recipient: 'Laci Taylor', amount: '$6,000.00', dueDate: '2024-11-30', status: 'Paid' },
];

const ITEMS_PER_PAGE = 4;

export default function Dashboard() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(invoices.length / ITEMS_PER_PAGE);

  const paginatedInvoices = invoices.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="revenue" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="expense" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>

      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-2">Invoices</h2>
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="border p-2">Title</th>
              <th className="border p-2">Recipient</th>
              <th className="border p-2">Amount</th>
              <th className="border p-2">Due Date</th>
              <th className="border p-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {paginatedInvoices.map((invoice, index) => (
              <tr key={index}>
                <td className="border p-2">{invoice.title}</td>
                <td className="border p-2">{invoice.recipient}</td>
                <td className="border p-2">{invoice.amount}</td>
                <td className="border p-2">{invoice.dueDate}</td>
                <td className="border p-2">{invoice.status}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex justify-between mt-4">
          <Button
            variant="contained"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          >
            Previous
          </Button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <Button
            variant="contained"
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
