import React from 'react'
import MovieManagerment from './MovieManagerment'
import UserManagerment from './UserManagerment'

export default function Dashboard() {
  return (
    <div>
      <MovieManagerment />
      <UserManagerment />
    </div>
  )
}
