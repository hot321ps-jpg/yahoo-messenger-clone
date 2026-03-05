import "./globals.css";

export default function RootLayout({
  children
}:{
  children:React.ReactNode
}){

  return(

  <html lang="zh-Hant">
    <body className="bg-[#2b0052] text-white">

      {children}

    </body>
  </html>

  )
}
