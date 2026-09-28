import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import ParcelsMatrics from "./ParcelsMatrics";

function Parcels() {
  const { user } = useAuth();

  const axiosSecure = useAxiosSecure();

  const { data: parcels = [] } = useQuery({
    queryKey: ["myParcels", user?.email],
    queryFn: async () => {
      const response = await axiosSecure.get(`/parcels?email=${user?.email}`);
      return response.data;
    },
  });

  return (
    <div className="m-8 p-8 rounded-4xl bg-white">
      <h2 className="mb-10 font-extrabold text-5xl text-secondary">
        Manage Parcel
      </h2>
      <ParcelsMatrics />
      <div className="overflow-x-auto rounded-xl border border-[#F0F0F0]">
        <table className="table table-zebra [&_tbody_tr:nth-child(even)]:bg-[#f5f5f5]">
          {/* head */}
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
                  <p>
                    {parcel["receiver-address"]}, {parcel["receiver-district"]},{" "}
                    {parcel["receiver-region"]}
                  </p>
                  <p>{parcel["receiver-phone"]}</p>
                </td>
                <td>######</td>
                <td>৳ {parcel.cost} (Paid)</td>
                <td>
                  <button className="px-4 py-2 bg-[#94C6CB]/20 rounded-lg font-inter font-medium text-sm text-black leading-6 cursor-pointer">
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Parcels;
