import background from '../Images/hero.jpg';
import { Header } from './header';
import { HowItWorks } from './howItWorks';
import { Informations } from './informations';

export const Hero = () => {
    return (
        <main>
            <Header />
            <Informations />
            <HowItWorks />
        </main>
    )
}