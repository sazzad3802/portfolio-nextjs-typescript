import Link from "next/link";
import { redirect } from "next/navigation";

export default function Home() {
  redirect('/blog');
  
  // return (
  //   <div style={{ textAlign: "center", padding: "2rem" }}>
  //     <h1>Welcome to the App</h1>
  //     <Link href="/blog">
  //       <button style={{ padding: "0.5rem 1rem", fontSize: "1rem" }}>
  //         Go to User List
  //       </button>
  //     </Link>
  //   </div>
  // );
}