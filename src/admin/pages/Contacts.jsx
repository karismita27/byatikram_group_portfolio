
import { useEffect, useState } from "react";

export default function Contacts() {

  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/contacts")
      .then(res => res.json())
      .then(data => setContacts(data));
  }, []);

  return (

    <div className="p-6">

      <h2 className="text-xl font-semibold mb-4">
        Contact Messages
      </h2>

      {/* TABLE */}

      <div className="bg-white rounded-xl shadow-md overflow-hidden">

        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">

            <thead className="bg-slate-100 text-slate-700">
              <tr>
                <th className="px-6 py-3">Type</th>
                <th className="px-6 py-3">Name</th>
                <th className="px-6 py-3">Email</th>
                <th className="px-6 py-3">Message</th>
                <th className="px-6 py-3">Date</th>
              </tr>
            </thead>

            <tbody className="divide-y">

              {contacts.map((c) => (
                <tr key={c._id} className="hover:bg-slate-50">

                  <td className="px-6 py-4">{c.type}</td>

                  <td className="px-6 py-4 font-medium">
                    {c.name}
                  </td>

                  <td className="px-6 py-4">
                    {c.email}
                  </td>

                  <td className="px-6 py-4 max-w-xs truncate">
                    {c.message}
                  </td>

                  <td className="px-6 py-4">
                    {new Date(c.createdAt).toLocaleDateString()}
                  </td>

                </tr>
              ))}

            </tbody>

          </table>
        </div>

      </div>

    </div>

  );
}