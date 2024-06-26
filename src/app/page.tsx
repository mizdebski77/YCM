import { Header } from "./Home/header";
import { HowItWorks } from "./Home/howItWorks";
import { Informations } from "./Home/informations";
import { OurCreator } from "./Home/ourCreator";
import { Path } from "./Home/path";
import { PhotoSection } from "./Home/photoSection";

export default function Home() {
    return (
        <main className='overflow-x-hidden '>
            <Header />
            <Informations />
            <HowItWorks />
            <OurCreator />
            <Path />
            <PhotoSection />
        </main>
    )
}