import background from '../Images/hero.jpg';

export const Hero = () => {
    return (
        <header style={{
            backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundPosition: 'center', marginTop: '-80px', boxShadow: '11px -400px 197px 66px rgba(0, 0, 0, 0.95) inset',
        }} className='min-h-screen flex justify-center mt-(-10)'>
            <h1 className="text-7xl text-blue ">Stand Out in the job Market with our <span className="text-green">AI - Powered</span> CV Creator</h1>
            <div className="flex items-center gap-5">
                <button className="btn bg-green text-white btn-active hover:bg-lightgreen">
                    Creat your CV with AI
                </button>
                <span className="text-xl text-blue">or</span>
                <button className="btn bg-blue text-white hover:bg-lightblue ">
                    Log-In to yout account
                </button>
            </div>
        </header>
    )
}