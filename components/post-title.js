export default function PostTitle({ children }) {
  return (
    <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-2 md:mb-4 text-center md:text-left">
      {children}
    </h1>
  )
}
