import React from 'react'
import AdminNavbar from '../Navbar/AdminNavbar'
import AdminQueryPage from '../Query/AdminQueryPage'
import { Route, Routes } from 'react-router-dom'
import ManageProduct from '../ManageProduct/ManageProduct'
import ViewQueryPage from '../Query/ViewQueryPage'
import ArchivedQuery from '../Query/ArchivedQuery'
import ProductItem from '../../Product/ProductItem'
import ProductView from '../../Product/ProductView'
import ProductEdit from '../ManageProduct/ProductEdit'

const AdminHome = () => {

  return (
    <div>
      <AdminNavbar/>
      <Routes>
        <Route path='' element={<AdminQueryPage/>}/>
        <Route path='admin' element={<AdminQueryPage/>}/>
        <Route path='archived' element={<ArchivedQuery/>}/>
        <Route path='viewquery/:queryId' element={<ViewQueryPage />}/>
        <Route path='archived/viewquery/:queryId' element={<ViewQueryPage />}/>
        <Route path='manageproduct' element={<ManageProduct/>}/>
        <Route path='manageproductitem/:categoryId' element={<ProductItem/>}/>
        <Route path="manageproductview/:productId" element={<ProductView  />} />
        <Route path="editproduct/:productId" element={<ProductEdit  />} />
        <Route path="addnewproduct/" element={<ProductEdit  />} />
      </Routes>
    </div>
  )
}

export default AdminHome
