import MagicLinkEmail from "@/emails/MagicLinkEmail";
import { resend } from "./resend"

export default async function sendVerificationRequest(params: { identifier: any; url: any; provider: any; theme: any }) {
    const { identifier: email, url, provider, theme } = params
    const {host} = new URL(url)

    try {
        const data = await resend.emails.send({
            from: "onboarding@resend.dev",
            to: ["philipnwabuwa@gmail.com"],
            subject: `Sign in to ${host}`,
            text: text({ url, host }),
            react: MagicLinkEmail({ url, host }),

        })
        return {success: true, data}
    } catch (error) {
        
        throw new Error("Error sending email")
    }
}

const text = ({ url }: { url: string; host: string }) => `Sign in to ${new URL(url).host}\n${url}\n\n`
