"use client";
import { MdEmail } from "react-icons/md";
import profile from '../common/Images/account.svg';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function Creator() {


    return (
        <main className="min-h-screen grid grid-cols-2">
            <div className="p-12  text-blue text-center  justify-center flex flex-col gap-12">
                <h1 className="text-5xl">Your Data</h1>

                <div className="shadow-[0_0_20px_#b9b9b9] p-8 ">
                    <span className="text-3xl">Personal Informations</span>
                    <form className="rounded-2xl grid grid-cols-2 gap-4 mt-4">

                        <input
                            type="text"
                            placeholder="Name"
                            className="input input-bordered w-full "
                        />
                        <input
                            type="text"
                            placeholder="Last Name"
                            className="input input-bordered w-full "
                        />
                        <input
                            type="text"
                            placeholder="E-Mail"
                            className="input input-bordered w-full "
                        />
                        <input
                            type="text"
                            placeholder="Phone"
                            className="input input-bordered w-full "
                        />

                        <input
                            type="text"
                            placeholder="Name"
                            className="input input-bordered w-full "
                        />

                        <label htmlFor="file-upload" className="flex items-center cursor-pointer duration-300 hover:opacity-75">
                            <input id="file-upload" type="file" className="hidden" />
                            <img src={profile.src} className="max-w-[40px]" />
                            <span  >Wgraj zdjęcie</span>
                        </label>
                    </form>
                </div>

                <div className="shadow-[0_0_20px_#b9b9b9] p-8 ">
                    <span className="text-3xl">Experience</span>
                    <form className="rounded-2xl grid  gap-4 mt-4">

                        <input
                            type="text"
                            placeholder="Position"
                            className="input input-bordered w-full "
                        />
                        <input
                            type="text"
                            placeholder="Company Name"
                            className="input input-bordered w-full "
                        />
                        <input
                            type="text"
                            placeholder="City"
                            className="input input-bordered w-full "
                        />

                        <div className="flex gap-4">
                            <input
                                type="date"
                                placeholder="Start Date"
                                className="input input-bordered w-full "
                            />

                            <input
                                type="date"
                                placeholder="End Date"
                                className="input input-bordered w-full"
                            />
                        </div>

                        <div >
                            <ReactQuill theme="snow" style={{ background: 'white', }} />
                        </div>
                        <button className="btn max-w-xs m-auto bg-blue px-12 text-white hover:bg-lightblue">Add Position</button>


                    </form>
                </div>

                <div className="shadow-[0_0_20px_#b9b9b9] p-8 ">
                    <span className="text-3xl">Education</span>
                    <form className="rounded-2xl grid  gap-4 mt-4">

                        <input
                            type="text"
                            placeholder="School Name"
                            className="input input-bordered w-full "
                        />
                        <input
                            type="text"
                            placeholder="Dregree"
                            className="input input-bordered w-full "
                        />
                        <input
                            type="text"
                            placeholder="Field of study"
                            className="input input-bordered w-full "
                        />

                        <div className="flex gap-4">
                            <input
                                type="date"
                                placeholder="Start Date"
                                className="input input-bordered w-full "
                            />

                            <input
                                type="date"
                                placeholder="End Date"
                                className="input input-bordered w-full"
                            />
                        </div>

                        <div >
                            <ReactQuill placeholder="Description (optional)" theme="snow" style={{ background: 'white', }} />
                        </div>
                        <button className="btn max-w-xs m-auto bg-blue px-12 text-white hover:bg-lightblue">Add Position</button>


                    </form>
                </div>

                <div className="shadow-[0_0_20px_#b9b9b9] p-8 ">
                    <span className="text-3xl">Skills</span>
                    <form className="rounded-2xl flex  gap-4 mt-4">
                        <input
                            type="text"
                            placeholder="Skill Name"
                            className="input input-bordered w-full "
                        />
                        <button className="btn max-w-xs m-auto bg-blue px-12 text-white hover:bg-lightblue">Add Skill</button>
                    </form>

                    <div className="mt-4">
                        <fieldset className="border rounded-lg p-4">
                            <legend className="text-xl">Your Skills</legend>

                            <span className="bg-green px-6 py-1 rounded-xl text-white relative">
                                <span>React</span>
                                <button className="absolute bg-red text-white w-[20px] h-[20px] rounded-full text-xs bottom-[20px] right-[-8px] duration-300 hover:bg-lightRed">x</button>
                            </span>
                        </fieldset>
                    </div>
                </div>


                <div className="shadow-[0_0_20px_#b9b9b9] p-8 ">
                    <span className="text-3xl">Summary</span>
                    <form className="rounded-2xl grid  gap-4 mt-4">

                        <div >
                            <ReactQuill theme="snow" style={{ background: 'white', }} />
                        </div>
                    </form>
                </div>

                <div className="shadow-[0_0_20px_#b9b9b9] p-8 ">
                    <span className="text-3xl">Clause</span>
                    <form className="rounded-2xl grid  gap-4 mt-4">

                        <div >
                            <ReactQuill theme="snow" style={{ background: 'white', }} />
                        </div>
                    </form>
                </div>

                <div className="shadow-[0_0_20px_#b9b9b9] p-8 ">
                    <span className="text-3xl">Interests</span>
                    <form className="rounded-2xl flex  gap-4 mt-4">
                        <input
                            type="text"
                            placeholder="Skill Name"
                            className="input input-bordered w-full "
                        />
                        <button className="btn max-w-xs m-auto bg-blue px-12 text-white hover:bg-lightblue">Add Skill</button>
                    </form>

                    <div className="mt-4">
                        <fieldset className="border rounded-lg p-4">
                            <legend className="text-xl">Your Skills</legend>

                            <span className="bg-green px-6 py-1 rounded-xl text-white relative">
                                <span>React</span>
                                <button className="absolute bg-red text-white w-[20px] h-[20px] rounded-full text-xs bottom-[20px] right-[-8px] duration-300 hover:bg-lightRed">x</button>
                            </span>
                        </fieldset>
                    </div>
                </div>




            </div >

            <div className="bg-green p-12">
                <div className="p-4 text-5xl text-white text-center grid items-center justify-center">
                    <h1>Chose your CV template</h1>

                </div>
            </div>

        </main >


    );
};