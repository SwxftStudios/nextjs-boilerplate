"use client"

import { signIn, signOut, useSession } from "next-auth/react"

export default function LoginPage() {
  const { data: session, status } = useSession()

  if (status === "loading") {
    return (
      <div className="flex min-h-screen items-center justify-center bg-zinc-950 text-white">
        <p className="text-lg">Loading...</p>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-950 text-white p-4">
      <div className="w-full max-w-md space-y-8 bg-zinc-900 p-8 rounded-xl border border-zinc-800 text-center shadow-xl">
        {session ? (
          <>
            <h2 className="text-2xl font-bold tracking-tight">Welcome back!</h2>
            <div className="flex flex-col items-center space-y-3 my-6">
              {session.user?.image && (
                <img 
                  src={session.user.image} 
                  alt="Profile" 
                  className="w-16 h-16 rounded-full border-2 border-indigo-500"
                />
              )}
              <div>
                <p className="text-xl font-semibold">{session.user?.name}</p>
                <p className="text-sm text-zinc-400">{session.user?.email}</p>
              </div>
            </div>
            <button
              onClick={() => signOut()}
              className="w-full py-2.5 px-4 bg-zinc-800 hover:bg-zinc-700 active:bg-zinc-600 text-white font-medium rounded-lg transition duration-200"
            >
              Sign Out
            </button>
          </>
        ) : (
          <>
            <div className="space-y-2">
              <h2 className="text-3xl font-extrabold tracking-tight">Swxft Studios</h2>
              <p className="text-sm text-zinc-400">Sign in with your Discord account to continue</p>
            </div>
            <div className="mt-8">
              <button
                onClick={() => signIn("discord", { callbackUrl: "/" })}
                className="w-full flex items-center justify-center gap-3 py-3 px-4 bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 text-white font-semibold rounded-lg shadow-md hover:shadow-indigo-500/20 transition duration-200 cursor-pointer"
              >
                {/* Simplified SVG Discord Icon */}
                <svg className="w-5 h-5 fill-current" viewBox="0 0 127.14 96.36">
                  <path d="M107.7,8.07A105.15,105.15,0,0,0,77.26,0a77.19,77.19,0,0,0-3.3,6.83A96.67,96.67,0,0,0,53.22,6.83,77.19,77.19,0,0,0,49.88,0,105.15,105.15,0,0,0,19.44,8.07C3.66,31.58-1.86,54.65,1,77.53A105.73,105.73,0,0,0,32,96.36a74.37,74.37,0,0,0,6.72-11A68.6,68.6,0,0,1,28.1,80.12c1-.71,1.93-1.46,2.83-2.22a74.52,74.52,0,0,0,65.34,0c.9.76,1.84,1.51,2.83,2.22a68.4,68.4,0,0,1-10.64,5.27,74.74,74.74,0,0,0,6.72,11,105.73,105.73,0,0,0,31.05-18.83C129.8,49.67,123.76,26.85,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53S36.18,40.36,42.45,40.36,53.9,46,53.77,53,48.72,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.24,60,73.24,53S78.41,40.36,84.69,40.36,96.14,46,96,53,91,65.69,84.69,65.69Z"/>
                </svg>
                Connect with Discord
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
