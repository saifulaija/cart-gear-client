"use client"
import { Button } from '@nextui-org/react'
import Link from 'next/link'
import React from 'react'

const ViewDetails = ({productId}:{productId:string}) => {
  return (
    <Button as={Link} fullWidth variant='bordered' href={`cars/${productId}`} >
    view Details
  </Button>
  )
}

export default ViewDetails