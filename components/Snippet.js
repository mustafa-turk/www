export default function Snippet({ children }) {
  return (
    <div className="border-solid border border-neutral-800 p-3 overflow-scroll rounded-md">
       {children}
    </div>
  )
}