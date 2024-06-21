import background from '../Images/hero.jpg';

export const Hero = () => {
    return (
        <header style={{
            backgroundImage: `url(${background.src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            boxShadow: 'inset 1008px -184px 116px 5px #f7f7f7'
        }}
            className='min-h-[540px] p-14 flex justify-start'
        >
            <div className='grid justify-center items-center gap-2 max-w-[980px]'>
                <h1 className="text-7xl text-blue text-center">Stand Out in the job Market with our <span className="text-green">AI - Powered</span> CV Creator</h1>
                <div className="flex items-center justify-center gap-5">
                    <button className="btn btn-acce border-none bg-green text-white btn-active hover:bg-lightgreen text-lg font-medium">
                        Creat your CV with AI
                    </button>
                    <span className="text-xl text-blue">or</span>
                    <button className="btn bg-blue border-none text-white hover:bg-lightblue text-lg font-medium ">
                        Log-In to yout account
                    </button>
                </div>
            </div>

        </header>
    )
}