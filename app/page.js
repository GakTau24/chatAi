"use client"
import { useState } from "react"
import { requestMessage } from "@/utils/groq"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism"

export default function Home() {
  const [data, setData] = useState("")

  const sendMessage = async () => {
    const chat = await requestMessage(message.value)
    setData(chat.choices[0].message.content)
  }

  return (
    <section className="flex min-h-screen flex-col justify-center items-center bg-gray-900 gap-4 text-white w-full mx-auto">
      <h1 className="text-3xl font-bold"><span className="text-blue-500">Selamat</span> Datang</h1>
      <div className="max-w-xl">
        {
        data ? <SyntaxHighlighter language="javascript" style={vscDarkPlus} className="rounded-xl" wrapLongLines={true}>{data}</SyntaxHighlighter>
        : <SyntaxHighlighter language="javascript" style={vscDarkPlus} className="rounded-xl">Apa ada yang bisa saya bantu?</SyntaxHighlighter>
        }
      </div>
      <form className="flex flex-col gap-3 w-full max-w-xl">
        <textarea type="text" placeholder="kirim pesan" id="message" className="py-2 px-3 bg-transparent w-full text-white border-blue-500 border rounded-lg shadow-xl" />
        <button className="bg-blue-500 py-2 px-4 rounded-lg shadow-xl" type="button" onClick={sendMessage}>Kirim</button>
      </form>
    </section>
  );
}
