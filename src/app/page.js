'use client';
import { useEffect, useState } from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';
import { fetchCompanies } from '../services/companyService';
import './globals.css';

export default function Home() {
  const { data: session, status } = useSession();
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    const getCompanies = async () => {
      const data = await fetchCompanies();
      setCompanies(data);
    };
    getCompanies();
  }, []);

  if (status === "loading") {
    return <p className="text-white text-center">Loading...</p>;
  }

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 py-10">
      {session && (
        <button
          className="absolute top-4 right-4 px-6 py-3 bg-red-600 text-white font-semibold rounded-full shadow-lg hover:bg-red-700 transition-colors"
          onClick={() => signOut()}
        >
          Sign out
        </button>
      )}
      <h1 className="text-5xl font-extrabold text-center text-white mb-10">Companies Dashboard</h1>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {companies.map((company) => (
          <div key={company.id} className="bg-white p-6 rounded-xl shadow-2xl transform transition-transform hover:scale-105 hover:shadow-3xl">
            <h2 className="text-3xl font-semibold mb-3 text-gray-800">{company.name}</h2>
            <p className="text-gray-700">Country: {company.country}</p>
            <p className="text-gray-700">Industry: {company.industry}</p>
            <p className="text-gray-700">Market Cap: ${company.marketCap.toLocaleString()}</p>
            {session ? (
              <>
                <p className="text-gray-700 mt-2">Address: {company.address}</p>
                <p className="text-gray-700">ZIP: {company.zip}</p>
                <p className="text-gray-700">Employees: {company.employeeCount}</p>
                <p className="text-gray-700">Domain: {company.domain}</p>
                <p className="text-gray-700">CEO: {company.ceoName}</p>
              </>
            ) : (
              <>
                <p className="blur-sm text-gray-400">Address: {company.address}</p>
                <p className="blur-sm text-gray-400">ZIP: {company.zip}</p>
                <p className="blur-sm text-gray-400">Employees: {company.employeeCount}</p>
                <p className="blur-sm text-gray-400">Domain: {company.domain}</p>
                <p className="blur-sm text-gray-400">CEO: {company.ceoName}</p>
                <button
                  className="mt-4 px-6 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-lg hover:bg-blue-700 transition-colors"
                  onClick={() => signIn()}
                >
                  Sign in to view more details
                </button>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
