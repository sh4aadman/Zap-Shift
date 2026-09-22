import { useEffect, useRef, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

function Coverage() {
  const [locations, setLocations] = useState([]);

  const mapRef = useRef(null);

  const dhakaPosition = [23.8103, 90.4125];

  useEffect(() => {
    fetch("./warehouses.json")
      .then((res) => res.json())
      .then((data) => {
        setLocations(data);
      });
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    const searchLocation = e.target.search.value;
    const searchResult = locations.find((location) =>
      location.district.toLowerCase().includes(searchLocation.toLowerCase()),
    );
    if (searchResult) {
      const coord = [searchResult.latitude, searchResult.longitude];
      mapRef.current.flyTo(coord, 12);
    }
  };

  return (
    <div className="mt-8 mb-32 px-28 py-20 rounded-4xl bg-white">
      <h2 className="mb-12 font-extrabold text-6xl text-secondary">
        We are available in 64 districts
      </h2>
      <form
        onSubmit={handleSearch}
        className="flex h-14 w-full max-w-xl items-center rounded-full bg-[#F1F3F6]"
      >
        <div className="flex flex-1 items-center gap-2 pl-4">
          <IoIosSearch size={24} className="text-black" />
          <input
            type="text"
            name="search"
            placeholder="Search here"
            className="w-full bg-transparent text-sm text-black outline-none placeholder:text-black/50"
          />
        </div>
        <button
          type="submit"
          className="h-full min-w-32 px-8 rounded-full bg-primary font-bold text-xl text-black cursor-pointer"
        >
          Search
        </button>
      </form>
      <hr className="my-12 border-t border-black/10" />
      <h3 className="mb-12 font-extrabold text-3xl text-secondary">
        We deliver almost all over Bangladesh
      </h3>
      <MapContainer
        center={dhakaPosition}
        zoom={9}
        scrollWheelZoom={true}
        className="w-full h-100 rounded-sm"
        ref={mapRef}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {locations.map((location, index) => (
          <Marker
            key={index}
            position={[location.latitude, location.longitude]}
          >
            <Popup>
              <h4 className="font-inter font-semibold text-lg">
                {location.city}
              </h4>
              <p className="font-inter text-sm">
                <span className="font-semibold">Covered Area:</span>{" "}
                {location.covered_area.join(", ")}
              </p>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default Coverage;
