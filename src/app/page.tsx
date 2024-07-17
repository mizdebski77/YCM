'use client'
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from "./core/store/store";
import { decrement, increment, selectCount } from "./counterslice";
import background from './common/Images/hero.jpg';
import { motion } from "framer-motion"
import greenBuble from './common/Images/greenBuble.svg';
import blueBuble from './common/Images/blueBuble.svg';
import img from './common/Images/imageSection.jpg';
import { choseUsData, informationsData, pathData } from './core/arrays';
import wave from './common/Images/topWave.svg';
import howItWork from './common/Images/howItWorks.jpg';

export default function Home() {
    const count = useSelector((state: RootState) => selectCount(state));
    const dispatch = useDispatch<AppDispatch>();

    return (
        <main className='overflow-x-hidden '>
            <header style={{
                backgroundImage: `url(${background.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                boxShadow: 'inset 1008px -184px 116px 5px #f7f7f7',
                maxWidth: '1920px',
                margin: 'auto'
            }}
                className='md:min-h-[540px] md:p-14 px-12 pt-14 flex justify-start'
            >
                <div className='grid justify-center items-center gap-2 max-w-[980px]'>
                    <motion.h1
                        initial={{ y: '-20%', opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="lg:text-7xl sm:text-4xl text-3xl text-blue text-center">
                        Stand Out in the job Market with our
                        <span className="text-green"> AI - Powered</span> CV Creator</motion.h1>
                    <motion.div
                        initial={{ y: '40%', opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="md:flex grid items-center justify-center md:gap-5">
                        <a
                            className="btn btn-acce border-none bg-green text-white btn-active hover:bg-lightgreen md:text-lg text-sm font-medium">
                            Creat your CV with AI
                        </a>
                        <span
                            className="divider divider-horizontal md:m-4 my-0 mx-auto">OR</span>
                        <a
                            href='/Log-In'
                            className="btn bg-blue border-none text-white hover:bg-lightblue md:text-lg text-sm font-medium ">
                            Log-In to your account
                        </a>
                    </motion.div>
                </div>

            </header>

            <div className="p-4">
                <motion.div
                    className=" bg-base-100 shadow-xl m-auto my-12 grid lg:grid-cols-3 justify-center align-center rounded-3xl max-w-screen-2xl"
                    initial={{ y: '30%', opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    {informationsData.map((information, index) => (
                        <motion.div
                            key={index}
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: index * 0.1 }}
                            className={`p-6 flex justify-center items-center gap-4 ${index % 2 === 0 ? ' ' : 'lg:border-y-0 border-y-2 lg:border-x-2 border-green'}`}>
                            <img
                                src={information.img.src}
                                alt='AI brain'
                                className='md:max-w-20 max-w-12 '
                            />
                            <span
                                className="md:card-title text-md font-medium">
                                {information.preText}
                                <span className='text-green'>
                                    {information.coloredText}
                                </span> {information.postText}</span>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            <section className='relative lg:mt-[-140px] mt-[-64px] ' >
                <img
                    src={wave.src}
                    alt='wave'
                    className=' w-full'
                />

                <div
                    className='bg-green lg:p-24 p-8 md:mt-[-56px] realtive '>
                    <img src={greenBuble.src} alt='green buble' className='absolute opacity-20 z-0 max-w-[440px] right-[-240px] ' />
                    <img src={greenBuble.src} alt='green buble' className='absolute bottom-[420px] opacity-30 z-0 max-w-[440px] left-[-240px]' />
                    <div className='max-w-screen-2xl grid md:grid-cols-2 md:gap-24 gap-12 items-start justify-center m-auto'>
                        <motion.img
                            initial={{ x: '-20%', opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                            src={howItWork.src}
                            alt='how it works'
                            className='rounded-3xl shadow-[0_0_20px_0] shadow-white w-full' />
                        <motion.div
                            initial={{ x: '20%', opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                            className='grid gap-8'
                        >
                            <h2 className='text-center md:text-5xl text-2xl text-white tracking-wide'>How it works?</h2>
                            <p className='md:text-2xl  text-white font-light my-4 text-justify'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos ut iure explicabo saepe aperiam, beatae maxime culpa repellendus iste. Perferendis ea consequatur totam incidunt ad nam doloremque architecto repellendus ab? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos ut iure explicabo saepe aperiam, beatae maxime culpa repellendus iste. Perferendis ea consequatur totam incidunt ad nam doloremque architecto repellendus ab?</p>
                            <button
                                className="btn bg-blue border-none text-white hover:bg-lightblue md:text-lg text-sm font-medium ">
                                Create Account
                            </button>
                        </motion.div>
                    </div>
                </div>
                <img
                    src={wave.src}
                    alt='bottom wave'
                    className=' w-full rotate-180'
                />
            </section>


            <section className='p-4'>
                <div className=' shadow-[0_0_20px_#b9b9b9]  rounded-2xl md:p-14 p-8 lg:mt-[-120px] mx-auto grid lg:grid-cols-2 gap-12 items-center max-w-screen-2xl'>
                    <motion.div
                        initial={{ x: '-20%', opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <h3 className=' mb-8 md:text-5xl text-2xl text-center'> Why <span className='text-green'>you should</span> chose our creator?</h3>
                        {choseUsData.map((text, index) => (
                            <p className=' border-b border-green md:p-5 p-2 text-center md:text-lg ' key={index}>{text}</p>
                        ))}
                    </motion.div>
                    <motion.img
                        src={img.src} alt='why you should chose us'
                        initial={{ x: '20%', opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className='rounded-2xl shadow-[0_0_20px_#b9b9b9] ' />
                </div>
            </section>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className='w-full bg-blue lg:p-12 p-6 py-8 mdz:mt-32 mt-16 shadow-[0_0_20px_#919191] md:flex justify-evenly grid gap-3 z-10 relative '>
                {pathData.map((information) => (
                    <motion.div
                        initial={{ y: '50%', opacity: 0 }}
                        whileInView={{ y: '0%', opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: information.id * 0.2 }} key={information.id}
                        className='flex items-center gap-6'>
                        <span className='bg-green text-white flex justify-center items-center md:w-[56px] md:h-[56px] w-[32px] h-[32px] rounded-full md:text-2xl'>{information.id}</span>
                        <span className='text-white md:text-2xl font-light'>{information.text}</span>
                    </motion.div>
                ))}
            </motion.div>

            <section
                className='grid md:grid-cols-2 md:gap-12 gap-8 m-auto justify-center items-center md:py-32 py-16 px-19 relative max-w-screen-2xl p-4'>
                <img src={greenBuble.src} alt='green buble' className='absolute left-[-150px] z-0 max-w-[420px] top-12' />
                <img src={blueBuble.src} alt='green buble' className='absolute right-[-150px] z-0 max-w-[320px] top-[-150px]' />
                <motion.div
                    initial={{ x: '-20%', opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className='flex flex-col justify-center items-center gap-4' >
                    <h4 className='md:text-5xl text-2xl text-green text-center'
                    >Create a professional CV with our AI creator</h4>
                    <p className='mdz:text-3xl text-lg text-blue'>and get hired faster</p>
                    <button
                        className="btn bg-blue border-none text-white hover:bg-lightblue md:text-lg text-sm font-medium ">
                        Create CV
                    </button>
                </motion.div>
                <motion.img
                    src={img.src} alt='why you should chose us'
                    initial={{ x: '20%', opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className='rounded-2xl shadow-[0_0_20px_#b9b9b9] ' />
            </section>

            <section>
                <button onClick={() => dispatch(increment())}>+</button>
                <span>{count}</span>
                <button onClick={() => dispatch(decrement())}>-</button>
            </section>
        </main>
    )
}