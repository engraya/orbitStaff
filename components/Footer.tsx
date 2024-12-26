import React from "react"

function Footer() {
  return (
<footer className="flex sticky  flex-col space-y-10 justify-center m-10">
  <p className="text-center text-gray-100 font-medium">© {new Date().getFullYear()} OrbitStaff. All rights reservered.</p>
</footer>

  )
}

export default Footer
