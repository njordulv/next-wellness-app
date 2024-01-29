export default function Footer() {
  const date = new Date()
  const year = date.getFullYear()

  return (
    <footer className="flex flex-col items-center text-center py-5 text-[13px]">
      <div className="w-full max-w-[620px] px-4 mx-auto box-border">
        <div className="relative flex items-center justify-center">
          Copyright &copy; {year} Next Wellness App. <br />
          All Rights Reserved.
        </div>
      </div>
    </footer>
  )
}
