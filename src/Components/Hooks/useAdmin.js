import { useEffect, useState } from "react";

const useAdmin = (user) => {
  const [admin, setAdmin] = useState(false);
  const [adminLoading, setAdminLoading] = useState(true);
  useEffect(() => {
    const email = user?.email;
    console.log("user:", email);
    if (email) {
      fetch(
        `https://hotel-radissons-ac92b8fd51f6.herokuapp.com/api/v1/users/admin/${email}`,
        {
          method: "GET",
          headers: {
            "content-type": "application/json",
          },
        }
      )
        .then((res) => res.json())
        .then((data) => {
          setAdmin(data.admin);
          setAdminLoading(false);
        });
    }
  }, [user]);

  return [admin, adminLoading];
};

export default useAdmin;
