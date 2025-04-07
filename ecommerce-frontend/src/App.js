import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import AdminLayout from './components/admin/AdminLayout';
import ProductManagement from './components/admin/ProductManagement';
import TransactionMonitoring from './components/admin/TransactionMonitoring';
import AdminRoute from './context/AdminRoute';

import CustomerLayout from './components/customer/CustomerLayout';
import CustomerRoute from './context/CustomerRoute';
import CatalogPage from './components/customer/CatalogPage';
import CartPage from './components/customer/CartPage';
import CheckoutPage from './components/customer/CheckoutPage';
import OrderHistoryPage from './components/customer/OrderHistoryPage';

import NotFound from './components/NotFound'

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />

          <Route element={<AdminRoute />}>              
            <Route path="/admin" element={<AdminLayout />}>                               
            <Route index element={<Navigate to="products" replace />} />                               
              <Route path="products" element={<ProductManagement />} />
              <Route path="transactions" element={<TransactionMonitoring />} />
            </Route>
          </Route>

          <Route element={<CustomerRoute />}>              
            <Route path="/store" element={<CustomerLayout />}>                               
            <Route index element={<Navigate to="catalog" replace />} />
              <Route path="catalog" element={<CatalogPage />} />
              <Route path="cart" element={<CartPage />} />
              <Route path="checkout" element={<CheckoutPage />} />
              <Route path="orders" element={<OrderHistoryPage />} />
            </Route>
          </Route>


          <Route path="*" element={<NotFound />} />  
        </Routes>
      </Router>
  );
}

export default App;