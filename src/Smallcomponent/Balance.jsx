import React from 'react'

const Balance = ({balance}) => {
  return (
    <div className="flex py-[1rem] px-[0.5rem]">
    <div className="font-bold text-lg">
        Your balance
    </div>
    <div className="font-semibold ml-4 text-lg">
        Rs {balance}
    </div>
</div>
  )
}

export default Balance;