import SettingLayout from "@/layouts/SettingLayout"

export const metadata = {
    title: 'Settings',
}
  export default function LoginLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <SettingLayout>
        {children}
      </SettingLayout>
    )
  }
