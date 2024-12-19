import React, { useEffect, useState } from "react";
import SingleFood from "../Services/Food/SingleFood";
import { Link } from "react-router-dom";

const Foods = () => {
  const [foods, setFoods] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(
      "https://hotel-app-radison-87fec3b45a39.herokuapp.com/api/v1/foods/all-foods"
    )
      .then((res) => res.json())
      .then((data) => {
        setFoods(data?.data?.slice(0, 6));
        setIsLoading(false);
      })
      .catch(() => setIsLoading(false));
  }, []);

  return (
    <section className="py-8">
      <div className="container">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-800 tracking-tight">
            Foods We Offer
          </h2>
          <Link
            to="/food"
            className="text-[var(--primary)] hover:text-primary-dark text-lg font-medium transition-colors hover:underline"
          >
            Show All Foods →
          </Link>
        </div>

        {/* Food Cards */}
        {isLoading ? (
          <div className="flex justify-center items-center py-20">
            <p className="text-lg text-gray-500 animate-pulse">
              Loading foods...
            </p>
          </div>
        ) : foods?.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {foods.map((food) => (
              <SingleFood key={food?.foodId} food={food} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-xl text-gray-600">No foods available at the moment.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Foods;
