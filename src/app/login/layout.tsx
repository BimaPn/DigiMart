import DefaultLayout from "@/layouts/DefaultLayout"

export const metadata = {
    title: 'Login',
  }
  
  export default function LoginLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <DefaultLayout>
            {children}
        </DefaultLayout>
    )
  }