export default function LoginPanel () {
    return (
        <div className="w-screen h-screen flex justify-center items-center">
            <div className="w-1/2 h-fit bg-slate-400 flex flex-col p-4 pb-8 shadow-md rounded-lg">
                <h1 className="text-center text-xl font-medium">Login</h1>
                <label for="email">Email</label>
                <input id="email" className="mb-6 rounded-full" type="text" placeholder="Email"></input>
                <label for="password">Password</label>
                <input id="password" className="mb-6 rounded-full" type="password"></input>
                <button>Submit</button>
            </div>
        </div>
    )
}