import Head from 'next/head'
import Navbar from '@/Components/Navbar'
import End from '@/Components/End'

import { useState } from 'react';
import Layout from '@/Components/Layout';
import Link from 'next/link';

export default function Home() {

  return (
    <div>
        bebas
        <Link href="/Form">
            Ke index
        </Link>
    </div>
  )
}
