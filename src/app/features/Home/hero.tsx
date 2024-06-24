import { Header } from './header';
import { HowItWorks } from './howItWorks';
import { Informations } from './informations';
import { OurCreator } from './ourCreator';

export const Hero = () => {
    return (
        <main className='overflow-x-hidden pb-16'>
            <Header />
            <Informations />
            <HowItWorks />
            <OurCreator />
        </main>
    )
}