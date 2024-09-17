import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AppDispatch, RootState } from "../../main";
import { deleteUser, fetchUsers } from "../features/redux/UserReducer";
import { useEffect, useState } from "react";

export function Table() {
  const [searchName, setSearchName] = useState("");
  const [searchUsername, setSearchUsername] = useState("");
  const [searchEmail, setSearchEmail] = useState("");
  const [searchPhone, setSearchPhone] = useState("");

  const dispatch = useDispatch<AppDispatch>();

  const {
    data: users,
    isLoading,
    isError,
  } = useSelector((state: RootState) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error fetching users.</p>;

  const handleDelete = (id: number) => {
    dispatch(deleteUser({ id: id }));
  };

  const filteredUsers = users?.filter((user) => {
    return (
      (!searchName ||
        user.name.toLowerCase().includes(searchName.toLowerCase())) &&
      (!searchUsername ||
        user.username.toLowerCase().includes(searchUsername.toLowerCase())) &&
      (!searchEmail ||
        user.email.toLowerCase().includes(searchEmail.toLowerCase())) &&
      (!searchPhone ||
        user.phone.toLowerCase().includes(searchPhone.toLowerCase()))
    );
  });

  return (
    <div className="w-full mt-8 p-6">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 bg-white mt-4">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <input
                  type="text"
                  placeholder="Search Name..."
                  className="w-full h-8 px-2 border border-gray-300 rounded-md"
                  value={searchName}
                  onChange={(e) => setSearchName(e.target.value)}
                />
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <input
                  type="text"
                  placeholder="Search Username..."
                  className="w-full h-8 px-2 border border-gray-300 rounded-md"
                  value={searchUsername}
                  onChange={(e) => setSearchUsername(e.target.value)}
                />
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <input
                  type="text"
                  placeholder="Search Email..."
                  className="w-full h-8 px-2 border border-gray-300 rounded-md"
                  value={searchEmail}
                  onChange={(e) => setSearchEmail(e.target.value)}
                />
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <input
                  type="text"
                  placeholder="Search Phone..."
                  className="w-full h-8 px-2 border border-gray-300 rounded-md"
                  value={searchPhone}
                  onChange={(e) => setSearchPhone(e.target.value)}
                />
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredUsers?.map((user) => (
              <tr key={user.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {user.id}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {user.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {user.username}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {user.email}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {user.phone}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <Link
                    to={`/editUser/${user.id}`}
                    className="bg-indigo-500 text-white px-4 py-2 rounded-md shadow-sm hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 mr-2"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(user.id)}
                    className="bg-red-500 text-white px-4 py-2 rounded-md shadow-sm hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mb-4 mt-12 text-left">
        <Link
          to="/add-user"
          className="bg-indigo-500 text-white px-4 py-2 rounded-md shadow-sm hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Create +
        </Link>
      </div>
    </div>
  );
}
