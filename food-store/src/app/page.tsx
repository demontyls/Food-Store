import {Metadata} from "next";
import PageHome from "@/pages/page-home/page-home";


export const metadata: Metadata = {
  title: 'Food Store | Home page',
  description: 'Home delivery of food products',
}
export default function Home() {

  return (
    <PageHome/>
  )
}