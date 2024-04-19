
export const metadata = {
    title: 'Detail Product',
  }
  
  export default function LoginLayout({
    children,params
  }: {
    children: React.ReactNode,
    params: {slug:string}
  }) {
    return (
      <>
        {children}
      </>
    )
  }
