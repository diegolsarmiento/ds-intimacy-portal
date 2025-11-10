export default function ContactPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-24">
      <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Contact</h1>
      <p className="mt-4 opacity-80">Tell me about the feeling you want your users to remember.</p>
      <form className="mt-8 space-y-4 max-w-xl">
        <input className="w-full rounded-md border px-3 py-2 text-sm" placeholder="Name" />
        <input className="w-full rounded-md border px-3 py-2 text-sm" placeholder="Email" />
        <textarea className="w-full rounded-md border px-3 py-2 text-sm h-32" placeholder="Message" />
        <button className="rounded-md border px-5 py-2 text-sm">Send</button>
      </form>
    </main>
  )
}
