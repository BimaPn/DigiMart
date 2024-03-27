import DefaultLayout from "@/layouts/DefaultLayout"

export const metadata = {
    title: 'Register',
  }
  
  export default function RegiterLayout({
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