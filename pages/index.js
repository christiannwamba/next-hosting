import React from 'react'

export default function Home({me}) {
  return (
    <>
    <h2>{me.name}</h2>
    <p>Login: {me.login}</p>
    <p>Company: {me.company}</p>
    <p>Locationogin: {me.location}</p>
    </>
  )

}


export async function getServerSideProps() {
  const res = await fetch('https://api.github.com/users/christiannwamba')
  const me = await res.json()
  // console.log(me)
  return {
    props: {
      me
    }
  }
}
