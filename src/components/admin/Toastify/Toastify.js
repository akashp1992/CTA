import React from 'react'
import toast, { Toaster } from 'react-hot-toast';
function Toastify({ message, type }) {
  switch (type) {
    case "success":
      return toast.success(
        <div>
          <p>{message}</p>
        </div>
      );
    case "error":
      return toast.error(
        <div>
          <p>{message}</p>
        </div>
        , {
          duration: 4000,
          position: 'top-center'
        });
  }

  return (
    <>
      <Toaster />
    </>
  )
}

export default Toastify