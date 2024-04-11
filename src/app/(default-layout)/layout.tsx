import DefaultLayout from "@/layouts/DefaultLayout"

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
