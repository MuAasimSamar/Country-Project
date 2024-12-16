import React from 'react'
import { useRouteError } from 'react-router'
import Header from './Header';

export default function Error() {
    const error =  useRouteError();
    console.log(error)
  return (
    <>
    <Header />
    <h1>Something Went Wrong.... {error?.status || 'Unknown'}: {error?.statusText || 'An error occurred'}</h1>
    </>
  )
}
