import { Route, Routes } from 'react-router-dom';
import DateOrderConfirmation from './DateOrderConfirmation/DateOrderConfirmation';
import OrderConfirmation from './OrderConfirmation/OrderConfirmation';
import OrderNumberConfirmation from './OrderNumberConfirmation/OrderNumberConfirmation';
import ProvideDeliveryReference from './ProvideDeliveryReference/ProvideDeliveryReference';

function Navigation() {
  return (
    <Routes>
      <Route path='/' element={<ProvideDeliveryReference />} />
      <Route
        path='/order_number_confirmation'
        element={<OrderNumberConfirmation />}
      />
      <Route
        path='/date_order_confirmation'
        element={<DateOrderConfirmation />}
      />
      <Route path='/order_confirmation' element={<OrderConfirmation />} />
    </Routes>
  );
}

export default Navigation;
