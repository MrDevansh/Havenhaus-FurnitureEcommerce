import { useSelector } from "react-redux";
import { OrdersList, SectionTitle } from "../components";

const Orders = () => {
  const user = useSelector((state) => state.user.user);
  const orders = useSelector((state) => state.orders.orders) || [];

  // If not logged in, prompt to login
  if (!user) {
    return <SectionTitle text="You must log in to view orders" />;
  }

  // Filter to just this user's orders
  const userOrders = orders.filter((order) => order.userEmail === user.email);

  // If none, prompt to make an order
  if (userOrders.length === 0) {
    return <SectionTitle text="Please make an order" />;
  }

  return (
    <>
      <SectionTitle text="Your Orders" />
      <OrdersList orders={userOrders} />
    </>
  );
};

export default Orders;
