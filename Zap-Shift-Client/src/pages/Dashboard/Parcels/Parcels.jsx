import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import ParcelsMatrics from "./ParcelsMatrics";
import { toast, Toaster } from "sonner";

function Parcels() {
  const { user } = useAuth();

  const axiosSecure = useAxiosSecure();

  const { data: parcels = [], refetch } = useQuery({
    queryKey: ["myParcels", user?.email],
    queryFn: async () => {
      const response = await axiosSecure.get(`/parcels?email=${user?.email}`);
      return response.data;
    },
  });

  const handleDelete = (id) => {
    toast("Do you want to delete the parcel request?", {
      action: {
        label: "Delete",
        onClick: async () => {
          console.log(id);
          const response = await axiosSecure.delete(`/parcels/${id}`);
          if (response.data.deletedCount) {
            toast("Parcel request has been deleted!");
            refetch();
          }
        },
      },
    });
  };

  return (
    <div className="m-8 p-8 rounded-4xl bg-white">
      <h2 className="mb-10 font-extrabold text-5xl text-secondary">
        Manage Parcel
      </h2>
      <ParcelsMatrics />
      <div className="overflow-x-auto rounded-xl border border-[#F0F0F0]">
        <table className="table table-zebra [&_tbody_tr:nth-child(even)]:bg-[#f5f5f5]">
          <thead className="bg-[#F9FAFB]">
            <tr>
              <th className="font-medium text-sm text-[#282828] leading-5">
                Parcel Info
              </th>
              <th className="font-medium text-sm text-[#282828] leading-5">
                Recipient Info
              </th>
              <th className="font-medium text-sm text-[#282828] leading-5">
                Tracking Number
              </th>
              <th className="font-medium text-sm text-[#282828] leading-5">
                Payment Info
              </th>
              <th className="font-medium text-sm text-[#282828] leading-5">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {parcels.map((parcel, index) => (
              <tr
                key={index}
                className="font-medium text-sm text-info-content leading-5"
              >
                <td>{parcel["parcel-name"]}</td>
                <td>
                  <p>{parcel["receiver-name"]}</p>
                  <p className="mt-3">
                    {parcel["receiver-address"]}, {parcel["receiver-district"]},{" "}
                    {parcel["receiver-region"]}
                  </p>
                  <p className="mt-3">{parcel["receiver-phone"]}</p>
                </td>
                <td>######</td>
                <td>৳ {parcel.cost} (Paid)</td>
                <td className="space-x-2">
                  <button className="px-4 py-2 bg-[#94C6CB]/20 rounded-lg font-inter font-medium text-sm text-black leading-6 cursor-pointer">
                    Edit
                  </button>
                  <button className="px-4 py-2 bg-[#94C6CB]/20 rounded-lg font-inter font-medium text-sm text-black leading-6 cursor-pointer">
                    View
                  </button>
                  <button
                    onClick={() => handleDelete(parcel._id)}
                    className="px-4 py-2 bg-[#94C6CB]/20 rounded-lg font-inter font-medium text-sm text-black leading-6 cursor-pointer"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Toaster />
    </div>
  );
}

export default Parcels;
