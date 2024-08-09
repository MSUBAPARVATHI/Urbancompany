import React, { useState, useEffect } from 'react';
import { addItem, getItems } from '../../components/action/form';

interface Item {
  id: string;
  name: string;
  description: string;
  degrees: string;
  stream: string;
}

const ItemsTable: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [degrees, setDegree] = useState('');
  const [stream, setStream] = useState('');
  


  useEffect(() => {
    const fetchData = async () => {
      const data = await getItems();
      setItems(data);
    };

    fetchData();
  }, []);

  const handleAddItem = async (e: React.FormEvent) => {
    e.preventDefault();
    if (name && description && degrees && stream) {
      await addItem({ name, description, degrees, stream});
      // after add item click then form empty
      setName('');
      setDescription('');
      setDegree('');
      setStream('');

      // Refresh the data after adding a new item

      const updatedItems = await getItems();
      setItems(updatedItems);
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Items</h1>

      <form onSubmit={handleAddItem} className="mb-8">
        <div className="grid gap-4 mb-4 md:grid-cols-2">
          <div>
            <label
              htmlFor="name"
              className="block text-gray-700 text-lg font-bold mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="px-4 py-2 border rounded-md w-full"
            />
          </div>
          <div>
            <label
              htmlFor="description"
              className="block text-gray-700 text-lg font-bold mb-2"
            >
              Role
            </label>
            <input
              type="text"
              id="description"
              placeholder="Role"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="px-4 py-2 border rounded-md w-full"
            />
          </div>
          
          <div>
            <label
              htmlFor="degrees"
              className="block text-gray-700 text-lg font-bold mb-2"
            >
              Degree
            </label>
            <input
              type="text"
              id="degrees"
              placeholder="Degree"
              value={degrees}
              onChange={(e) => setDegree(e.target.value)}
              className="px-4 py-2 border rounded-md w-full"
            />
          </div>

          <div>
            <label
              htmlFor="stream"
              className="block text-gray-700 text-lg font-bold mb-2"
            >
              Stream
            </label>
            <input
              type="text"
              id="stream"
              placeholder="Stream"
              value={stream}
              onChange={(e) => setStream(e.target.value)}
              className="px-4 py-2 border rounded-md w-full"
            />
          </div>

        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition"
          >
            Add Item
          </button>
        </div>
      </form>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gray-100 border-b">
              <th className="text-left p-4">Name</th>
              <th className="text-left p-4">Role</th>
              <th className="text-left p-4">Degree</th>
              <th className="text-left p-4">Stream</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id} className="border-b hover:bg-gray-50">
                <td className="p-4">{item.name}</td>
                <td className="p-4">{item.description}</td>
                <td className="p-4">{item.degrees}</td>
                <td className="p-4">{item.stream}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ItemsTable;