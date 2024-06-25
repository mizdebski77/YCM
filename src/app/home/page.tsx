import { Header } from './header';
import { HowItWorks } from './howItWorks';
import { Informations } from './informations';
import { OurCreator } from './ourCreator';
import { Path } from './path';
import { PhotoSection } from './photoSection';

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