import React from 'react'
import Link from 'next/link'

const Navbar = ({onAddCustomer, onDeleteCustomer, showDeleteButton  = false}) => {
  return (
    <nav className="fixed bottom-0 left-0 w-full bg-white border-t shadow grid grid-rows-2 p-3 gap-2 md:flex md:justify-around z-50">

      {/* Row 1: 3 buttons */}
      <div className="grid grid-cols-3 gap-2 md:gap-4">
        <Link href="/">
          <button className="px-3 py-2 rounded bg-blue-700 text-white text-center w-full cursor-pointer">
            Dashboard
          </button>
        </Link>
        <Link href="/customer">
          <button className="px-3 py-2 rounded bg-blue-700 text-white text-center w-full cursor-pointer">
            Customers
          </button>
        </Link>
        <Link href="/export">
          <button className="px-3 py-2 rounded bg-blue-700 text-white text-center w-full cursor-pointer">
            Export
          </button>
        </Link>
      </div>

      {/* Row 2: 2 buttons */}
      <div className="grid grid-cols-2 gap-2 md:gap-4">
        <button id="deleteButtonFromNavbar" className="px-3 py-2 rounded bg-gray-200 text-gray-900 text-center w-full cursor-pointer"
        onClick={onAddCustomer}>
          Add Customer
        </button>

        <button className="px-3 py-2 rounded bg-black text-white text-center w-full cursor-pointer"
        onClick={onDeleteCustomer}>
          {showDeleteButton ? 'Done': 'Delete Custoers'}
        </button>
      </div>

    </nav>
  )
}

export default Navbar
