"use client";
import React, { useEffect, useState } from 'react'
import { getProviders, signIn, getSession } from "next-auth/react"
import styles from "./login.module.css"

function Login() {
  const [providers, setProviders] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const allProviders:any = await getProviders();
      setProviders(allProviders);
    }

    // call the function
    fetchData()
      // make sure to catch any error
      .catch(console.error);
  }, []);

  return (
    <div className={styles.login}>
      {Object.values(providers).map((provider:any) => {
          return (<div className="mt-3" key={provider.name}>
              <button onClick={() => signIn(provider.id)}>
                  Sign in with {provider.name}
              </button>
          </div>)
      })}
    </div>
  )
}

export default Login