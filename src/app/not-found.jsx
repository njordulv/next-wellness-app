import Back from './components/Back'

export const metadata = {
  title: 'Page Not Found',
  description: '404 - Page Not Found',
}

export default function NotFound() {
  return (
    <>
      <div className="grid justify-center">
        <h1 className="m-0">404</h1>
        <hr />
        <h3 className="m-0">Page Not Found</h3>
        <br />
        <Back />
      </div>
    </>
  )
}
