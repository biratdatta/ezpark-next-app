
import Header from "@/app/pageComponents/Header/page"
import Feedback from "@/app/pageComponents/Feedback/page"

export default function Home() {
  return (
  <main>
    <Header/>
       <div style={{ marginTop: '80px' }}> {/* Adjust value as needed */}
    <Feedback/>
    </div>
  </main>
  );
}
