import { MdEmail } from "react-icons/md";
import profile from '../common/Images/account.svg';

export default function Creator() {
    return (
        <main className="min-h-screen grid grid-cols-2">
            <div className="p-12  text-blue text-center  justify-center flex flex-col gap-12">
                <h1 className="text-5xl">Your Data</h1>

                <form className="shadow-[0_0_20px_#b9b9b9] p-8 rounded-2xl grid grid-cols-2 gap-4">
                    <input
                        type="text"
                        placeholder="Name"
                        className="input input-bordered w-full max-w-xs"
                    />
                    <input
                        type="text"
                        placeholder="Last Name"
                        className="input input-bordered w-full max-w-xs"
                    />
                    <input
                        type="text"
                        placeholder="E-Mail"
                        className="input input-bordered w-full max-w-xs"
                    />
                    <input
                        type="text"
                        placeholder="Phone"
                        className="input input-bordered w-full max-w-xs"
                    />

                    <input
                        type="text"
                        placeholder="Name"
                        className="input input-bordered w-full max-w-xs"
                    />

                    <label htmlFor="file-upload" className="flex items-center cursor-pointer duration-300 hover:opacity-75">
                        <input id="file-upload" type="file" className="hidden" />
                        <img src={profile.src} className="max-w-[40px]" />
                        <span>Wgraj zdjęcie</span>
                    </label>

                </form>



            </div>

            <div className="bg-green p-12">
                <div className="p-4 text-5xl text-white text-center grid items-center justify-center">
                    <h1>Chose your CV template</h1>
                </div>
            </div>

        </main>
    );
};