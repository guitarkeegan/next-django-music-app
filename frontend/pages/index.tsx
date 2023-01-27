// import Head from 'next/head'
// import Image from 'next/image'
import { Inter } from '@next/font/google'
// import styles from '@/styles/Home.module.css'
// import { GetServerSideProps } from 'next'
// import { InferGetServerSidePropsType } from 'next'
// import axios from 'axios'
// import Link from 'next/link'

import Layout from "../components/layout/Layout";
import Home from "../components/Home";

const inter = Inter({ subsets: ['latin'] })

export default function Index() {

  return (
    <Layout>
      <Home />
    </Layout>
  )
}

// export const getServerSideProps: GetServerSideProps = async ()=>{
//   const response = await axios.get(`${process.env.API_URL}/api/messages/`)
//   const data = response.data
//   return {
//     props: {
//       data,
//     }
//   }
// }
  
