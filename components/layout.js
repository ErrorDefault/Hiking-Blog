import Alert from '../components/alert'
import Footer from '../components/footer'
import Meta from '../components/meta'

// <Alert preview={preview} /> <-- used to be before <main> in <div className="min-h-screen">
// may or may not be used later

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}
